"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Clock, Target, Calculator, Shield, Users, ArrowRight, Play, Phone } from "lucide-react"
import { InteractiveCard } from "@/components/interactive-card"
import { FloatingElements } from "@/components/floating-elements"
import { StatsSection } from "@/components/stats-section"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ParallaxSection } from "@/components/parallax-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <FloatingElements />

        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0h100v100h-100z' fill='none'/%3E%3Cpath d='m0 0 100 100m0-100-100 100' stroke='%23ffffff' strokeWidth='0.5'/%3E%3C/svg%3E")`,
              animation: "float 20s ease-in-out infinite",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl">
            <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full mb-8">
              <span className="text-teal-400 text-sm font-medium">🚀 #1 Trading Platform in India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
              Empowering Traders and Investors With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 animate-gradient">
                Intraday Experts
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-4xl leading-relaxed">
              Gain market insights tailored to your needs. Make informed decisions with professional trading solutions
              powered by AI and expert analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => (window.location.href = "tel:+919167603133")}
              >
                GET STARTED
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Market Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-teal-400" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-blue-400" />
                <span>5000+ Active Traders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Common Challenges Section */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        </ParallaxSection>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Common{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Challenges
              </span>{" "}
              Faced by Traders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the obstacles hindering successful trading strategies and how we solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InteractiveCard
              icon={BarChart3}
              title="Market Volatility"
              description="Stay ahead in the fast-paced world of trading despite market fluctuations with our real-time analysis."
              gradient="from-red-500 to-orange-500"
            />

            <InteractiveCard
              icon={Clock}
              title="Information Overload"
              description="Filter through vast data to focus on what truly impacts your investments with AI-powered insights."
              gradient="from-blue-500 to-purple-500"
            />

            <InteractiveCard
              icon={Target}
              title="Lack of Strategy"
              description="Craft and execute a solid trading plan to maximize your investment potential with expert guidance."
              gradient="from-green-500 to-teal-500"
            />

            <InteractiveCard
              icon={Calculator}
              title="Risk Management"
              description="Implement effective risk control techniques to safeguard your capital with advanced algorithms."
              gradient="from-purple-500 to-pink-500"
            />
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Trading solutions background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Tailored{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Solutions
              </span>{" "}
              for Your Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to address your unique trading concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/Research Insights.jpeg?height=250&width=400"
                  alt="Research Insights"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Expert Analysis
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal-400 transition-colors">
                  Research Insights
                </h3>
                <p className="text-gray-300 mb-4">
                  Get valuable insights for informed trading decisions with our expert research and analysis.
                </p>
                <Button
                  variant="ghost"
                  className="text-teal-400 hover:text-black p-0"
                  onClick={() => (window.location.href = "tel:+919167603133")}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/Portfolio Management.jpeg?height=250&width=400"
                  alt="Portfolio Management"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Expert Managed
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal-400 transition-colors">
                  Portfolio Management
                </h3>
                <p className="text-gray-300 mb-4">
                  Customized strategies to optimize your investment portfolio with professional oversight.
                </p>
                <Button
                  variant="ghost"
                  className="text-teal-400 hover:text-black p-0"
                  onClick={() => (window.location.href = "tel:+919167603133")}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden md:col-span-3 lg:col-span-1">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/Risk Assessment.jpeg?height=250&width=400"
                  alt="Risk Assessment"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Real-time
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal-400 transition-colors">
                  Risk Assessment
                </h3>
                <p className="text-gray-300 mb-4">
                  Identify and mitigate potential risks in your investment strategy with advanced analytics.
                </p>
                <Button
                  variant="ghost"
                  className="text-teal-400 hover:text-black p-0"
                  onClick={() => (window.location.href = "tel:+919167603133")}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey to Excellence Section */}
      <section className="py-16 lg:py-24 bg-slate-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-20"></div>
              <Image
                src="/images/Our Journey to Excellence.jpeg?height=500&width=600"
                alt="Our Journey"
                width={600}
                height={500}
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full mb-6">
                <span className="text-teal-400 text-sm font-medium">Since 2018</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Our Journey to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                  Excellence
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Since 2018, we've been a trusted partner for profitable market insights, serving thousands of traders
                and investors across India.
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our approach combines expert analysis with cutting-edge technology to serve diverse clients, from
                beginners to professional traders.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">AI-powered market analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 market monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Expert trader support</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="group border-2 border-teal-400 text-black hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
                onClick={() => (window.location.href = "tel:+919167603133")}
              >
                READ MORE
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Clients
              </span>{" "}
              Say
            </h2>
            <p className="text-xl text-gray-300">
              Real stories from real traders who transformed their trading journey
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Transform Trading Experience CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <FloatingElements />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-4 text-teal-100">READY TO ENHANCE YOUR TRADING?</p>

            <h2 className="text-3xl lg:text-6xl font-bold mb-8 leading-tight">
              Transform Your Trading Experience Today
            </h2>

            <p className="text-xl mb-12 text-gray-100 max-w-2xl mx-auto">
              Join thousands of successful traders who trust our platform for their trading decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="group bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => (window.location.href = "tel:+919167603133")}
              >
                GET STARTED FREE
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                onClick={() => (window.location.href = "tel:+919167603133")}
              >
                <Phone className="mr-2 h-5 w-5" />
                CALL NOW
              </Button>
            </div>

            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available Now</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <span className="text-lg font-bold">+91 9167603133</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
