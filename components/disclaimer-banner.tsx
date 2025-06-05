"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DisclaimerBanner() {

  return (
    <div className="bg-white-600 text-white px-4 py-3 text-sm relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="flex-1 overflow-hidden">
          <div className="scrolling-text-wrapper relative w-full h-6 overflow-hidden">
            <div className="scrolling-text absolute left-0 top-0 flex">
              <span className="inline-block px-4 font-semibold text-red-900">
                ⚠️ IMPORTANT: Investment is subject to market risk. Please read all scheme related documents carefully
                before investing. Past performance does not guarantee future results.
              </span>
              <span className="inline-block px-4 font-semibold text-red-900">
                ⚠️ IMPORTANT: Investment is subject to market risk. Please read all scheme related documents carefully
                before investing. Past performance does not guarantee future results.
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrolling-text-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .scrolling-text {
          display: flex;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
