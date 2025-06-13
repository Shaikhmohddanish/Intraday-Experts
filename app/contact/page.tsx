"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our expert team for personalized trading solutions
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400/50 transition-all duration-300 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">First Name</label>
                      <Input
                        type="text"
                        placeholder="Enter your first name"
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Last Name</label>
                      <Input
                        type="text"
                        placeholder="Enter your last name"
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                    <Input
                      type="text"
                      placeholder="Enter subject"
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                    <Textarea
                      placeholder="Enter your message"
                      rows={5}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-teal-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">Office Address</h3>
                      <p className="text-gray-300">
                        Sakaram Patil Marg, Sector 1A, CBD Belapur,
                        <br />
                        Navi Mumbai, Maharashtra 400614, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">Phone Number</h3>
                      <p className="text-gray-300">9167603133</p>
                      <Button
                        variant="link"
                        className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                        onClick={() => (window.location.href = "tel:+919167603133")}
                      >
                        Call Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-green-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">Email Address</h3>
                      <p className="text-gray-300">support@intradayexperts.com</p>
                      <Button
                        variant="link"
                        className="text-green-400 hover:text-green-300 p-0 mt-2"
                        onClick={() => (window.location.href = "mailto:support@intradayexperts.com")}
                      >
                        Email Us
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">Business Hours</h3>
                      <div className="text-gray-300 space-y-1 text-sm lg:text-base">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-24 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8">Ready to Start Trading?</h2>
          <p className="text-lg lg:text-xl mb-8">Contact us today and take the first step towards successful trading</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold"
            onClick={() => (window.location.href = "tel:+919167603133")}
          >
            Call Now: 9167603133
          </Button>
        </div>
      </section>
    </div>
  )
}
