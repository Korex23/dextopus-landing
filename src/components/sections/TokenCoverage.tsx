import { useScrollReveal } from '../../hooks/useScrollReveal'
import Section from '../ui/Section'

export default function TokenCoverage() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  const chains = [
    {
      name: 'Ethereum',
      logo: 'https://assets.relay.link/icons/1/light.png',
      tokens: [
        { name: 'ETH', logo: 'https://assets.relay.link/icons/1/light.png' },
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
        {
          name: 'USDT',
          logo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731',
        },
        {
          name: 'WETH',
          logo: 'https://coin-images.coingecko.com/coins/images/39810/large/weth.png',
        },
        {
          name: 'WBTC',
          logo: 'https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857',
        },
        {
          name: 'DAI',
          logo: 'https://coin-images.coingecko.com/coins/images/9956/large/Badge_Dai.png?1696509996',
        },
      ],
      more: 3,
    },
    {
      name: 'Base',
      logo: 'https://assets.relay.link/icons/8453/light.png',
      tokens: [
        { name: 'ETH', logo: 'https://assets.relay.link/icons/1/light.png' },
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
        {
          name: 'USDT',
          logo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731',
        },
        {
          name: 'WETH',
          logo: 'https://coin-images.coingecko.com/coins/images/39810/large/weth.png',
        },
        {
          name: 'DEGEN',
          logo: 'https://coin-images.coingecko.com/coins/images/34515/large/android-chrome-512x512.png?1706198225',
        },
      ],
    },
    {
      name: 'Solana',
      logo: 'https://assets.relay.link/icons/792703809/light.png',
      tokens: [
        {
          name: 'SOL',
          logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
        },
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
        {
          name: 'USDT',
          logo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731',
        },
      ],
    },
    {
      name: 'Tron',
      logo: 'https://assets.relay.link/icons/728126428/light.png',
      tokens: [
        {
          name: 'USDT',
          logo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731',
        },
      ],
    },
    {
      name: 'Bitcoin',
      logo: 'https://assets.relay.link/icons/8253038/light.png',
      tokens: [
        {
          name: 'BTC',
          logo: 'https://assets.relay.link/icons/currencies/btc.png',
        },
      ],
    },
    {
      name: 'BNB Chain',
      logo: 'https://assets.relay.link/icons/56/light.png',
      tokens: [
        {
          name: 'BNB',
          logo: 'https://assets.relay.link/icons/currencies/bnb.png',
        },
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
        {
          name: 'USDT',
          logo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731',
        },
        {
          name: 'WBTC',
          logo: 'https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857',
        },
      ],
    },
    {
      name: 'Katana',
      logo: 'https://assets.relay.link/icons/747474/light.png',
      tokens: [
        { name: 'ETH', logo: 'https://assets.relay.link/icons/1/light.png' },
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
        {
          name: 'USDT',
          logo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731',
        },
        {
          name: 'WBTC',
          logo: 'https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857',
        },
      ],
    },
    {
      name: 'HyperEVM',
      logo: 'https://assets.relay.link/icons/999/light.png',
      tokens: [
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
        {
          name: 'HYPE',
          logo: 'https://assets.coingecko.com/coins/images/50882/standard/hyperliquid.jpg?1729431300',
        },
        {
          name: 'USDe',
          logo: 'https://assets.coingecko.com/coins/images/33613/standard/usde.png?1733810059',
        },
        {
          name: 'USDT',
          logo: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731',
        },
      ],
    },
    {
      name: 'Ronin',
      logo: 'https://assets.relay.link/icons/2020/light.png',
      tokens: [
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
        {
          name: 'RON',
          logo: 'https://assets.relay.link/icons/currencies/ron.png',
        },
      ],
    },
    {
      name: 'Gnosis',
      logo: 'https://assets.relay.link/icons/100/light.png',
      tokens: [
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
        {
          name: 'xDAI',
          logo: 'https://assets.relay.link/icons/currencies/xdai.png',
        },
      ],
    },
    {
      name: 'Flow EVM',
      logo: 'https://assets.relay.link/icons/747/light.png',
      tokens: [
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
        {
          name: 'FLOW',
          logo: 'https://assets.relay.link/icons/currencies/flow.png',
        },
      ],
    },
    {
      name: 'Plume',
      logo: 'https://assets.relay.link/icons/98866/light.png',
      tokens: [
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
        {
          name: 'WETH',
          logo: 'https://coin-images.coingecko.com/coins/images/39810/large/weth.png',
        },
        {
          name: 'PLUME',
          logo: 'https://assets.coingecko.com/coins/images/53623/standard/plume-token.png?1736896935',
        },
      ],
    },
    {
      name: 'Celo',
      logo: 'https://assets.relay.link/icons/42220/light.png',
      tokens: [
        {
          name: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
        },
      ],
    },
    {
      name: 'Degen',
      logo: 'https://assets.relay.link/icons/666666666/light.png',
      tokens: [
        {
          name: 'DEGEN',
          logo: 'https://coin-images.coingecko.com/coins/images/34515/large/android-chrome-512x512.png?1706198225',
        },
      ],
    },
    {
      name: 'Gunz',
      logo: 'https://assets.relay.link/icons/43419/light.png',
      tokens: [
        {
          name: 'GUN',
          logo: 'https://storage.gunbygunz.com/gunz_symbol_320x320.png',
        },
      ],
    },
  ]

  const moreChains = [
    {
      name: 'Arbitrum',
      logo: 'https://assets.relay.link/icons/42161/light.png',
    },
    { name: 'Optimism', logo: 'https://assets.relay.link/icons/10/light.png' },
    { name: 'Polygon', logo: 'https://assets.relay.link/icons/137/light.png' },
    {
      name: 'Avalanche',
      logo: 'https://assets.relay.link/icons/43114/light.png',
    },
    { name: 'Ronin', logo: 'https://assets.relay.link/icons/2020/light.png' },
    { name: 'Gnosis', logo: 'https://assets.relay.link/icons/100/light.png' },
  ]

  return (
    <Section>
      <div
        ref={ref}
        className={`space-y-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="space-y-4">
          <h2 className="text-h2 font-extrabold">
            <span className="text-gradient">150+ tokens across 70+ chains.</span>{' '}
            <em className="font-normal italic text-text-dim">
              Your users send from what they hold.
            </em>
          </h2>
          <p className="text-text-dim max-w-3xl">
            From Bitcoin and USDT on Tron to DEGEN on Degen chain, RON on Ronin,
            GUN on Gunz, and xDAI on Gnosis. The chains winning in emerging markets
            are all here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {chains.map((chain, index) => (
            <div
              key={index}
              className="bg-background-dark border border-border rounded-lg p-4 hover:border-accent-gold/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={chain.logo}
                  alt={chain.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-mono text-xs text-accent-gold font-semibold">
                  {chain.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {chain.tokens.map((token, tidx) => (
                  <img
                    key={tidx}
                    src={token.logo}
                    alt={token.name}
                    title={token.name}
                    className="w-6 h-6 rounded-full bg-background-darker"
                  />
                ))}
                {chain.more && (
                  <span className="text-xs font-mono text-text-dim bg-white/5 border border-border px-2 py-1 rounded">
                    +{chain.more}
                  </span>
                )}
              </div>
            </div>
          ))}

          <div className="bg-accent-gold/5 border border-accent-gold/10 rounded-lg p-4">
            <span className="font-mono text-xs text-text-dim mb-3 block">
              +55 more chains
            </span>
            <div className="flex flex-wrap gap-1.5">
              {moreChains.map((chain, idx) => (
                <img
                  key={idx}
                  src={chain.logo}
                  alt={chain.name}
                  title={chain.name}
                  className="w-10 h-10 rounded-full bg-background-darker"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
