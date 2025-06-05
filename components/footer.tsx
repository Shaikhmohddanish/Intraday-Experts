import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Intraday Experts provides premier market research solutions, empowering traders and investors globally
              with cutting-edge analysis and insights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-teal-400 hover:text-teal-300 transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-teal-400 hover:text-teal-300 transition-colors">
                Services
              </Link>
              <Link href="/packages" className="block text-teal-400 hover:text-teal-300 transition-colors">
                Packages
              </Link>
              <Link href="/about" className="block text-teal-400 hover:text-teal-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-teal-400 hover:text-teal-300 transition-colors">
                Contact
              </Link>
              <Link href="/terms" className="block text-teal-400 hover:text-teal-300 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="block text-teal-400 hover:text-teal-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>MIDC Industrial Area,</p>
              <p>Millenium Business Park,</p>
              <p>Mahape Road, Mumbai,</p>
              <p>Maharashtra 400555</p>
              <p className="mt-3">support@intradayexperts.com</p>
              <p>+91 9167603133</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © 2025 Intraday Experts | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
