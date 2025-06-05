"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-500/10 rounded-lg rotate-45 animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-500/10 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-green-500/10 rounded-lg animate-float-slow"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse-slow delay-1000"></div>
    </div>
  )
}
