"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"

// Type Definitions
interface OtpItem {
  id: number
  date: string
  service: string
  price: number
  mobile: string
  status: "pending" | "failed" | "success" | "cancelled"
  otp: string
  left: string
  expired: boolean
}

interface OtpContextType {
  otpHistory: OtpItem[]
  setOtpHistory: React.Dispatch<React.SetStateAction<OtpItem[]>>
  amount: number
  setAmount: React.Dispatch<React.SetStateAction<number>>
  cancelOtpTransaction: (id: number) => void
}

// Sample Data
const initialHistory: OtpItem[] = []

const OtpContext = createContext<OtpContextType | undefined>(undefined)

export const OtpProvider = ({ children }: { children: ReactNode }) => {
  const [otpHistory, setOtpHistory] = useState<OtpItem[]>(initialHistory)
  const [amount, setAmount] = useState<number>(1000)

  const cancelOtpTransaction = (id: number) => {
    setOtpHistory(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              status: "cancelled",
              otp: "",
              left: "",
              expired: true,
            }
          : item
      )
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setOtpHistory(prev =>
        prev.map(item => {
          if (!item.left || item.expired) return item

          const [m, s] = item.left.split(":").map(Number)
          const totalSec = m * 60 + s - 1

          if (totalSec <= 0) {
            return { ...item, left: "00:00", expired: true }
          }

          const mm = String(Math.floor(totalSec / 60)).padStart(2, "0")
          const ss = String(totalSec % 60).padStart(2, "0")

          return { ...item, left: `${mm}:${ss}` }
        })
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <OtpContext.Provider value={{ otpHistory, setOtpHistory, amount, setAmount, cancelOtpTransaction }}>
      {children}
    </OtpContext.Provider>
  )
}

export const useOtpContext = (): OtpContextType => {
  const context = useContext(OtpContext)
  if (!context) throw new Error("useOtpContext must be used within OtpProvider")
  return context
}
