import { useScrollReveal } from '../../hooks/useScrollReveal'
import Section from '../ui/Section'

export default function Flow() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  const steps = [
    {
      number: '01',
      icon: '↑',
      title: 'User sends',
      description:
        'User sends Bitcoin, USDT on Tron, SOL on Solana, or any supported token from their wallet.',
    },
    {
      number: '02',
      icon: '✓',
      title: 'Business receives',
      description:
        'Dextopus converts and delivers your chosen stablecoin to your configured recipient address.',
    },
    {
      number: '03',
      icon: '⚡',
      title: 'Webhook triggered (optional)',
      description:
        'Optionally receive instant, cryptographically signed webhook notifications to your backend to complete your business logic.',
    },
  ]

  return (
    <Section className="bg-background-darker">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-h2 font-extrabold mb-4">
            <span className="text-gradient">How it works.</span>{' '}
            <em className="font-normal italic text-text-dim">
              Three steps. Fully automated.
            </em>
          </h2>
          <p className="text-xl text-text-dim max-w-2xl mx-auto">
            From the moment your user initiates a transaction to your backend
            completing the business logic, everything happens automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-background-dark border border-border rounded-lg p-6 hover:border-accent-gold/20 transition-colors h-full">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-4">
                  <span className="text-xs font-mono font-semibold text-accent-gold">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-accent-gold mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xl text-text-dim leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Animated Arrow (desktop only, not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                  <div className="flex items-center">
                    <div className="w-12 h-px bg-gradient-to-r from-border via-accent-gold/50 to-border relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold to-transparent animate-pulse" />
                    </div>
                    <div className="text-accent-gold text-lg ml-1">→</div>
                  </div>
                </div>
              )}

              {/* Vertical Arrow (mobile only, not on last item) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-4">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-gradient-to-b from-border via-accent-gold/50 to-border relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-gold to-transparent animate-pulse" />
                    </div>
                    <div className="text-accent-gold text-lg">↓</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
