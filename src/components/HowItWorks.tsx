import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, CreditCard, Send, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up in minutes with just your email. Verify your identity for enhanced security.",
      step: "01"
    },
    {
      icon: CreditCard,
      title: "Add Funds",
      description: "Connect your bank account, debit card, or crypto wallet to fund your transfers.",
      step: "02"
    },
    {
      icon: Send,
      title: "Send Money",
      description: "Enter recipient details, choose amount and currency. Review and confirm your transfer.",
      step: "03"
    },
    {
      icon: CheckCircle,
      title: "Money Delivered",
      description: "Recipient receives funds instantly. Track your transfer in real-time until delivery.",
      step: "04"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Send money across borders in four simple steps. Fast, secure, and transparent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 shadow-elegant">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-glow">
                    {step.step}
                  </div>
                </div>
                
                <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-glow">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Start Your First Transfer
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;