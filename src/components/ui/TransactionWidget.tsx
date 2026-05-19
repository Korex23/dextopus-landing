import { useState, useEffect } from 'react'

interface TxScene {
  type: 'deposit' | 'withdraw'
  sendLabel: string
  recvLabel: string
  sendAmt: string
  recvAmt: string
  sendChain: string
  recvChain: string
  sendChainLogo: string
  recvChainLogo: string
  sendTokLogo: string
  recvTokLogo: string
  time: string
}

const TX_SCENES: TxScene[] = [
  { type: 'deposit', sendLabel: 'User sends', recvLabel: 'Business receives', sendAmt: '1,000.00 USDT', recvAmt: '999.12 USDC', sendChain: 'Tron', recvChain: 'Base', sendChainLogo: 'https://assets.relay.link/icons/728126428/light.png', recvChainLogo: 'https://assets.relay.link/icons/8453/light.png', sendTokLogo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731', recvTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', time: '3.8s' },
  { type: 'deposit', sendLabel: 'User sends', recvLabel: 'Business receives', sendAmt: '0.021 BTC', recvAmt: '1,998.40 USDC', sendChain: 'Bitcoin', recvChain: 'Arbitrum', sendChainLogo: 'https://assets.relay.link/icons/8253038/light.png', recvChainLogo: 'https://assets.relay.link/icons/42161/light.png', sendTokLogo: 'https://assets.relay.link/icons/currencies/btc.png', recvTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', time: '4.2s' },
  { type: 'withdraw', sendLabel: 'Business sends', recvLabel: 'User receives', sendAmt: '500.00 USDC', recvAmt: '0.0105 BTC', sendChain: 'Base', recvChain: 'Bitcoin', sendChainLogo: 'https://assets.relay.link/icons/8453/light.png', recvChainLogo: 'https://assets.relay.link/icons/8253038/light.png', sendTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', recvTokLogo: 'https://assets.relay.link/icons/currencies/btc.png', time: '4.9s' },
  { type: 'deposit', sendLabel: 'User sends', recvLabel: 'Business receives', sendAmt: '2.5 ETH', recvAmt: '4,980.00 USDC', sendChain: 'Ethereum', recvChain: 'Katana', sendChainLogo: 'https://assets.relay.link/icons/1/light.png', recvChainLogo: 'https://assets.relay.link/icons/747474/light.png', sendTokLogo: 'https://assets.relay.link/icons/1/light.png', recvTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', time: '2.9s' },
  { type: 'deposit', sendLabel: 'User sends', recvLabel: 'Business receives', sendAmt: '800.00 USDC', recvAmt: '799.20 USDC', sendChain: 'Celo', recvChain: 'Optimism', sendChainLogo: 'https://assets.relay.link/icons/42220/light.png', recvChainLogo: 'https://assets.relay.link/icons/10/light.png', sendTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', recvTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', time: '3.1s' },
  { type: 'withdraw', sendLabel: 'Business sends', recvLabel: 'User receives', sendAmt: '1,200.00 USDC', recvAmt: '1,197.60 USDT', sendChain: 'Arbitrum', recvChain: 'Tron', sendChainLogo: 'https://assets.relay.link/icons/42161/light.png', recvChainLogo: 'https://assets.relay.link/icons/728126428/light.png', sendTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', recvTokLogo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731', time: '4.1s' },
  { type: 'deposit', sendLabel: 'User sends', recvLabel: 'Business receives', sendAmt: '150.00 SOL', recvAmt: '19,650.00 USDC', sendChain: 'Solana', recvChain: 'Polygon', sendChainLogo: 'https://assets.relay.link/icons/792703809/light.png', recvChainLogo: 'https://assets.relay.link/icons/137/light.png', sendTokLogo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png', recvTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', time: '2.6s' },
  { type: 'deposit', sendLabel: 'User sends', recvLabel: 'Business receives', sendAmt: '5,000.00 USDT', recvAmt: '4,992.50 USDC', sendChain: 'BNB Chain', recvChain: 'Linea', sendChainLogo: 'https://assets.relay.link/icons/56/light.png', recvChainLogo: 'https://assets.relay.link/icons/59144/light.png', sendTokLogo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731', recvTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', time: '3.4s' },
  { type: 'withdraw', sendLabel: 'Business sends', recvLabel: 'User receives', sendAmt: '300.00 USDC', recvAmt: '300.00 RON', sendChain: 'Ethereum', recvChain: 'Ronin', sendChainLogo: 'https://assets.relay.link/icons/1/light.png', recvChainLogo: 'https://assets.relay.link/icons/2020/light.png', sendTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', recvTokLogo: 'https://assets.relay.link/icons/currencies/ron.png', time: '3.7s' },
  { type: 'deposit', sendLabel: 'User sends', recvLabel: 'Business receives', sendAmt: '5,000.00 USDT', recvAmt: '4,992.50 USDC', sendChain: 'Tron', recvChain: 'Unichain', sendChainLogo: 'https://assets.relay.link/icons/728126428/light.png', recvChainLogo: 'https://assets.relay.link/icons/130/light.png', sendTokLogo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731', recvTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', time: '4.0s' },
  { type: 'deposit', sendLabel: 'User sends', recvLabel: 'Business receives', sendAmt: '0.025 WBTC', recvAmt: '2,492.10 USDC', sendChain: 'Optimism', recvChain: 'Base', sendChainLogo: 'https://assets.relay.link/icons/10/light.png', recvChainLogo: 'https://assets.relay.link/icons/8453/light.png', sendTokLogo: 'https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857', recvTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', time: '3.3s' },
  { type: 'withdraw', sendLabel: 'Business sends', recvLabel: 'User receives', sendAmt: '2,000.00 USDC', recvAmt: '2,000.00 xDAI', sendChain: 'Base', recvChain: 'Gnosis', sendChainLogo: 'https://assets.relay.link/icons/8453/light.png', recvChainLogo: 'https://assets.relay.link/icons/100/light.png', sendTokLogo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694', recvTokLogo: 'https://assets.relay.link/icons/currencies/xdai.png', time: '2.8s' },
]

export default function TransactionWidget() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(prev => (prev + 1) % TX_SCENES.length)
        setVisible(true)
      }, 250)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const s = TX_SCENES[idx]
  const isWithdraw = s.type === 'withdraw'
  const arr = isWithdraw ? '↑' : '↓'

  return (
    <div
      className="min-w-[290px] max-w-[320px] rounded-xl p-5 border border-white/[0.09] backdrop-blur-md transition-opacity duration-300"
      style={{
        background: 'rgba(12,13,23,0.95)',
        opacity: visible ? 1 : 0.4,
      }}
    >
      {/* Header tag */}
      <div className="flex items-center gap-2 mb-4 text-[9px] font-mono tracking-widest uppercase text-text-dim">
        <span className="w-[5px] h-[5px] rounded-full bg-success flex-shrink-0" style={{ animation: 'pulse 1.8s infinite' }} />
        <span>Live settlement</span>
        <span
          className="ml-auto px-2 py-0.5 rounded text-[9px] font-mono border"
          style={
            isWithdraw
              ? { background: 'rgba(255,184,0,.1)', color: '#FFB800', borderColor: 'rgba(255,184,0,.2)' }
              : { background: 'rgba(0,221,144,.1)', color: '#00DD90', borderColor: 'rgba(0,221,144,.2)' }
          }
        >
          {isWithdraw ? 'Withdrawal' : 'Deposit'}
        </span>
      </div>

      {/* Send block */}
      <div className="rounded-lg p-3 mb-1.5 border border-white/[0.09]" style={{ background: 'rgba(8,8,13,0.8)' }}>
        <div className="text-[9px] font-mono text-text-dim mb-1.5 tracking-widest uppercase">{s.sendLabel}</div>
        <div className="flex items-center gap-2 mb-1">
          <img src={s.sendTokLogo} className="w-6 h-6 rounded-full flex-shrink-0" style={{ background: '#08080d' }} alt="" />
          <span className="text-lg font-mono font-semibold leading-none tracking-tight">{s.sendAmt}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-text-dim">
          <img src={s.sendChainLogo} className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ background: '#08080d' }} alt="" />
          <span>{s.sendChain}</span>
        </div>
      </div>

      {/* Arrow separator */}
      <div className="flex items-center py-1 mb-1">
        <div className="flex-1 h-px bg-white/[0.09] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg,transparent,#FFB800,transparent)', animation: 'flow 2.2s ease infinite' }} />
        </div>
        <span className="px-2.5 text-accent-gold text-xs">{arr}</span>
        <div className="flex-1 h-px bg-white/[0.09] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg,transparent,#FFB800,transparent)', animation: 'flow 2.2s ease infinite' }} />
        </div>
      </div>

      {/* Receive block */}
      <div className="rounded-lg p-3 mb-3 border border-white/[0.09]" style={{ background: 'rgba(8,8,13,0.8)' }}>
        <div className="text-[9px] font-mono text-text-dim mb-1.5 tracking-widest uppercase">{s.recvLabel}</div>
        <div className="flex items-center gap-2 mb-1">
          <img src={s.recvTokLogo} className="w-6 h-6 rounded-full flex-shrink-0" style={{ background: '#08080d' }} alt="" />
          <span className="text-lg font-mono font-semibold leading-none tracking-tight text-accent-gold">{s.recvAmt}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-text-dim">
          <img src={s.recvChainLogo} className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ background: '#08080d' }} alt="" />
          <span>{s.recvChain}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.09] text-[10px] font-mono">
        <div className="flex items-center gap-1.5 text-success">
          <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" style={{ animation: 'pulse 1.8s infinite' }} />
          Settled
        </div>
        <span className="text-accent-gold">{s.time}</span>
      </div>
    </div>
  )
}
