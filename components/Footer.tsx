import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            Created with <Heart className="h-4 w-4 fill-rose-500 text-rose-500" /> by{" "}
            <a href="#" className="font-medium text-rose-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Aashish
            </a>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} OTP Generator. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

