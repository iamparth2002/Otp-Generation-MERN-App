"use client"

import { useState } from "react"
import { CreditCard } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RechargeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: (amount: number) => void
}

export function RechargeDialog({ open, onOpenChange, onSuccess }: RechargeDialogProps) {
  const [amount, setAmount] = useState<number>(100)
  const [loading, setLoading] = useState(false)

  const handleRecharge = async () => {
    setLoading(true)

    try {
      // Load Razorpay script
      await loadRazorpayScript()

      // Create a new Razorpay instance
      const options = {
        key: "rzp_test_3qT2gS8f6XgYVr", // Replace with your test key
        amount: amount * 100, // Razorpay takes amount in paise
        currency: "INR",
        name: "MyApp",
        description: "Wallet Recharge",
        handler: () => {
          setLoading(false)
          onSuccess(amount)
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#DC2626", // Red color matching the theme
        },
      }

      const razorpay = new (window as any).Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error("Payment failed:", error)
      setLoading(false)
    }
  }

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = resolve
      document.body.appendChild(script)
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Recharge Wallet
          </DialogTitle>
          <DialogDescription>Enter the amount you want to add to your wallet.</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (₹)</Label>
            <Input
              id="amount"
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="border-primary/20 focus-visible:ring-primary"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[100, 200, 500].map((value) => (
              <Button
                key={value}
                type="button"
                variant="outline"
                className={`border-primary/20 ${amount === value ? "bg-primary/10 border-primary/30" : ""}`}
                onClick={() => setAmount(value)}
              >
                ₹{value}
              </Button>
            ))}
          </div>

          <Button className="w-full" onClick={handleRecharge} disabled={loading || amount <= 0}>
            {loading ? "Processing..." : "Proceed to Pay"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">Powered by Razorpay (Test Mode)</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
