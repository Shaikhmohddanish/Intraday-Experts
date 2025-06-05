"use client"

import { AnimatedCounter } from "./animated-counter"
import { TrendingUp, Users, Award, Target } from "lucide-react"

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Thousands</span>
          </h2>
          <p className="text-xl text-gray-300">Our track record speaks for itself</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="mb-4 flex justify-center">
              <div className="p-4 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <AnimatedCounter end={5000} suffix="+" />
            <p className="text-gray-300 mt-2">Happy Clients</p>
          </div>

          <div className="text-center group">
            <div className="mb-4 flex justify-center">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            <AnimatedCounter end={95} suffix="%" />
            <p className="text-gray-300 mt-2">Success Rate</p>
          </div>

          <div className="text-center group">
            <div className="mb-4 flex justify-center">
              <div className="p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <AnimatedCounter end={6} suffix=" Years" />
            <p className="text-gray-300 mt-2">Experience</p>
          </div>

          <div className="text-center group">
            <div className="mb-4 flex justify-center">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <AnimatedCounter end={10000} suffix="+" />
            <p className="text-gray-300 mt-2">Trades Analyzed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
