"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface InteractiveCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  children?: React.ReactNode
}

export function InteractiveCard({ icon: Icon, title, description, gradient, children }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 ${isHovered ? "scale-105" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      ></div>

      {/* Animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

      <CardContent className="relative p-6 lg:p-8">
        <div className="flex justify-center mb-6">
          <div
            className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
          </div>
        </div>

        <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-teal-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-300 text-sm lg:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {children}

        {/* Shine effect */}
        <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>
      </CardContent>
    </Card>
  )
}
