import Button from '../ui/Button'
import Section from '../ui/Section'

export default function CTA() {
  return (
    <Section
      id="contact"
      className="bg-gradient-to-br from-background via-background-dark to-background-darker"
    >
      <div className="text-center space-y-8 py-12">
        <h2 className="text-h1 font-extrabold">
          Ready to <span className="text-gradient">Get Started?</span>
        </h2>
        <p className="text-xl text-text-dim max-w-2xl mx-auto">
          Join hundreds of platforms using Dextopus for cross-chain payments
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" href="https://app.dextopus.com">
            Start Building
          </Button>
          <Button variant="outline" size="lg" href="mailto:hello@dextopus.com">
            Talk to Sales
          </Button>
        </div>
      </div>
    </Section>
  )
}
