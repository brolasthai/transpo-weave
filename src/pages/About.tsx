import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Zap, 
  Globe, 
  DollarSign, 
  Users, 
  BarChart3,
  Database,
  Server,
  Smartphone,
  ArrowRight
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Low Transaction Fees",
      description: "Reduce cross-border payment costs by up to 90% compared to traditional banking"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Settlement",
      description: "Real-time payments with blockchain technology, settling in seconds not days"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bank-Level Security",
      description: "Multi-signature wallets and smart contract audits ensure maximum security"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Send payments to over 180 countries with local currency support"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Enterprise Ready",
      description: "API integrations, bulk payments, and compliance tools for businesses"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Track all transactions with detailed reporting and audit trails"
    }
  ];

  const apis = [
    {
      name: "Ethereum Mainnet",
      purpose: "Smart contract deployment and transaction processing",
      type: "Blockchain",
      status: "Production"
    },
    {
      name: "Polygon",
      purpose: "Layer 2 scaling for reduced gas fees",
      type: "Blockchain",
      status: "Production"
    },
    {
      name: "CoinGecko API",
      purpose: "Real-time cryptocurrency prices and exchange rates",
      type: "Data Provider",
      status: "Integrated"
    },
    {
      name: "Infura",
      purpose: "Ethereum node infrastructure and web3 connectivity",
      type: "Infrastructure",
      status: "Production"
    },
    {
      name: "MetaMask SDK",
      purpose: "Wallet connection and transaction signing",
      type: "Wallet",
      status: "Integrated"
    }
  ];

  const techStack = [
    { category: "Frontend", items: ["React 18", "TypeScript", "Tailwind CSS", "Vite"] },
    { category: "Blockchain", items: ["Solidity", "Hardhat", "Ethers.js", "OpenZeppelin"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Redis"] },
    { category: "Infrastructure", items: ["Vercel", "AWS", "Docker", "GitHub Actions"] }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About CrossPay
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Revolutionizing cross-border payments with blockchain technology, 
              making global transactions faster, cheaper, and more secure.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Architecture Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">System Architecture</h2>
          <Card className="bg-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Frontend Layer */}
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg mb-4 inline-block">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Frontend Layer</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    React-based web application with responsive design
                  </p>
                  <div className="space-y-1 text-xs">
                    <Badge variant="outline">React 18</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                  </div>
                </div>

                <ArrowRight className="hidden md:block mx-auto mt-8 text-muted-foreground" />

                {/* Backend Layer */}
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg mb-4 inline-block">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Backend Services</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    API services and smart contract integration
                  </p>
                  <div className="space-y-1 text-xs">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">Ethers.js</Badge>
                  </div>
                </div>

                <ArrowRight className="hidden md:block mx-auto mt-8 text-muted-foreground" />

                {/* Blockchain Layer */}
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg mb-4 inline-block">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Blockchain Layer</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Smart contracts on Ethereum and Polygon networks
                  </p>
                  <div className="space-y-1 text-xs">
                    <Badge variant="outline">Solidity</Badge>
                    <Badge variant="outline">Ethereum</Badge>
                    <Badge variant="outline">Polygon</Badge>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4 text-center">Data Flow</h4>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <span>User Interface</span>
                  <ArrowRight className="h-4 w-4" />
                  <span>API Gateway</span>
                  <ArrowRight className="h-4 w-4" />
                  <span>Smart Contract</span>
                  <ArrowRight className="h-4 w-4" />
                  <span>Blockchain</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* APIs & Integrations Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">APIs & Integrations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {apis.map((api, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{api.name}</CardTitle>
                    <Badge variant={api.status === 'Production' ? 'default' : 'secondary'}>
                      {api.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {api.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{api.purpose}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Technology Stack */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stack.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="outline" className="block text-center">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-gradient-card p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To democratize global finance by providing accessible, secure, and cost-effective 
            cross-border payment solutions powered by blockchain technology. We believe everyone 
            deserves access to fast, affordable international payments regardless of their location 
            or economic status.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;