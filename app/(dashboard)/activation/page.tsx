"use client"

import { useState } from "react"
import { Copy, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useOtpContext } from "@/contexts/OtpContext"



export default function ActivationPage() {
  const [timeFilter, setTimeFilter] = useState("all")
    const {otpHistory,cancelOtpTransaction } = useOtpContext();
  return (
    <div className="mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">OTP History</h1>
        <div className="h-1 w-32 bg-gradient-to-r from-rose-600 to-red-600 mt-2" />
      </div>

      <div className="flex justify-between items-center">
        <Select value={timeFilter} onValueChange={setTimeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full">
          <thead>
            <tr className="bg-rose-500 text-white">
              <th className="px-4 py-3 text-left">DATE</th>
              <th className="px-4 py-3 text-left">SERVICE</th>
              <th className="px-4 py-3 text-left">PRICE</th>
              <th className="px-4 py-3 text-left">MOBILE</th>
              <th className="px-4 py-3 text-left">STATUS</th>
              <th className="px-4 py-3 text-left">OTP</th>
              <th className="px-4 py-3 text-left">LEFT</th>
              <th className="px-4 py-3 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {otpHistory.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">{item.date}</td>
                <td className="px-4 py-3 text-sm">{item.service}</td>
                <td className="px-4 py-3 text-sm">{item.price}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    {item.mobile}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => navigator.clipboard.writeText(item.mobile)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  {item.status === "pending" ? (
                    <span className="inline-block w-4 h-4">⌛</span>
                  ) : (
                    <X className="text-red-500 h-4 w-4" />
                  )}
                </td>
                <td className="px-4 py-3 text-sm">{item.otp}</td>
                <td className="px-4 py-3 text-sm">{item.left}</td>
                <td className="px-4 py-3 text-sm">
                  {item.status === "pending" && (
                    <Button variant="destructive" size="sm" className="bg-rose-500 hover:bg-rose-600" onClick={()=>cancelOtpTransaction(item.id)}>
                      Cancel
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

