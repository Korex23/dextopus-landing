import { useScrollReveal } from '../../hooks/useScrollReveal'
import Section from '../ui/Section'

export default function UseCases() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  const cases = [
    {
      title: 'Neobanks and Fintechs',
      description:
        'Give each customer a permanent deposit address. Accept USDC on Celo, USDT on Tron, BTC, SOL, and more. Send withdrawals to Katana, Ronin, Gnosis, wherever they need.',
    },
    {
      title: 'Wallet-as-a-Service',
      description:
        'Integrate once. Every product built on your infrastructure inherits full chain coverage and static addresses automatically.',
    },
    {
      title: 'Stablecoin Payment Rails',
      description:
        'USDT on Tron, USDC on Base, xDAI on Gnosis, USDC on Celo. Every stablecoin corridor your clients need, from one integration.',
    },
    {
      title: 'Payment Processors',
      description:
        'A sender in Lagos with USDT. A recipient in Singapore wanting USDC on Base. A supplier in Dubai wanting USDT on Tron. One API covers every corridor.',
    },
    {
      title: 'DeFi Protocols and dApps',
      description:
        'Users from Monad, Berachain, Unichain, or any supported chain enter your protocol without manual bridging. They exit to any chain. Stay deployed on one.',
    },
    {
      title: 'Privacy Protocols',
      description:
        'Dextopus handles cross-chain routing before and after the privacy layer. Users arrive on the right chain with the right token. The privacy mechanism stays untouched.',
    },
  ]

  return (
    <Section className="bg-background-darker">
      <div
        ref={ref}
        className={`space-y-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="space-y-4">
          <h2 className="text-h2 font-extrabold">
            <span className="text-gradient">Built for every business</span>{' '}
            <em className="font-normal italic text-text-dim">
              that moves money.
            </em>
          </h2>
          <p className="text-xl text-text-dim max-w-3xl">
            Your business is deployed somewhere. Your customers are on 70+ chains.
            Dextopus connects both directions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-background-dark border border-border rounded-lg p-6 hover:border-accent-gold/20 transition-colors"
            >
              <h4 className="text-xl font-bold mb-2">{useCase.title}</h4>
              <p className="text-xl text-text-dim leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
