"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-red-600 text-white px-4 py-3 text-sm relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="flex-1 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-block px-4 font-semibold text-yellow-200">
              ⚠️ IMPORTANT: Investment is subject to market risks. Please read all scheme related documents carefully
              before investing. Past performance does not guarantee future results. ⚠️
            </span>
            <span className="inline-block px-4 font-semibold text-yellow-200">
              ⚠️ IMPORTANT: Investment is subject to market risks. Please read all scheme related documents carefully
              before investing. Past performance does not guarantee future results. ⚠️
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-red-700 p-1 h-auto ml-4 flex-shrink-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
