import Layout from '../components/layout/Layout'
import type { ReactNode } from 'react'

function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="my-3 flex list-none flex-col gap-2 p-0">
      {items.map(item => (
        <li key={item} className="flex gap-2.5 text-[15px] leading-[1.7] text-text-dim">
          <span className="mt-[3px] shrink-0 font-mono text-xs text-accent-gold">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mb-3 mt-10 font-syne text-lg font-bold leading-tight tracking-[-0.01em] text-text first:mt-0">
      {children}
    </h2>
  )
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="mb-3.5 text-[15px] leading-[1.8] text-text-dim last:mb-0">{children}</p>
}

export default function Terms() {
  return (
    <Layout>
      <div className="relative z-[1] mx-auto max-w-[720px] px-6 pb-20 pt-10">
        <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-gold">Legal</div>
        <h1 className="mb-3 font-syne text-[clamp(28px,5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text">
          Terms and Conditions
        </h1>
        <div className="mb-14 font-mono text-[13px] text-text-dim">
          Last updated: April 2025 · Dextopus Technology Ltd, Lagos, Nigeria
        </div>

        <div className="my-6 rounded-lg border border-border border-l-[3px] border-l-accent-gold bg-background-darker px-6 py-5">
          <p className="text-sm leading-[1.8] text-text">
            By accessing or using the Dextopus API, documentation, or any related services, you agree to these terms. Please read them carefully. If you do not agree, do not use our services.
          </p>
        </div>

        <div className="my-10 h-px bg-border" />

        <SectionTitle>1. About Dextopus</SectionTitle>
        <Paragraph>
          Dextopus is a cross-chain settlement infrastructure service operated by Dextopus Technology Ltd, incorporated in Lagos, Nigeria. We provide API infrastructure that enables businesses and developers to integrate cross-chain deposit and withdrawal functionality into their products.
        </Paragraph>
        <Paragraph>
          These terms govern your use of the Dextopus API, documentation, website, and all related services (collectively, "the Service"). References to "Dextopus", "we", "us", or "our" mean Dextopus Technology Ltd.
        </Paragraph>

        <SectionTitle>2. Eligibility</SectionTitle>
        <Paragraph>You may use the Service only if:</Paragraph>
        <LegalList items={[
          'You are a business, developer, or entity with the legal capacity to enter into binding agreements',
          'Your use of the Service complies with all applicable laws in your jurisdiction',
          'You are not located in a jurisdiction where access to or use of blockchain infrastructure is prohibited',
        ]} />
        <Paragraph>The Service is not intended for individual consumers or end users. It is a B2B infrastructure product.</Paragraph>

        <SectionTitle>3. Access to the API</SectionTitle>
        <Paragraph>
          The Dextopus API is currently available without authentication. Access is provided on an as-is basis for integration and development purposes. We reserve the right to introduce authentication, rate limiting, or access controls at any time with reasonable notice to active partners.
        </Paragraph>
        <Paragraph>You are responsible for all activity that occurs through your use of the API, including the configuration of your fee wallet, recipient addresses, and refund addresses.</Paragraph>

        <SectionTitle>4. Permitted Use</SectionTitle>
        <Paragraph>You may use the Service to:</Paragraph>
        <LegalList items={[
          'Build and operate products that offer cross-chain deposit and withdrawal to your users',
          'Integrate Dextopus infrastructure into fintechs, payment products, wallets, and other financial applications',
          'Test and evaluate the API for integration purposes',
          'Configure partner fees and fee collection as described in our documentation',
        ]} />

        <SectionTitle>5. Prohibited Use</SectionTitle>
        <Paragraph>You may not use the Service to:</Paragraph>
        <LegalList items={[
          'Facilitate illegal transactions, money laundering, terrorist financing, or sanctions evasion',
          'Circumvent applicable financial regulations in your jurisdiction or any jurisdiction your users operate in',
          'Reverse engineer, decompile, or attempt to extract the source code of our infrastructure',
          'Resell or sublicense access to the API as a standalone service without our written consent',
          'Transmit malicious code or interfere with the operation of our infrastructure',
          'Make false representations about your integration or your relationship with Dextopus',
        ]} />

        <SectionTitle>6. Partner Fees and Monetization</SectionTitle>
        <Paragraph>
          You may configure a partner fee in basis points alongside your API calls. This fee is embedded into transactions and collected on-chain automatically when transactions execute. Dextopus charges a protocol fee of 0.15% on all transactions processed through the infrastructure.
        </Paragraph>
        <Paragraph>
          You are solely responsible for determining whether your fee configuration complies with applicable laws and regulations in the jurisdictions where you operate, including any regulations relating to financial services, payment processing, or foreign exchange.
        </Paragraph>
        <Paragraph>Dextopus does not guarantee any particular revenue outcome. Transaction volume and fee revenue depend entirely on your product and its users.</Paragraph>

        <SectionTitle>7. Non-Custodial Infrastructure</SectionTitle>
        <Paragraph>
          Dextopus is non-custodial infrastructure. We do not hold, control, or have access to user funds at any point during transaction processing. All transactions execute through audited smart contracts on public blockchains.
        </Paragraph>
        <Paragraph>You remain responsible for the custody arrangements, compliance obligations, and user experience of your own product. Dextopus does not assume custodial responsibility for any funds routed through our infrastructure.</Paragraph>

        <SectionTitle>8. Refunds and Failed Transactions</SectionTitle>
        <Paragraph>
          When a user sends a supported token on a supported chain and Dextopus cannot complete the intended conversion, funds may be automatically refunded to the refund address you specify in your API call. You are responsible for correctly configuring the refund address in every request.
        </Paragraph>
        <div className="my-6 rounded-lg border border-[rgba(255,68,85,0.2)] border-l-[3px] border-l-error bg-[rgba(255,68,85,0.05)] px-6 py-5">
          <p className="text-sm leading-[1.8] text-text">
            If a user sends an unsupported token to a deposit address, Dextopus may be unable to process or refund the transaction. We strongly recommend clearly communicating supported tokens and chains to your users before they send funds. Dextopus is not liable for funds lost due to users sending unsupported assets.
          </p>
        </div>

        <SectionTitle>9. Service Availability</SectionTitle>
        <Paragraph>
          We aim to maintain high availability of the Dextopus infrastructure. However, we do not guarantee uninterrupted or error-free service. Transaction processing depends on the availability and performance of underlying blockchain networks, bridge protocols, and liquidity providers, which are outside our direct control.
        </Paragraph>
        <Paragraph>We reserve the right to perform maintenance, updates, or modifications to the infrastructure at any time. Where possible, we will provide advance notice of planned downtime.</Paragraph>

        <SectionTitle>10. Intellectual Property</SectionTitle>
        <Paragraph>
          All content, documentation, APIs, and infrastructure made available through the Service are the property of Dextopus Technology Ltd or its licensors. Nothing in these terms grants you ownership of any Dextopus intellectual property.
        </Paragraph>
        <Paragraph>You retain ownership of any software, products, or applications you build using our infrastructure.</Paragraph>

        <SectionTitle>11. Disclaimer of Warranties</SectionTitle>
        <Paragraph>
          The Service is provided "as is" and "as available" without warranties of any kind, express or implied. Dextopus does not warrant that the Service will be uninterrupted, error-free, or free from security vulnerabilities. We do not warrant the accuracy of exchange rates, settlement times, or output amounts beyond what is stated in individual API responses at the time of request.
        </Paragraph>
        <Paragraph>Blockchain infrastructure, exchange rates, and liquidity conditions are inherently variable. Quoted output amounts are estimates based on live market conditions at the time of the quote and may differ from final settled amounts.</Paragraph>

        <SectionTitle>12. Limitation of Liability</SectionTitle>
        <Paragraph>
          To the maximum extent permitted by applicable law, Dextopus and its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service, including but not limited to loss of funds, loss of revenue, or data loss.
        </Paragraph>
        <Paragraph>Our total aggregate liability to you for any claims arising from these terms or your use of the Service shall not exceed the total fees paid by you to Dextopus in the three months preceding the claim, or USD $500, whichever is greater.</Paragraph>
        <Paragraph>Nothing in these terms excludes liability for fraud, gross negligence, or any other liability that cannot be excluded under applicable law.</Paragraph>

        <SectionTitle>13. Indemnification</SectionTitle>
        <Paragraph>
          You agree to indemnify and hold harmless Dextopus and its directors, employees, and affiliates from any claims, losses, damages, liabilities, and costs (including reasonable legal fees) arising from your use of the Service, your violation of these terms, or your violation of any applicable law or the rights of any third party.
        </Paragraph>

        <SectionTitle>14. Compliance and Regulatory Obligations</SectionTitle>
        <Paragraph>
          You are solely responsible for ensuring that your use of the Dextopus infrastructure complies with all applicable laws and regulations in your jurisdiction and the jurisdictions of your users. This includes but is not limited to laws relating to financial services licensing, anti-money laundering (AML), know your customer (KYC) requirements, and sanctions compliance.
        </Paragraph>
        <Paragraph>Dextopus does not provide legal or compliance advice. We recommend seeking independent legal counsel before launching any financial product built on our infrastructure.</Paragraph>

        <SectionTitle>15. Termination</SectionTitle>
        <Paragraph>
          Either party may discontinue use of or access to the Service at any time. We reserve the right to suspend or terminate access to the API at our discretion if we reasonably believe you are in material breach of these terms, using the Service for prohibited purposes, or posing a risk to our infrastructure or other users.
        </Paragraph>
        <Paragraph>On termination, your right to use the Service ceases immediately. Sections of these terms that by their nature should survive termination will do so, including sections on intellectual property, limitation of liability, and indemnification.</Paragraph>

        <SectionTitle>16. Changes to These Terms</SectionTitle>
        <Paragraph>
          We may update these terms from time to time. When we do, we will update the date at the top of this page. For material changes, we will make reasonable efforts to notify active partners. Continued use of the Service after changes take effect constitutes your acceptance of the updated terms.
        </Paragraph>

        <SectionTitle>17. Governing Law and Disputes</SectionTitle>
        <Paragraph>These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.</Paragraph>
        <Paragraph>
          Before initiating any formal dispute, we encourage you to contact us directly at{' '}
          <a href="mailto:desmond@dextopus.com" className="text-accent-gold hover:underline">desmond@dextopus.com</a> to seek an informal resolution.
        </Paragraph>

        <SectionTitle>18. Entire Agreement</SectionTitle>
        <Paragraph>
          These terms, together with our Privacy Policy, constitute the entire agreement between you and Dextopus regarding the Service and supersede any prior agreements or representations. If any provision of these terms is found to be unenforceable, the remaining provisions remain in full force.
        </Paragraph>

        <div className="mt-10 rounded-[10px] border border-border bg-background-darker px-7 py-6">
          <p className="text-sm leading-[1.8] text-text"><strong>Questions about these terms?</strong></p>
          <p className="mt-2 text-sm leading-[1.8] text-text-dim">
            Contact us at <a href="mailto:desmond@dextopus.com" className="text-accent-gold hover:underline">desmond@dextopus.com</a>. We aim to respond within 5 business days.
          </p>
          <p className="mt-2 text-[13px] leading-[1.8] text-text-dim">Dextopus Technology Ltd · Lagos, Nigeria</p>
        </div>
      </div>
    </Layout>
  )
}
