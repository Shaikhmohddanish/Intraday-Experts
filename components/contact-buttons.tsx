"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactButtons() {
  const [showWhatsappMessage, setShowWhatsappMessage] = useState(false)

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your trading services. Can you provide more information?",
    )
    window.open(`https://wa.me/919167603133?text=${message}`, "_blank")
  }

  return (
    <div className="fixed z-50 flex flex-col gap-4 bottom-8 right-8">
      {/* WhatsApp Button */}
      <div className="relative">
        <Button
          onClick={() => setShowWhatsappMessage(!showWhatsappMessage)}
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
          onMouseEnter={() => setShowWhatsappMessage(true)}
          onMouseLeave={() => setShowWhatsappMessage(false)}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>

        {showWhatsappMessage && (
          <div className="absolute bottom-16 right-0 bg-white text-slate-800 p-4 rounded-lg shadow-lg w-64 animate-fade-in">
            <p className="font-medium text-green-600 mb-2">Chat with us on WhatsApp</p>
            <p className="text-sm mb-3">Get instant support from our trading experts</p>
            <Button onClick={openWhatsApp} className="w-full bg-green-500 hover:bg-green-600 text-white">
              Start Chat
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
