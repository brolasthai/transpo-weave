# CrossPay - Cross-Border Payment dApp

A modern decentralized application for fast, secure, and affordable cross-border payments powered by blockchain technology.

## Features

- 🌍 **Global Reach**: Send money to 180+ countries
- ⚡ **Instant Settlement**: Transfers complete in minutes, not days
- 💰 **Low Fees**: Up to 90% lower fees than traditional banks
- 🔒 **Bank-Level Security**: Military-grade encryption and smart contract security
- 📱 **Easy to Use**: Simple, intuitive interface on any device
- 💱 **Best Exchange Rates**: Competitive mid-market rates with no markup

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Vite** for build tooling
- **React Query** for data fetching

### Blockchain
- **Hardhat** for smart contract development
- **Solidity 0.8.19** for smart contracts
- **Ethers.js** for blockchain interaction
- **OpenZeppelin** contracts for security

## Getting Started

### Prerequisites
- Node.js & npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Git

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd crosspay-dapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. In a separate terminal, start a local Hardhat node:
```bash
npx hardhat node
```

5. Deploy smart contracts to local network:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

## Smart Contract

The `CrossBorderPayment` contract handles:
- Payment initiation and tracking
- Multi-currency support
- Secure fund transfers
- Real-time payment status updates

### Contract Functions
- `sendPayment()`: Initiate a cross-border payment
- `completePayment()`: Complete payment on receiver side
- `getPayment()`: Get payment details and status

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npx hardhat compile` - Compile smart contracts
- `npx hardhat test` - Run smart contract tests
- `npx hardhat node` - Start local blockchain node

## Project Structure

```
├── contracts/          # Smart contracts
├── scripts/            # Deployment scripts
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom hooks
│   └── lib/            # Utilities
├── public/             # Static assets
└── artifacts/          # Compiled contracts
```

## Deployment

### Frontend
Deploy using [Lovable](https://lovable.dev) or any static hosting service.

### Smart Contracts
Deploy to testnets or mainnet using Hardhat:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, please open an issue on GitHub or contact the development team.