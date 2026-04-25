import Layout from '../components/layout/Layout'

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="text-sm text-accent-gold uppercase tracking-wider">
              Legal
            </div>
            <h1 className="text-h1 font-extrabold">Privacy Policy</h1>
            <div className="text-sm text-text-dim">
              Last updated: January 15, 2024
              <br />
              Dextopus Technologies Inc.
            </div>
          </div>

          {/* Highlight Block */}
          <div className="p-6 border-l-4 border-accent-gold bg-background-dark rounded-r-xl">
            <p className="text-text-dim">
              At Dextopus, we take your privacy seriously. This policy outlines how
              we collect, use, and protect your information when you use our
              services.
            </p>
          </div>

          <hr className="border-border" />

          {/* Content Sections */}
          <section className="space-y-4">
            <h2 className="text-h3 font-bold">1. Who We Are</h2>
            <p className="text-text-dim">
              Dextopus Technologies Inc. ("Dextopus", "we", "us", or "our") is a
              cross-chain payment infrastructure provider. We provide APIs and
              services that enable businesses to accept deposits and send
              withdrawals across multiple blockchain networks.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">2. Who This Policy Applies To</h2>
            <p className="text-text-dim">
              This Privacy Policy applies to:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Visitors to our website</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Developers and businesses using our API</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>End users interacting with our services</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">3. Information We Collect</h2>
            <p className="text-text-dim">
              We collect information necessary to provide our services, including:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>
                  Account information (email, company name, API credentials)
                </span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>
                  Transaction data (blockchain addresses, amounts, timestamps)
                </span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>
                  Usage data (API calls, feature usage, performance metrics)
                </span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>
                  Technical data (IP addresses, browser type, device information)
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">4. How We Use Your Information</h2>
            <p className="text-text-dim">We use collected information to:</p>
            <ul className="space-y-2 ml-6">
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Provide and maintain our services</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Process transactions and send notifications</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Improve our services and develop new features</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Ensure security and prevent fraud</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Comply with legal obligations</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">5. Data Security</h2>
            <p className="text-text-dim">
              We implement industry-standard security measures to protect your
              information, including encryption, secure API authentication, and
              regular security audits. However, no method of transmission over the
              internet is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">6. Data Retention</h2>
            <p className="text-text-dim">
              We retain your information for as long as necessary to provide our
              services and comply with legal obligations. Transaction data may be
              retained for regulatory compliance purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">7. Your Rights</h2>
            <p className="text-text-dim">
              Depending on your location, you may have rights to access, correct,
              delete, or export your personal information. Contact us to exercise
              these rights.
            </p>
          </section>

          {/* Contact Block */}
          <div className="p-6 border border-border bg-background-dark rounded-xl">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-text-dim text-sm">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a
                href="mailto:privacy@dextopus.com"
                className="text-accent-gold hover:underline"
              >
                privacy@dextopus.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
