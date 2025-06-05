import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, User, Clock, Headphones } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Market Research Consultancy
            </span>
          </h1>
        </div>
      </section>

      {/* Our Journey to Excellence */}
      <section className="py-16 lg:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our Journey to Excellence</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Trading View Experts is a premier market research consultancy based in New York City. Specializing in
                providing in-depth analysis and strategic insights for traders and investors, they offer a wide range of
                services tailored to meet the unique needs of each client. With a team of experienced analysts and
                cutting-edge technology, Trading View Experts has earned a reputation for delivering accurate and timely
                market intelligence that drives profitable decision-making.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-20"></div>
              <Image
                src="/images/Our Journey to Excellence.jpeg?height=400&width=500"
                alt="Team celebrating success"
                width={500}
                height={400}
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
              <Image
                src="/images/Our Mission.jpg?height=400&width=500"
                alt="Our Mission"
                width={500}
                height={400}
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To provide accurate and timely market intelligence that empowers traders and investors to make
                profitable decisions while maintaining the highest standards of professionalism and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 lg:py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our Core Values</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Excellence:</h3>
                    <p className="text-gray-300">
                      We strive for excellence in all that we do, delivering top-quality analysis and insights that
                      exceed client expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Integrity:</h3>
                    <p className="text-gray-300">
                      We uphold the highest ethical standards, ensuring transparency and honesty in every aspect of our
                      work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Innovation:</h3>
                    <p className="text-gray-300">
                      We embrace innovation and cutting-edge technology to continually enhance our services and stay
                      ahead in the dynamic world of financial markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-200 rounded-lg p-4 text-center">
                    <span className="text-2xl font-bold text-red-800">BUY</span>
                  </div>
                  <div className="bg-yellow-200 rounded-lg p-4 text-center">
                    <span className="text-2xl font-bold text-yellow-800">HOLD</span>
                  </div>
                  <div className="bg-pink-200 rounded-lg p-4 text-center">
                    <span className="text-2xl font-bold text-pink-800">SELL</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-2">
                  <div className="w-16 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-12 h-2 bg-pink-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Client-Centric Approach */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Client-Centric Approach</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We are dedicated to understanding and meeting the unique needs of each client to deliver tailored market
              research solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Personalized Analysis</h3>
                <p className="text-gray-300 leading-relaxed">
                  We tailor our analysis to each client's specific requirements, providing personalized insights that
                  drive informed decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Timely Updates</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our team ensures clients receive timely market updates and insights to stay ahead of trends and
                  opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <Headphones className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Continuous Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  We offer ongoing support and guidance to clients, helping them navigate the complex world of financial
                  markets with confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-white leading-tight">
              Start optimizing your trading strategies with us. Take the first step towards success today.
            </h2>

            <div className="mb-8">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                GET STARTED
              </Button>
            </div>

            <div className="border-t border-white/30 pt-6 mt-6">
              <p className="text-white/90 mb-2">OR CALL US AT:</p>
              <p className="text-2xl lg:text-3xl font-bold text-white">+91 9167603133</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
