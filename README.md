# CrossPay - Cross-Border Payment dApp

A decentralized application for cross-border payments built with React, TypeScript, Tailwind CSS, and Solidity smart contracts.

## 🚀 Features

- **Low Transaction Fees**: Reduce cross-border payment costs by up to 90%
- **Instant Settlement**: Real-time payments with blockchain technology
- **Bank-Level Security**: Multi-signature wallets and audited smart contracts
- **Global Reach**: Send payments to 180+ countries
- **Enterprise Ready**: API integrations and bulk payment support
- **Real-time Analytics**: Comprehensive transaction tracking

## 🛠 Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast development and build tool
- **React Router** - Client-side routing

### Blockchain
- **Solidity** - Smart contract development
- **Hardhat** - Ethereum development environment
- **Ethers.js** - Ethereum library for frontend integration
- **OpenZeppelin** - Secure smart contract library

### APIs & Integrations
- **Ethereum Mainnet** - Primary blockchain network
- **Polygon** - Layer 2 scaling solution
- **Infura** - Ethereum node infrastructure
- **CoinGecko API** - Real-time price data
- **MetaMask SDK** - Wallet connectivity

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/crosspay.git
   cd crosspay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Fill in your API keys and configuration values.

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔧 Smart Contract Development

1. **Compile contracts**
   ```bash
   npx hardhat compile
   ```

2. **Run local blockchain**
   ```bash
   npx hardhat node
   ```

3. **Deploy contracts locally**
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

4. **Deploy to testnet**
   ```bash
   npx hardhat run scripts/deploy.js --network goerli
   ```

## 🌐 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables**
   In Vercel dashboard, add your environment variables from `.env.example`

### Manual Build

```bash
npm run build
```

The `dist` folder contains the production build ready for deployment.

## 📋 Environment Variables

Required environment variables for production:

```env
# Blockchain Configuration
VITE_ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
VITE_POLYGON_RPC_URL=https://polygon-mainnet.infura.io/v3/YOUR_PROJECT_ID

# Smart Contract Addresses
VITE_MERCHANT_PAYMENT_CONTRACT=0x...
VITE_CROSS_BORDER_PAYMENT_CONTRACT=0x...

# API Keys
VITE_COINGECKO_API_KEY=your_api_key
VITE_INFURA_PROJECT_ID=your_project_id
```

## 🏗 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing page hero
│   ├── Features.tsx    # Features showcase
│   ├── HowItWorks.tsx  # Process explanation
│   └── PaymentDemo.tsx # Payment calculator
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets

contracts/              # Solidity smart contracts
├── CrossBorderPayment.sol
└── MerchantPayment.sol

scripts/                # Deployment scripts
└── deploy.js
```

## 🔐 Security

- Smart contracts audited and follow OpenZeppelin standards
- Multi-signature wallet integration
- Secure key management practices
- Regular security updates

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- Email: support@crosspay.com
- Documentation: [docs.crosspay.com](https://docs.crosspay.com)
- Discord: [Join our community](https://discord.gg/crosspay)

## 🗺 Roadmap

- [ ] Multi-chain support (Binance Smart Chain, Avalanche)
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Merchant API expansion
- [ ] Regulatory compliance tools
- [ ] DeFi yield farming integration

---

Built with ❤️ by the CrossPay team