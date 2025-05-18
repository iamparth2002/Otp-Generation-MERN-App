"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useOtpContext } from "@/contexts/OtpContext"

const services = [
  { name: "WhatsApp", value: "whatsapp", price: 10 },
  { name: "Twitter", value: "twitter", price: 12 },
  { name: "IRCTC", value: "irctc", price: 15 },
  { name: "Flipkart", value: "flipkart", price: 8 },
  { name: "Paytm", value: "paytm", price: 9 },
]

export default function DashboardPage() {
  const [selectedService, setSelectedService] = useState<string>("")
  const [submitted, setSubmitted] = useState(false)
  const [mobileNumber, setMobileNumber] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { setOtpHistory, setAmount } = useOtpContext()

  const generateRandomMobile = () => {
    return "9" + Math.floor(100000000 + Math.random() * 900000000).toString()
  }

  const generateRandomOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString()
  }

  const handleSubmit = () => {
    if (selectedService) {
      setMobileNumber(generateRandomMobile())
      setSubmitted(true)
    }
  }

  const handleGenerateOTP = () => {
    const serviceDetails = services.find(service => service.value === selectedService)
    if (!serviceDetails) return

    setLoading(true)

    setTimeout(() => {
      const newOtpEntry = {
        id: Date.now(),
        date: new Date().toLocaleString("en-IN"),
        service: serviceDetails.name,
        price: serviceDetails.price,
        mobile: `+91${mobileNumber}`,
        status: "pending",
        otp: generateRandomOtp(),
        left: "25:12",
        expired: false,
      }
      setAmount(prev => prev - serviceDetails.price)
      setOtpHistory(prev => [newOtpEntry, ...prev])
      setLoading(false)
      router.push("/activation")
    }, 1500)
  }

  return (
    <div className="space-y-8 mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Select Service</h1>
        <div className="h-1 w-32 bg-gradient-to-r from-rose-600 to-red-600 mt-2" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <Select onValueChange={setSelectedService}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a service..." />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.name} - ₹{service.price}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            className="w-full md:w-auto bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>

      {submitted && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Generated Mobile Number:</h2>
          <p className="text-lg font-mono bg-gray-100 p-3 rounded-md w-fit">{mobileNumber}</p>

          <Button
            onClick={handleGenerateOTP}
            disabled={loading}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
          >
            {loading ? "Generating OTP..." : "Generate OTP"}
          </Button>
        </div>
      )}
    </div>
  )
}
