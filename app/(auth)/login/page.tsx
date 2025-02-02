"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Footer } from "./../../../components/Footer"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const router = useRouter()

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate OTP send
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setOtpSent(true)
    setLoading(false)
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate OTP verification
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push("/dashboard")
  }

  return (
    <>
      <div className="min-h-[630px] flex items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100 p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">OTP Generator App</h2>
            <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send OTP
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Verify OTP
                </Button>
              </form>
            )}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-rose-600 hover:text-rose-500">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>


  )
}

