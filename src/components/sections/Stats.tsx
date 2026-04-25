import { useScrollReveal } from '../../hooks/useScrollReveal'
import Section from '../ui/Section'

export default function Stats() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  const stats = [
    { value: '$10B+', label: 'Total Liquidity' },
    { value: '70+', label: 'Supported Chains' },
    { value: '150+', label: 'Tokens' },
    { value: '<5s', label: 'Avg Settlement' },
  ]

  return (
    <Section className="py-12">
      <div
        ref={ref}
        className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 border border-border rounded-xl text-center"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="text-3xl md:text-4xl font-syne font-extrabold text-accent-gold">
              {stat.value}
            </div>
            <div className="text-sm md:text-base text-text-dim mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
