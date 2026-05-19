import { ReactNode, useEffect, useState } from 'react'
import Button from '../ui/Button'
import Section from '../ui/Section'

interface HeroProps {
  globe?: ReactNode
  transactionWidget?: ReactNode
}

export default function Hero({ globe, transactionWidget }: HeroProps) {
  const labels = [
    'Dapps',
    'Non-Custodial Wallets',
    'Global Payments',
    'Neobanks',
    'Wallet as a Service',
    'Exchanges',
    'Payment Processors',
    'Fiat Providers',
    'Web3 Products',
    'Crypto-to-Naira Platforms',
  ]

  const [labelIndex, setLabelIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentLabel = labels[labelIndex]
    const atWordEnd = typedText === currentLabel
    const atWordStart = typedText.length === 0

    const timeout = setTimeout(
      () => {
        if (!isDeleting && atWordEnd) {
          setIsDeleting(true)
          return
        }

        if (isDeleting && atWordStart) {
          setIsDeleting(false)
          setLabelIndex(prev => (prev + 1) % labels.length)
          return
        }

        setTypedText(prev =>
          isDeleting
            ? currentLabel.slice(0, Math.max(0, prev.length - 1))
            : currentLabel.slice(0, prev.length + 1)
        )
      },
      !isDeleting && atWordEnd ? 1400 : isDeleting ? 45 : 85
    )

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, labelIndex, labels])

  return (
    <Section className="min-h-screen flex items-center pt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full min-w-0">
        {/* Left Content */}
        <div className="space-y-8 min-w-0">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-[50px] font-extrabold leading-tight overflow-hidden max-w-full">
              <span>Cross-chain deposit and withdrawal for</span>
              <span className="block w-full max-w-full">
                <span className="text-gradient inline-flex max-w-full flex-wrap items-baseline break-words">
                  {typedText}
                  <span className="ml-0.5 animate-pulse">|</span>
                </span>
              </span>
            </h1>
            <p className="text-xl text-text-dim max-w-2xl">
              Your users can now fund from 70+ chains and withdraw to wherever
              they need. You collect a fee on every transaction.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              href="https://dextopus.gitbook.io/dextopus-docs"
            >
              Start Building
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="https://calendly.com/dextopus/30min"
            >
              Talk to Us
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
