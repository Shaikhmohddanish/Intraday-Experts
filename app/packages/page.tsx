"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Packages</h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            We provide you the best packages and plans that can lead to a better future
          </p>
        </div>
      </section>

      {/* Options Trading Packages */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Options Trading Packages
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Option Gold */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-slate-700 text-center py-6">
                <CardTitle className="text-2xl text-white">Option Gold</CardTitle>
                <p className="text-sm text-gray-300">(Exclusive of GST)</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-teal-400">₹</span>
                  <span className="text-5xl font-bold text-white">76,999</span>
                  <p className="text-gray-400 mt-2">Monthly</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Get 1 to 3 expert tips daily</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Targeted for steady growth</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Accuracy: Up to 75%</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3" onClick={() => (window.location.href = "tel:+919167603133")}>
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Option Premium Gold */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-slate-700 text-center py-6">
                <CardTitle className="text-2xl text-white">Option Premium Gold</CardTitle>
                <p className="text-sm text-gray-300">(Exclusive of GST)</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-teal-400">₹</span>
                  <span className="text-5xl font-bold text-white">1,05,999</span>
                  <p className="text-gray-400 mt-2">Monthly</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Get 2 to 4 premium tips/day</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Jackpot trading chances</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Designed for active traders</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Accuracy: Up to 80%</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3" onClick={() => (window.location.href = "tel:+919167603133")}>
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Option Diamond */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-teal-400 transition-all duration-300 overflow-hidden transform hover:scale-105 shadow-xl relative">
              <div className="absolute top-0 right-0 bg-teal-500 text-white px-4 py-1 text-sm font-semibold">
                POPULAR
              </div>
              <CardHeader className="bg-slate-700 text-center py-6">
                <CardTitle className="text-2xl text-white">Option Diamond</CardTitle>
                <p className="text-sm text-gray-300">(Exclusive of GST)</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-teal-400">₹</span>
                  <span className="text-5xl font-bold text-white">1,67,999</span>
                  <p className="text-gray-400 mt-2">Monthly</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Get 2 to 4 high-conviction tips/day</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Smart entries, better exits</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Accuracy: Up to 85%</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3" onClick={() => (window.location.href = "tel:+919167603133")}>
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Option Premium Diamond */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-slate-700 text-center py-6">
                <CardTitle className="text-2xl text-white">Option Premium Diamond</CardTitle>
                <p className="text-sm text-gray-300">(Exclusive of GST)</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-teal-400">₹</span>
                  <span className="text-5xl font-bold text-white">2,31,999</span>
                  <p className="text-gray-400 mt-2">Monthly</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Top-tier daily tips for aggressive traders</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Balanced risk & returns</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Accuracy: Up to 85%</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3" onClick={() => (window.location.href = "tel:+919167603133")}>
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* HNI Premium Plans */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-6">👑 HNI PREMIUM PLANS</h3>
            <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
              Tailored for High Net-Worth Individuals Seeking Premium Returns
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* HNI Silver */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">HNI Silver</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">3,43,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">3 to 5 HNI-level tips/day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Best for consistent performers</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy: Up to 85%</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* HNI Gold */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">HNI Gold</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">4,56,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">3 to 5 high-accuracy trades/day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Smart portfolio builders</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy: Up to 90%</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* HNI Diamond */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">HNI Diamond</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">5,47,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">4 to 5 expert-backed tips/day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Advanced risk management included</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy: Up to 90%</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* More HNI Packages */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
              {/* HNI Premium */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-lg text-white">HNI Premium</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="text-center mb-3">
                    <span className="text-2xl font-bold text-teal-400">₹</span>
                    <span className="text-3xl font-bold text-white">7,12,999</span>
                    <p className="text-gray-400 mt-1 text-sm">Monthly</p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">2 to 4 top-level trades/day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Designed for serious growth</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy: Up to 90%</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-xs py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* HNI Premium Silver */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-lg text-white">HNI Premium Silver</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="text-center mb-3">
                    <span className="text-2xl font-bold text-teal-400">₹</span>
                    <span className="text-3xl font-bold text-white">8,23,999</span>
                    <p className="text-gray-400 mt-1 text-sm">Monthly</p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">3 to 5 focused tips/day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Priority support included</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy: Up to 90%</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-xs py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* HNI Premium Gold */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-lg text-white">HNI Premium Gold</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="text-center mb-3">
                    <span className="text-2xl font-bold text-teal-400">₹</span>
                    <span className="text-3xl font-bold text-white">9,93,999</span>
                    <p className="text-gray-400 mt-1 text-sm">Monthly</p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">3 to 5 elite-level trades/day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Designed for maximum consistency</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy: Up to 90%</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-xs py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* HNI Premium Diamond */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-lg text-white">HNI Premium Diamond</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="text-center mb-3">
                    <span className="text-2xl font-bold text-teal-400">₹</span>
                    <span className="text-3xl font-bold text-white">12,85,444</span>
                    <p className="text-gray-400 mt-1 text-sm">Monthly</p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">3 to 5 ultra-premium HNI tips/day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Focused on profit maximization</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy: Up to 95%</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-xs py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Elite HNI Packages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {/* HNI Premium Pro */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">HNI Premium Pro</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">14,95,444</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">High-precision trades curated by experts</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Personal trade manager support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy: Up to 95%</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* HNI King Premium Plus */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-teal-400 transition-all duration-300 overflow-hidden transform hover:scale-105 shadow-xl relative">
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-semibold">
                  ELITE
                </div>
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">HNI King Premium Plus</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">18,49,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">3 to 5 ultra-high conviction trades/day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Best for elite traders & institutions</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy: Up to 95%</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* HNI King Premium Pro */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">HNI King Premium Pro</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">22,85,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Our highest-value, most exclusive package</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Market-dominating strategy execution</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy: Up to 95%</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Ready To Hire A Great Team?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Take the first step towards transforming your trading journey with our expert guidance
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-xl font-bold rounded-xl" onClick={() => (window.location.href = "tel:+919167603133")}>
            START FREE TRIAL
          </Button>
        </div>
      </section>
    </div>
  )
}
