import { useScrollReveal } from '../../hooks/useScrollReveal'
import Section from '../ui/Section'

export default function Integration() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  const steps = [
    {
      number: '01',
      title: 'Read the API reference',
      description:
        'Two endpoint patterns. Full documentation immediately available.',
      badge: 'Under an hour',
    },
    {
      number: '02',
      title: 'Test in Swagger',
      description:
        'Real API calls. Real responses. Before your team writes any code.',
      badge: 'Same day',
    },
    {
      number: '03',
      title: 'Build the integration',
      description:
        'Connect your backend. Set your partner fee. Run end-to-end with real transactions.',
      badge: 'Hours to days',
    },
    {
      number: '04',
      title: 'Go live',
      description:
        'Customers deposit from any chain. They withdraw to any chain. You earn on every one.',
      badge: 'Production',
    },
  ]

  return (
    <Section>
      <div
        ref={ref}
        className={`grid md:grid-cols-2 gap-16 items-start transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="space-y-6">
          <h2 className="text-h2 font-extrabold">
            <span className="text-gradient">Live in hours,</span>{' '}
            <em className="font-normal italic text-text-dim">not months.</em>
          </h2>
          <p className="text-text-dim">
            The Swagger environment runs against production. Make real API calls and
            see real responses before writing a single line of integration code.
          </p>

          <div className="flex gap-3">
            <button className="px-6 py-3 bg-accent-gold text-background rounded-lg font-semibold hover:bg-accent-gold-light transition-colors">
              Read the Docs
            </button>
            <button className="px-6 py-3 border border-border text-text rounded-lg font-semibold hover:border-accent-gold/50 transition-colors">
              Test in Swagger
            </button>
          </div>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-[40px_1fr] gap-3 py-5 border-b border-border last:border-b-0"
            >
              <span className="text-xs font-mono text-accent-gold pt-1">
                {step.number}
              </span>
              <div className="space-y-2">
                <h4 className="text-base font-bold">{step.title}</h4>
                <p className="text-sm text-text-dim leading-relaxed">
                  {step.description}
                </p>
                <span className="inline-block text-xs font-mono text-text-dim bg-background-dark border border-border px-2 py-1 rounded">
                  {step.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
