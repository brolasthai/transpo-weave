import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import PaymentDemo from "@/components/PaymentDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="calculator">
        <PaymentDemo />
      </section>
    </div>
  );
};

export default Index;
