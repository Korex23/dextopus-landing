import Layout from '../components/layout/Layout'

export default function Terms() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="text-sm text-accent-gold uppercase tracking-wider">
              Legal
            </div>
            <h1 className="text-h1 font-extrabold">Terms and Conditions</h1>
            <div className="text-sm text-text-dim">
              Last updated: January 15, 2024
              <br />
              Dextopus Technologies Inc.
            </div>
          </div>

          {/* Highlight Block */}
          <div className="p-6 border-l-4 border-accent-gold bg-background-dark rounded-r-xl">
            <p className="text-text-dim">
              By accessing or using Dextopus services, you agree to be bound by
              these Terms and Conditions. Please read them carefully before using
              our platform.
            </p>
          </div>

          <hr className="border-border" />

          {/* Content Sections */}
          <section className="space-y-4">
            <h2 className="text-h3 font-bold">1. About Dextopus</h2>
            <p className="text-text-dim">
              Dextopus provides cross-chain payment infrastructure APIs that allow
              businesses to accept deposits and send withdrawals across multiple
              blockchain networks. We act as a non-custodial service provider and
              do not hold or control user funds.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">2. Eligibility</h2>
            <p className="text-text-dim">
              To use Dextopus services, you must:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Be at least 18 years old</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Have the legal authority to enter into this agreement</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Not be located in a restricted jurisdiction</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Comply with all applicable laws and regulations</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">3. API Usage</h2>
            <p className="text-text-dim">
              When using our API, you agree to:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Keep your API credentials secure</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Not exceed rate limits or abuse the service</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Implement proper security measures</span>
              </li>
              <li className="text-text-dim flex items-start gap-2">
                <span className="text-accent-gold mt-1">→</span>
                <span>Provide accurate transaction information</span>
              </li>
            </ul>
          </section>

          {/* Warning Block */}
          <div className="p-6 border-l-4 border-error bg-background-dark rounded-r-xl">
            <h3 className="text-lg font-bold mb-2 text-error">
              Important Notice
            </h3>
            <p className="text-text-dim text-sm">
              Cryptocurrency transactions are irreversible. You are responsible for
              verifying all transaction details before processing. Dextopus is not
              liable for transactions sent to incorrect addresses or with incorrect
              parameters.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">4. Fees and Payment</h2>
            <p className="text-text-dim">
              Dextopus charges fees for transaction processing as outlined in our
              pricing documentation. Fees are subject to change with notice. You
              are responsible for paying all applicable fees.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">5. Limitation of Liability</h2>
            <p className="text-text-dim">
              Dextopus provides services "as is" without warranties. We are not
              liable for losses resulting from blockchain network issues, smart
              contract failures, or third-party service interruptions. Our
              liability is limited to the fees paid for the specific transaction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">6. Termination</h2>
            <p className="text-text-dim">
              We reserve the right to suspend or terminate your access to our
              services for violations of these terms, suspicious activity, or legal
              requirements. You may terminate your account at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">7. Changes to Terms</h2>
            <p className="text-text-dim">
              We may modify these terms at any time. Continued use of our services
              after changes constitutes acceptance of the updated terms. Material
              changes will be communicated via email.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-h3 font-bold">8. Governing Law</h2>
            <p className="text-text-dim">
              These terms are governed by the laws of Delaware, United States.
              Disputes will be resolved through binding arbitration in accordance
              with the American Arbitration Association rules.
            </p>
          </section>

          {/* Contact Block */}
          <div className="p-6 border border-border bg-background-dark rounded-xl">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-text-dim text-sm">
              Questions about these Terms? Contact us at{' '}
              <a
                href="mailto:legal@dextopus.com"
                className="text-accent-gold hover:underline"
              >
                legal@dextopus.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
