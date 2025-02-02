"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function SettingsPage() {
  const [defaultOperator, setDefaultOperator] = useState("operator1")
  const router = useRouter()

  const handleLogout = () => {
    // Add logout logic here
    router.push("/login")
  }

  return (
    <div className="mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <div className="h-1 w-32 bg-gradient-to-r from-rose-600 to-red-600 mt-2" />
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Default Operator</CardTitle>
            <CardDescription>Choose your default OTP operator</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={defaultOperator} onValueChange={setDefaultOperator}>
              <SelectTrigger className="w-full md:w-[300px]">
                <SelectValue placeholder="Select operator" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="operator1">OTP Operator 1</SelectItem>
                <SelectItem value="operator2">OTP Operator 2</SelectItem>
                <SelectItem value="operator3">OTP Operator 3</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Actions</CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Logout</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You will be logged out of your account. Any ongoing OTP requests will be cancelled.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-rose-500 hover:bg-rose-600" onClick={handleLogout}>
                    Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

