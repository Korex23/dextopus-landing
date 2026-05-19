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

export default function Privacy() {
  return (
    <Layout>
      <div className="relative z-[1] mx-auto max-w-[720px] px-6 pb-20 pt-10">
        <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-gold">Legal</div>
        <h1 className="mb-3 font-syne text-[clamp(28px,5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text">
          Privacy Policy
        </h1>
        <div className="mb-14 font-mono text-[13px] text-text-dim">
          Last updated: April 2025 · Dextopus (operated by Dextopus Technology Ltd, Lagos, Nigeria)
        </div>

        <div className="my-6 rounded-lg border border-border border-l-[3px] border-l-accent-gold bg-background-darker px-6 py-5">
          <p className="text-sm leading-[1.8] text-text">
            Dextopus is a B2B infrastructure product. We do not collect personal data from end users directly. The businesses and developers that integrate Dextopus are responsible for their own users' data under their own privacy frameworks.
          </p>
        </div>

        <div className="my-10 h-px bg-border" />

        <SectionTitle>1. Who We Are</SectionTitle>
        <Paragraph>
          Dextopus is a cross-chain settlement infrastructure provider operated by Dextopus Technology Ltd, incorporated in Lagos, Nigeria. We provide API infrastructure that enables businesses, fintechs, and developers to offer cross-chain deposit and withdrawal functionality to their users.
        </Paragraph>
        <Paragraph>
          This policy explains what information we collect, how we use it, and your rights in relation to it. If you have questions, contact us at{' '}
          <a href="mailto:desmond@dextopus.com" className="text-accent-gold hover:underline">desmond@dextopus.com</a>.
        </Paragraph>

        <SectionTitle>2. Who This Policy Applies To</SectionTitle>
        <Paragraph>This policy applies to:</Paragraph>
        <LegalList items={[
          'Businesses, developers, and teams that access the Dextopus API or documentation (referred to as "partners" or "you")',
          'Visitors to our website at dextopus.com',
        ]} />
        <Paragraph>
          If you are an end user of a product built on Dextopus infrastructure, your data is handled by the business whose product you are using, not by Dextopus directly. Please refer to that business's privacy policy.
        </Paragraph>

        <SectionTitle>3. Information We Collect</SectionTitle>
        <Paragraph>We collect only what is necessary to provide and improve our service.</Paragraph>
        <Paragraph><strong className="text-text">Information you provide directly:</strong></Paragraph>
        <LegalList items={[
          'Contact information when you reach out to us, including name and email address',
          'Business information provided during onboarding or partnership discussions',
          'Fee wallet addresses and partner configuration data submitted through API calls',
        ]} />
        <Paragraph><strong className="text-text">Information we collect automatically:</strong></Paragraph>
        <LegalList items={[
          'On-chain transaction data associated with deposits and withdrawals processed through our infrastructure, including wallet addresses, transaction hashes, token amounts, and chain identifiers',
          'API call logs including endpoint usage, timestamps, and response codes',
          'Basic website access logs including IP addresses and browser type, used for security and infrastructure monitoring',
        ]} />
        <Paragraph>We do not use cookies or third-party tracking tools on our website at this time.</Paragraph>

        <SectionTitle>4. How We Use This Information</SectionTitle>
        <LegalList items={[
          'To process and settle cross-chain transactions routed through our infrastructure',
          'To operate, maintain, and improve the Dextopus API and related services',
          'To respond to inquiries and provide support to partners',
          'To detect fraud, abuse, or security incidents',
          'To comply with applicable legal obligations',
          'To contact you about material changes to our service or this policy',
        ]} />

        <SectionTitle>5. On-Chain Data</SectionTitle>
        <Paragraph>
          Blockchain transactions are publicly visible and permanent by nature. Transaction data processed through Dextopus, including wallet addresses, token amounts, and transaction hashes, is recorded on the relevant blockchain networks. This data is inherently public and outside the scope of traditional data deletion rights.
        </Paragraph>
        <Paragraph>Dextopus does not control or have the ability to modify on-chain records once a transaction has been confirmed.</Paragraph>

        <SectionTitle>6. How We Share Information</SectionTitle>
        <Paragraph>We do not sell personal data. We share information only in the following circumstances:</Paragraph>
        <LegalList items={[
          'With bridge infrastructure providers and liquidity sources that are necessary to route and settle transactions',
          'With service providers that help us operate our infrastructure, under appropriate confidentiality obligations',
          'When required by law, regulation, or a valid legal process',
          'In connection with a merger, acquisition, or sale of our business, where the acquiring party agrees to be bound by this policy',
        ]} />

        <SectionTitle>7. Data Retention</SectionTitle>
        <Paragraph>
          We retain transaction logs and API usage records for as long as necessary to operate our service, resolve disputes, enforce our agreements, and comply with legal obligations. Contact information is retained for as long as the business relationship is active and for a reasonable period afterward.
        </Paragraph>
        <Paragraph>On-chain data, as described above, is permanent and cannot be deleted.</Paragraph>

        <SectionTitle>8. Security</SectionTitle>
        <Paragraph>
          We implement technical and organisational measures appropriate to the nature of the data we hold. All transactions are executed through audited smart contracts on public blockchains. We do not hold custody of user funds at any point.
        </Paragraph>
        <Paragraph>
          No method of transmission or storage is completely secure. If you believe a security incident has occurred, contact us immediately at{' '}
          <a href="mailto:desmond@dextopus.com" className="text-accent-gold hover:underline">desmond@dextopus.com</a>.
        </Paragraph>

        <SectionTitle>9. Your Rights</SectionTitle>
        <Paragraph>
          Depending on your jurisdiction, you may have rights to access, correct, or request deletion of personal data we hold about you. To exercise these rights, contact us at{' '}
          <a href="mailto:desmond@dextopus.com" className="text-accent-gold hover:underline">desmond@dextopus.com</a>.
        </Paragraph>
        <Paragraph>Please note that on-chain transaction data cannot be deleted due to the immutable nature of blockchain records.</Paragraph>

        <SectionTitle>10. International Data Transfers</SectionTitle>
        <Paragraph>
          Dextopus operates globally. Data may be processed in countries outside Nigeria where our infrastructure providers and bridge partners operate. By using our services, you acknowledge that data may be transferred internationally in connection with transaction processing.
        </Paragraph>

        <SectionTitle>11. Children</SectionTitle>
        <Paragraph>Dextopus is a B2B service. We do not knowingly collect information from individuals under the age of 18. Our services are intended for use by businesses and developers.</Paragraph>

        <SectionTitle>12. Changes to This Policy</SectionTitle>
        <Paragraph>
          We may update this policy from time to time. When we do, we will update the date at the top of this page. For material changes, we will notify active partners by email. Continued use of our services after changes take effect constitutes acceptance of the updated policy.
        </Paragraph>

        <div className="mt-10 rounded-[10px] border border-border bg-background-darker px-7 py-6">
          <p className="text-sm leading-[1.8] text-text"><strong>Questions or requests?</strong></p>
          <p className="mt-2 text-sm leading-[1.8] text-text-dim">
            Contact us at <a href="mailto:desmond@dextopus.com" className="text-accent-gold hover:underline">desmond@dextopus.com</a>. We aim to respond to all privacy-related inquiries within 5 business days.
          </p>
          <p className="mt-2 text-[13px] leading-[1.8] text-text-dim">Dextopus Technology Ltd · Lagos, Nigeria</p>
        </div>
      </div>
    </Layout>
  )
}
