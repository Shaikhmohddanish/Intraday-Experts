"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, BarChart3, Shield, Target, Users, Clock } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive trading solutions designed to empower your investment journey
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-teal-400" />
                </div>
                <CardTitle className="text-center text-white">Market Research & Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/Research Insights.jpeg?height=500&width=500"
                  alt="Market Research"
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 mb-4">
                  In-depth market analysis with real-time data and expert insights to help you make informed trading
                  decisions.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Technical Analysis</li>
                  <li>• Fundamental Analysis</li>
                  <li>• Market Trend Reports</li>
                  <li>• Sector Analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <BarChart3 className="h-12 w-12 text-teal-400" />
                </div>
                <CardTitle className="text-center text-white">Portfolio Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/portfoliomanagementservice.jpg?height=500&width=500"
                  alt="Portfolio Management"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 mb-4">
                  Professional portfolio management services tailored to your risk tolerance and investment goals.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Asset Allocation</li>
                  <li>• Diversification Strategies</li>
                  <li>• Performance Monitoring</li>
                  <li>• Rebalancing Services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-teal-400" />
                </div>
                <CardTitle className="text-center text-white">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/Risk Assessment.jpg?height=500&width=500"
                  alt="Risk Management"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300 mb-4">
                  Comprehensive risk assessment and management strategies to protect your investments.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Risk Assessment</li>
                  <li>• Stop Loss Strategies</li>
                  <li>• Hedging Techniques</li>
                  <li>• Capital Protection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">Additional Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Trading Strategies</h3>
              <p className="text-gray-300">
                Customized trading strategies based on your investment style and market conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personal Consultation</h3>
              <p className="text-gray-300">One-on-one consultation sessions with our expert analysts and traders.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-time Alerts</h3>
              <p className="text-gray-300">
                Instant market alerts and trading signals delivered to your preferred device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Ready to Transform Your Trading?</h2>
          <p className="text-xl mb-8">Get started with our comprehensive trading services today</p>
          <Button size="lg" variant="secondary" className="bg-white text-teal-500 hover:bg-gray-100" onClick={() => (window.location.href = "tel:+919167603133")}>Contact Us Now</Button>
        </div>
      </section>
    </div>
  )
}
