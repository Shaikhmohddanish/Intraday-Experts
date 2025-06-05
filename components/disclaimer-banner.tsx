"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DisclaimerBanner() {

  return (
    <div className="bg-white-600 text-white px-4 py-3 text-sm relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="flex-1 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-block px-4 font-semibold text-red-900">
              ⚠️ IMPORTANT: Investment is subject to market risks. Please read all scheme related documents carefully
              before investing. Past performance does not guarantee future results. ⚠️
            </span>
            <span className="inline-block px-4 font-semibold text-red-900">
              ⚠️ IMPORTANT: Investment is subject to market risks. Please read all scheme related documents carefully
              before investing. Past performance does not guarantee future results. ⚠️
            </span>
          </div>
        </div>
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
