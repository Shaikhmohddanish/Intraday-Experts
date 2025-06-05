"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Hemant Patel",
    role: "Day Trader",
    content: "Intraday Experts helped me navigate volatile markets with their insightful analysis. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Ravi More",
    role: "Investment Advisor",
    content:
      "I've seen significant growth in my portfolio since partnering with Intraday Experts. Their expertise is unparalleled.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Hanif Shaikh",
    role: "Swing Trader",
    content: "Intraday Experts' guidance has been invaluable in my trading journey. Their analysis is top-notch!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Dinesh Kamble",
    role: "Portfolio Manager",
    content: "Exceptional service and accurate predictions – Intraday Experts truly deliver on their promises.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 mx-4">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg lg:text-xl text-gray-300 mb-8 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                      <p className="text-teal-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevTestimonial}
          className="border-slate-600 text-black hover:bg-slate-700"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-teal-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
              }`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextTestimonial}
          className="border-slate-600 text-black hover:bg-slate-700"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
