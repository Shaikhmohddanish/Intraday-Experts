import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactButtons } from "@/components/contact-buttons"
import { PhoneButton } from "@/components/phone-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Intraday Experts - Professional Trading Solutions",
  description: "Empowering Traders and Investors with market insights and professional trading solutions",
  keywords: "trading, intraday, stock market, investment, market analysis, trading tips",
  authors: [{ name: "Intraday Experts" }],
  creator: "Intraday Experts",
  publisher: "Intraday Experts",
  robots: "index, follow",
  openGraph: {
    title: "Intraday Experts - Professional Trading Solutions",
    description: "Empowering Traders and Investors with market insights and professional trading solutions",
    url: "https://intradayexperts.com",
    siteName: "Intraday Experts",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisclaimerBanner />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <PhoneButton />
        <ContactButtons />
      </body>
    </html>
  )
}
