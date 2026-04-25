import { ReactNode } from 'react'
import Button from '../ui/Button'
import Section from '../ui/Section'

interface HeroProps {
  globe?: ReactNode
  transactionWidget?: ReactNode
}

export default function Hero({ globe, transactionWidget }: HeroProps) {
  return (
    <Section className="min-h-screen flex items-center pt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-[50px] font-extrabold leading-tight">
              Cross-chain deposit and withdrawal{' '}
              <span className="text-gradient">for your users.</span>
            </h1>
            <p className="text-xl text-text-dim max-w-2xl">
              Your product stays the same. Your users can now fund from 70+ chains
              and withdraw to wherever they need. You collect a fee on every
              transaction.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href="https://app.dextopus.com">
              Start Building
            </Button>
            <Button variant="outline" size="lg" href="https://docs.dextopus.com">
              Read Documentation
            </Button>
          </div>

          {/* Mobile Transaction Widget */}
          {transactionWidget && (
            <div className="lg:hidden mt-8">{transactionWidget}</div>
          )}
        </div>

        {/* Right Content - Globe */}
        <div className="relative hidden lg:block">
          {globe || (
            <div className="w-full aspect-square bg-background-dark rounded-2xl border border-border flex items-center justify-center">
              <span className="text-text-dim">3D Globe Loading...</span>
            </div>
          )}

          {/* Desktop Transaction Widget Overlay */}
          {transactionWidget && (
            <div className="absolute bottom-8 left-8">{transactionWidget}</div>
          )}
        </div>
      </div>
    </Section>
  )
}
