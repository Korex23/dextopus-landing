import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { LOGO_BASE64 } from '../../assets/logo'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Docs', href: 'https://docs.dextopus.com', external: true },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 blur-backdrop border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_BASE64} alt="Dextopus" className="w-8 h-8" />
              <span className="text-xl font-syne font-bold">Dextopus</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-text-dim hover:text-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="secondary" size="sm" href="#contact">
                Talk to Us
              </Button>
              <Button variant="primary" size="sm" href="https://app.dextopus.com">
                Start Building
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-text"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-lg"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-background-dark border-b border-border p-6 space-y-4">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="block text-lg text-text-dim hover:text-text transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Button
                variant="secondary"
                size="md"
                href="#contact"
                className="w-full"
              >
                Talk to Us
              </Button>
              <Button
                variant="primary"
                size="md"
                href="https://app.dextopus.com"
                className="w-full"
              >
                Start Building
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
