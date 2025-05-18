"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Wallet, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { WalletDialog } from "./wallet-dialog"
import { useOtpContext } from "@/contexts/OtpContext"

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)
    const { amount } = useOtpContext();


  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/dashboard" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-rose-600 rounded-full" />
          <span className="font-semibold hidden sm:inline">OTP Generator</span>
        </Link>

        {/* Desktop Navigation */}
        {/* <div className="hidden md:flex items-center space-x-4 ml-4">
          <Button
            variant="default"
            size="sm"
            className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700"
          >
            Add Balance
          </Button>
        </div> */}

        <div className="hidden md:flex items-center space-x-4 ml-4">
          <Button
             variant="default"
            className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700"
            onClick={() => setOpen(true)}
          >
            <Wallet className="h-4 w-4" />
            <span>Wallet</span>
          </Button>
          <WalletDialog open={open} onOpenChange={setOpen} />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto md:hidden" aria-label="Open Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              <div className="text-sm text-gray-700">
                Welcome, <span className="text-rose-600">User</span>
              </div>
              <div className="font-medium">Balance: ₹146.0</div>
              <Button
                variant="default"
                size="sm"
                className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700"
              >
                Add Balance
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

