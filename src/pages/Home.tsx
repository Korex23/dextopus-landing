import { Suspense, lazy } from 'react'
import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import Products from '../components/sections/Products'
import Differentiators from '../components/sections/Differentiators'
import TokenCoverage from '../components/sections/TokenCoverage'
import Revenue from '../components/sections/Revenue'
import UseCases from '../components/sections/UseCases'
import Integration from '../components/sections/Integration'
import CTA from '../components/sections/CTA'
import TransactionWidget from '../components/ui/TransactionWidget'

// Lazy load the 3D globe for better performance
const Globe = lazy(() => import('../components/sections/Globe'))

export default function Home() {
  return (
    <Layout>
      <Hero
        globe={
          <Suspense
            fallback={
              <div className="w-full aspect-square bg-background-dark rounded-2xl border border-border flex items-center justify-center">
                <span className="text-text-dim">Loading globe...</span>
              </div>
            }
          >
            <Globe />
          </Suspense>
        }
        transactionWidget={<TransactionWidget />}
      />
      <Stats />
      <Products />
      <Differentiators />
      <TokenCoverage />
      <Revenue />
      <UseCases />
      <Integration />
      <CTA />
    </Layout>
  )
}
