"use client"

import { useState } from "react"
import { Wallet, Plus, Check } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { RechargeDialog } from "@/components/recharge-dialog"
import { useOtpContext } from "@/contexts/OtpContext"

interface WalletDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WalletDialog({ open, onOpenChange }: WalletDialogProps) {
    const {setAmount,amount} = useOtpContext();

  const [rechargeOpen, setRechargeOpen] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const { toast } = useToast()

  const handleRechargeSuccess = (amount: number) => {
    setAmount(prev=>prev+amount);
    setPaymentSuccess(true)
    setRechargeOpen(false)

    toast({
      title: "Recharge Successful",
      description: `₹${amount} has been added to your wallet.`,
      variant: "default",
    })
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              Your Wallet
            </DialogTitle>
            <DialogDescription>View your current balance and recharge your wallet.</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Available Balance</p>
                  <p className="text-3xl font-bold text-primary">₹{amount.toFixed(2)}</p>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full gap-2" onClick={() => setRechargeOpen(true)}>
              <Plus className="h-4 w-4" />
              Recharge Wallet
            </Button>

            {paymentSuccess && (
              <div className="flex items-center gap-2 p-3 rounded-md bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                <Check className="h-5 w-5" />
                <p className="text-sm font-medium">Last recharge was successful!</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <RechargeDialog open={rechargeOpen} onOpenChange={setRechargeOpen} onSuccess={handleRechargeSuccess} />
    </>
  )
}
