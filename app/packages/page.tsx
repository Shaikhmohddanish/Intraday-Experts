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

      {/* Stock Option Intraday */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Stock Option Intraday
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-slate-700 text-center py-6">
                <CardTitle className="text-2xl text-white">Basic</CardTitle>
                <p className="text-sm text-gray-300">(Exclusive of GST)</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-teal-400">₹</span>
                  <span className="text-5xl font-bold text-white">20,999</span>
                  <p className="text-gray-400 mt-2">Monthly</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Get 1 tip per day</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Accuracy upto 70% above</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Get proper target & Stop-loss</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Profit target Rs. 4000 – Rs. 6000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Eligibility criteria – capital below 50000</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3" onClick={() => (window.location.href = "tel:+919167603133")}>
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Primary Package */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-teal-400 transition-all duration-300 overflow-hidden transform hover:scale-105 shadow-xl relative">
              <div className="absolute top-0 right-0 bg-teal-500 text-white px-4 py-1 text-sm font-semibold">
                POPULAR
              </div>
              <CardHeader className="bg-slate-700 text-center py-6">
                <CardTitle className="text-2xl text-white">Primary</CardTitle>
                <p className="text-sm text-gray-300">(Exclusive of GST)</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-teal-400">₹</span>
                  <span className="text-5xl font-bold text-white">30,999</span>
                  <p className="text-gray-400 mt-2">Monthly</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Get upto 2 tips per day</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Get proper target & Stop-loss</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Personal relationship manager</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Eligibility criteria – capital above Rs. 70,000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Profit target Rs. 6,000 – Rs. 9,000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Accuracy up to 85%</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3" onClick={() => (window.location.href = "tel:+919167603133")}>
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pro Package */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-slate-700 text-center py-6">
                <CardTitle className="text-2xl text-white">Pro</CardTitle>
                <p className="text-sm text-gray-300">(Exclusive of GST)</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-teal-400">₹</span>
                  <span className="text-5xl font-bold text-white">50,999</span>
                  <p className="text-gray-400 mt-2">Monthly</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Get upto 1 to 2 tips per day</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Get proper target & stop-loss</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Profit target- Rs. 10,000 to Rs. 15,000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Eligibility criteria Capital above Rs. 100,000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Check className="h-5 w-5 text-teal-400" />
                    </div>
                    <span className="text-gray-300">Accuracy upto 85% above</span>
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

          {/* Additional Pro Packages */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-10">Advanced Pro Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pro 75,999 */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">Pro Plus</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">75,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get upto 1 to 2 tips per day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get proper target & stop-loss</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Profit target- Rs. 15,000 to Rs. 20,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Eligibility criteria Capital above Rs. 150,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy upto 85% above</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Pro 100,999 */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">Pro Premium</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">100,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get upto 1 to 2 tips per day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get proper target & stop-loss</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Profit target- Rs. 20,000 to Rs. 25,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Eligibility criteria Capital above Rs. 200,000 - 250,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy upto 85% above</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Pro 160,999 */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">Pro Elite</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">160,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get upto 1 to 2 tips per day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get proper target & stop-loss</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Profit target- Rs. 40,000 to Rs. 50,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Eligibility criteria Capital above Rs. 300,000 - 350,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy upto 85% above</span>
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

          {/* Higher Tier Packages */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-10">Premium Investment Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">Executive</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">200,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get upto 1 to 2 tips per day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get proper target & stop-loss</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Profit target- Rs. 50,000 to Rs. 60,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Eligibility criteria Capital above Rs. 400,000 - 500,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy upto 85% above</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">Platinum</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">303,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get upto 1 to 2 tips per day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get proper target & stop-loss</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Profit target- Rs. 60,000 to Rs. 70,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Eligibility criteria Capital above Rs. 500,000 - 600,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy upto 85% above</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+919167603133")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">Diamond</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-teal-400">₹</span>
                    <span className="text-4xl font-bold text-white">406,999</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get upto 1 to 2 tips per day</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Get proper target & stop-loss</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Profit target- Rs. 80,000 to Rs. 90,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Eligibility criteria Capital above Rs. 700,000 - 800,000</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal-400 mr-2" />
                      <span className="text-gray-300">Accuracy upto 85% above</span>
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
