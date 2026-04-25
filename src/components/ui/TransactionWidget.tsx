import { useState, useEffect } from 'react'

interface TransactionData {
  userSends: {
    token: string
    amount: string
    chain: string
    logo: string
    chainLogo: string
  }
  businessReceives: {
    token: string
    amount: string
    chain: string
    logo: string
    chainLogo: string
  }
  status: string
  time: string
}

const transactions: TransactionData[] = [
  {
    userSends: {
      token: 'USDT',
      amount: '1,000.00',
      chain: 'Tron',
      logo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731',
      chainLogo: 'https://assets.relay.link/icons/728126428/light.png',
    },
    businessReceives: {
      token: 'USDC',
      amount: '999.41',
      chain: 'Base',
      logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
      chainLogo: 'https://assets.relay.link/icons/8453/light.png',
    },
    status: 'Settled',
    time: '2.3s',
  },
  {
    userSends: {
      token: 'BTC',
      amount: '0.05',
      chain: 'Bitcoin',
      logo: 'https://assets.relay.link/icons/currencies/btc.png',
      chainLogo: 'https://assets.relay.link/icons/8253038/light.png',
    },
    businessReceives: {
      token: 'USDC',
      amount: '5,243.20',
      chain: 'Ethereum',
      logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
      chainLogo: 'https://assets.relay.link/icons/1/light.png',
    },
    status: 'Settled',
    time: '18.7s',
  },
  {
    userSends: {
      token: 'SOL',
      amount: '25.00',
      chain: 'Solana',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
      chainLogo: 'https://assets.relay.link/icons/792703809/light.png',
    },
    businessReceives: {
      token: 'USDC',
      amount: '2,850.75',
      chain: 'Base',
      logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
      chainLogo: 'https://assets.relay.link/icons/8453/light.png',
    },
    status: 'Settled',
    time: '3.1s',
  },
  {
    userSends: {
      token: 'ETH',
      amount: '1.5',
      chain: 'Ethereum',
      logo: 'https://assets.relay.link/icons/1/light.png',
      chainLogo: 'https://assets.relay.link/icons/1/light.png',
    },
    businessReceives: {
      token: 'USDT',
      amount: '4,125.00',
      chain: 'Tron',
      logo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731',
      chainLogo: 'https://assets.relay.link/icons/728126428/light.png',
    },
    status: 'Settled',
    time: '2.8s',
  },
]

export default function TransactionWidget() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % transactions.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  const tx = transactions[currentIndex]

  return (
    <div className="bg-background-dark border border-border rounded-xl p-5 min-w-[320px] max-w-[360px] animate-txFade">
      {/* User sends block */}
      <div className="space-y-2 mb-4">
        <div className="text-xs font-mono text-text-dim uppercase tracking-wider">
          User sends
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={tx.userSends.logo}
              alt={tx.userSends.token}
              className="w-10 h-10 rounded-full bg-background-darker"
            />
            <div className="text-xl font-mono font-bold text-text">
              {tx.userSends.amount} {tx.userSends.token}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-dim">
          <img
            src={tx.userSends.chainLogo}
            alt={tx.userSends.chain}
            className="w-4 h-4 rounded-full"
          />
          <span>{tx.userSends.chain}</span>
        </div>
      </div>

      {/* Separator with arrow */}
      <div className="flex items-center gap-2 my-4">
        <div className="h-px bg-border flex-1" />
        <div className="text-accent-gold text-lg">↓</div>
        <div className="h-px bg-border flex-1" />
      </div>

      {/* Business receives block */}
      <div className="space-y-2 mb-4">
        <div className="text-xs font-mono text-text-dim uppercase tracking-wider">
          Business receives
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={tx.businessReceives.logo}
              alt={tx.businessReceives.token}
              className="w-10 h-10 rounded-full bg-background-darker"
            />
            <div className="text-xl font-mono font-bold text-accent-gold">
              {tx.businessReceives.amount} {tx.businessReceives.token}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-dim">
          <img
            src={tx.businessReceives.chainLogo}
            alt={tx.businessReceives.chain}
            className="w-4 h-4 rounded-full"
          />
          <span>{tx.businessReceives.chain}</span>
        </div>
      </div>

      {/* Settlement info */}
      <div className="flex items-center justify-between pt-3 border-t border-border text-xs">
        <span className="text-text-dim">{tx.status}</span>
        <span className="font-mono text-success">{tx.time}</span>
      </div>
    </div>
  )
}
