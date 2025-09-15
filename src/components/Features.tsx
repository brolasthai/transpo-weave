import { Card } from "@/components/ui/card";
import { 
  DollarSign, 
  Clock, 
  Shield, 
  Globe, 
  Smartphone, 
  TrendingDown 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: TrendingDown,
      title: "Low Fees",
      description: "Send money with fees up to 90% lower than traditional banks. No hidden charges, transparent pricing."
    },
    {
      icon: Clock,
      title: "Instant Settlement",
      description: "Transfers complete in minutes, not days. Real-time processing with blockchain technology."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Military-grade encryption and smart contract security. Your funds are always protected."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Send to 180+ countries worldwide. Support for multiple currencies and payment methods."
    },
    {
      icon: Smartphone,
      title: "Easy to Use",
      description: "Simple, intuitive interface. Send money with just a few taps on any device."
    },
    {
      icon: DollarSign,
      title: "Best Exchange Rates",
      description: "Get competitive mid-market exchange rates with no markup. Save on every transfer."
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of cross-border payments with cutting-edge blockchain technology
            and user-centric design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 shadow-elegant"
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;