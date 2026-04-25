import { useScrollReveal } from '../../hooks/useScrollReveal'
import Section from '../ui/Section'

export default function Revenue() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <Section className="bg-background-darker">
      <div
        ref={ref}
        className={`grid md:grid-cols-2 gap-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="space-y-6">
          <h2 className="text-h2 font-extrabold">
            <span className="text-gradient">Every settlement is</span>{' '}
            <em className="font-normal italic text-text-dim">a revenue event.</em>
          </h2>
          <p className="text-text-dim">
            Pass your wallet address and a fee in basis points on every API call.
            That fee gets embedded into the transaction and collected on-chain
            automatically when it executes. No invoicing. No revenue sharing beyond
            the protocol fee.
          </p>

          <ul className="space-y-3">
            {[
              'Both deposit and withdrawal carry your partner fee.',
              'Set any rate: vary by transaction size, customer tier, or corridor.',
              `WaaS businesses stack fees at two layers: yours, plus each downstream client's fee, both collected in the same transaction.`,
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-text-dim">
                <span className="text-accent-gold font-mono flex-shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="bg-background-dark border border-border rounded-xl p-6">
            <div className="text-xs font-mono text-text-dim uppercase tracking-wider mb-4">
              Protocol Fee Structure
            </div>
            <div className="space-y-3">
              {[
                { label: 'All transactions', value: '0.15%' },
                { label: 'Monthly subscription', value: 'None' },
                { label: 'Your partner fee', value: '+X BPS (your rate)' },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="flex justify-between py-3 border-b border-border last:border-b-0"
                >
                  <span className="text-sm text-text-dim">{row.label}</span>
                  <span className="text-sm font-mono text-accent-gold font-semibold">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-border rounded-xl p-5">
            <div className="text-xs font-mono text-text-dim uppercase mb-3">
              $1,000 USDT DEPOSIT → USDC
            </div>
            <div className="space-y-2 text-sm text-text-dim mb-3">
              <div className="flex justify-between">
                <span>Dextopus protocol (0.15%)</span>
                <span className="font-mono">$1.50</span>
              </div>
              <div className="flex justify-between">
                <span>Your fee (0.30%)</span>
                <span className="font-mono">$3.00</span>
              </div>
            </div>
            <div className="flex justify-between pt-3 border-t border-border text-sm font-semibold">
              <span>Total cost to user</span>
              <span className="font-mono text-accent-gold">$4.50 · 0.45%</span>
            </div>
          </div>

          <div className="bg-background-dark border border-border rounded-xl p-5">
            <div className="text-3xl font-syne font-extrabold text-accent-gold mb-2">
              $325M+
            </div>
            <p className="text-xs text-text-dim">
              earned by the leading crypto wallet from one fee parameter on every
              cross-chain transaction. That model is now available to your business
              through one Dextopus integration.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
