export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center">Terms & Conditions</h1>

        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Intraday Experts ("Company", "we", "us"), you
              accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Investment Disclaimer</h2>
            <p className="mb-4">
              <strong className="text-red-400">IMPORTANT:</strong> Investment in securities market are subject to market
              risks. Please read all the related documents carefully before investing.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Past performance is not indicative of future results</li>
              <li>All investments carry risk of loss</li>
              <li>You should consult with a financial advisor before making investment decisions</li>
              <li>The Company does not guarantee profits or returns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Services Provided</h2>
            <p className="mb-4">
              Intraday Experts provides market research, analysis, and trading recommendations. Our services
              include but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Market analysis and research reports</li>
              <li>Stock recommendations</li>
              <li>Portfolio management advice</li>
              <li>Risk assessment services</li>
              <li>Educational content and training</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Use services only for lawful purposes</li>
              <li>Maintain confidentiality of account information</li>
              <li>Make independent investment decisions</li>
              <li>Understand the risks involved in trading</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
            <p className="mb-4">
              The Company shall not be liable for any direct, indirect, incidental, special, consequential, or punitive
              damages arising from:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use or inability to use our services</li>
              <li>Investment losses or poor performance</li>
              <li>Technical issues or system downtime</li>
              <li>Errors in analysis or recommendations</li>
              <li>Third-party actions or market conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All fees are payable in advance</li>
              <li>Subscription fees are non-refundable</li>
              <li>Prices may change with 30 days notice</li>
              <li>Late payments may result in service suspension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">7. Intellectual Property</h2>
            <p>
              All content, research, analysis, and recommendations provided by the Company are proprietary and protected
              by intellectual property laws. Users may not reproduce, distribute, or commercially use our content
              without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">8. Termination</h2>
            <p>
              Either party may terminate this agreement at any time. The Company reserves the right to suspend or
              terminate services for violation of these terms or non-payment of fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be
              subject to the jurisdiction of courts in Mumbai, Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">10. Contact Information</h2>
            <p>
              For questions about these terms, please contact us at:
              <br />
              Email: support@intradayexperts.com
              <br />
              Phone: +91 9167603133
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-400 mt-8">Last updated: January 2025</p>
          </section>
        </div>
      </div>
    </div>
  )
}
