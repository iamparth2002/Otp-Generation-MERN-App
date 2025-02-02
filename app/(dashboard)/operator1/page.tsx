"use client"

// import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Operator1Page() {
  return (
    <div className=" mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Select Service</h1>
        <div className="h-1 w-32 bg-gradient-to-r from-rose-600 to-red-600 mt-2" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="operator1">Facebook </SelectItem>
              <SelectItem value="operator2">Twitter</SelectItem>
              <SelectItem value="operator3">Whatsapp</SelectItem>
            </SelectContent>
          </Select>

          <Button className="w-full md:w-auto bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700">
            Submit
          </Button>
        </div>

        {/* <div className="hidden lg:block">
          <Image
            src=""
            alt="Dashboard Illustration"
            width={500}
            height={400}
            className="w-full"
          />
        </div> */}
      </div>
    </div>
  )
}

