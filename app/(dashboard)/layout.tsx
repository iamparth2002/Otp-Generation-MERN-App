import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { TopNav } from "@/components/top-nav"
import { Footer } from "./../../components/Footer"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-6">{children}</main>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

