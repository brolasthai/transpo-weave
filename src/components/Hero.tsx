import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-payment.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Global payment network visualization" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-primary rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-primary rounded-full opacity-15 animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-glow">
            <Shield className="w-4 h-4" />
            Powered by Blockchain Technology
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
            Send Money
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Across Borders
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Fast, secure, and affordable cross-border payments powered by blockchain technology. 
            Send money globally with minimal fees and instant settlement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Start Sending Money
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn How It Works
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Globe className="w-5 h-5 text-primary" />
              <span className="font-medium">180+ Countries</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-medium">Instant Settlement</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-medium">Bank-Level Security</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;