import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TopupPage() {
  return (
    <div className=" mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Top Up Balance</h1>
        <div className="h-1 w-32 bg-gradient-to-r from-rose-600 to-red-600 mt-2" />
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Balance</CardTitle>
            <CardDescription>Choose your payment method and amount</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" type="number" placeholder="Enter amount" min="0" />
            </div>
            <div className="space-y-2">
              <Label>Payment Method</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Credit/Debit Card</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="netbanking">Net Banking</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full md:w-auto bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700">
              Proceed to Payment
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>Your recent balance top-ups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border">
              <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                <div>Date</div>
                <div>Amount</div>
                <div>Payment Method</div>
                <div>Status</div>
              </div>
              <div className="divide-y">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                    <div>2024-02-02</div>
                    <div>₹500.00</div>
                    <div>UPI</div>
                    <div className="text-green-600">Success</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

