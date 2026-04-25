import { useScrollReveal } from '../../hooks/useScrollReveal'
import Section from '../ui/Section'
import Card from '../ui/Card'

export default function Differentiators() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  const features = [
    {
      title: 'Static Addresses',
      description:
        'Users get permanent deposit addresses - no address rotation required',
      badge: 'First',
    },
    {
      title: 'Dashboard',
      description:
        'Monitor all transactions, manage addresses, and track analytics in real-time',
      badge: 'First',
    },
    {
      title: 'Webhooks',
      description:
        'Get instant notifications for deposits, withdrawals, and status changes',
      badge: null,
    },
    {
      title: 'Fee Collection',
      description:
        'Automatically collect fees on deposits and withdrawals with flexible configuration',
      badge: 'First',
    },
    {
      title: 'Refunds',
      description:
        'Automatically refund deposits that fail validation or processing',
      badge: 'First',
    },
    {
      title: 'Non-Custodial',
      description:
        "You maintain full control - we never custody your users' funds",
      badge: null,
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
        <div className="text-center space-y-4">
          <h2 className="text-h2 font-extrabold">What Makes Us Different</h2>
          <p className="text-xl text-text-dim max-w-3xl mx-auto">
            Built for modern crypto businesses with features you won't find anywhere
            else
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              {feature.badge && (
                <span className="inline-block px-3 py-1 text-xs font-bold bg-accent-gold text-background rounded-full mb-4">
                  {feature.badge}
                </span>
              )}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-xl text-text-dim">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
