"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Smartphone, Zap, MessageSquare, LifeBuoy, Settings, Menu, X } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "OTP Operator1",
    icon: Smartphone,
    href: "/operator1",
  },
  {
    title: "Top up balance",
    icon: Zap,
    href: "/topup",
  },
  {
    title: "Activation",
    icon: MessageSquare,
    href: "/activation",
  },
  {
    title: "Support",
    icon: LifeBuoy,
    href: "/support",
  },
  {
    title: "Setting",
    icon: Settings,
    href: "/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const NavLinks = () => (
    <nav className="space-y-2">
      {sidebarItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsMobileOpen(false)}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              isActive ? "bg-rose-50 text-rose-600" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            <span>{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r min-h-[calc(100vh-4rem)] p-4">
        <NavLinks />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed bottom-4 right-4 h-12 w-12 rounded-full bg-rose-600 text-white shadow-lg hover:bg-rose-700 z-50"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-4 pt-12">
          <NavLinks />
        </SheetContent>
      </Sheet>
    </>
  )
}

