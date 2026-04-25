import { useScrollReveal } from '../../hooks/useScrollReveal'
import Section from '../ui/Section'

export default function Products() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <Section id="products">
      <div
        ref={ref}
        className={`space-y-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="space-y-4">
          <h2 className="text-h2 font-extrabold">
            <span className="text-gradient">Two products.</span>{' '}
            <em className="font-normal italic text-text-dim">One integration.</em>
          </h2>
          <p className="text-xl text-text-dim max-w-2xl">
            Deposit brings money into your product from your users. Withdrawal sends
            it out to wherever they need it. Both run on the same two endpoints. Your
            infrastructure stays exactly as it is.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-background-dark border border-border rounded-lg p-8 hover:border-accent-gold/20 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-xs font-mono text-text-dim uppercase tracking-wider mb-5">
              01 · Deposit
            </div>
            <div className="text-2xl mb-4">↓</div>
            <h3 className="text-xl font-bold text-accent-gold mb-4">
              Your users fund their accounts from anywhere
            </h3>
            <p className="text-xl text-text-dim mb-4 leading-relaxed">
              A user sends Bitcoin, USDT on Tron, WBTC on Ethereum, SOL on Solana,
              USDC on Celo, GUN on Gunz, or any supported token. Dextopus detects the
              transaction, converts it, and delivers your chosen stablecoin to your
              recipient address. Your user never touches a bridge. You receive exactly
              what you configured.
            </p>
            <p className="text-xl text-text-dim leading-relaxed">
              Two address types available.{' '}
              <strong className="text-text">Static addresses</strong> are permanent,
              one per user per network, reusable forever.{' '}
              <strong className="text-text">Flexible addresses</strong> are generated
              per session, single use.
            </p>
          </div>

          <div className="bg-background-dark border border-border rounded-lg p-8 hover:border-accent-gold/20 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-xs font-mono text-text-dim uppercase tracking-wider mb-5">
              02 · Withdrawal
            </div>
            <div className="text-2xl mb-4">↗</div>
            <h3 className="text-xl font-bold text-accent-gold mb-4">
              Your users get their funds out, on the chain they use
            </h3>
            <p className="text-xl text-text-dim leading-relaxed">
              A user wants to withdraw to Tron, Bitcoin, USDC on Katana, RON on
              Ronin, ETH on zkSync, or a chain your product has never integrated. You
              generate an address, send the funds to it, Dextopus converts and
              delivers to the user's external wallet. Your product now reaches
              destinations it never could before.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
