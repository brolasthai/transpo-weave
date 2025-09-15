import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, DollarSign, Euro, PoundSterling } from "lucide-react";

const PaymentDemo = () => {
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const exchangeRates = {
    "USD-EUR": 0.92,
    "USD-GBP": 0.79,
    "EUR-USD": 1.09,
    "EUR-GBP": 0.86,
    "GBP-USD": 1.27,
    "GBP-EUR": 1.16
  };

  const getConvertedAmount = () => {
    const rate = exchangeRates[`${fromCurrency}-${toCurrency}` as keyof typeof exchangeRates] || 1;
    return (parseFloat(amount) * rate).toFixed(2);
  };

  const getFee = () => {
    return (parseFloat(amount) * 0.005).toFixed(2); // 0.5% fee
  };

  const getCurrencyIcon = (currency: string) => {
    switch (currency) {
      case "USD":
        return <DollarSign className="w-4 h-4" />;
      case "EUR":
        return <Euro className="w-4 h-4" />;
      case "GBP":
        return <PoundSterling className="w-4 h-4" />;
      default:
        return <DollarSign className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-24 bg-gradient-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Try Our Payment Calculator
          </h2>
          <p className="text-xl text-muted-foreground">
            See how much you can save with our transparent pricing and competitive exchange rates.
          </p>
        </div>
        
        <Card className="p-8 bg-gradient-card border-0 shadow-elegant">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <Label htmlFor="amount" className="text-lg font-semibold">You Send</Label>
              <div className="relative">
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-2xl font-bold pl-12 h-16 bg-background/50 border-2 focus:border-primary"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  {getCurrencyIcon(fromCurrency)}
                </div>
              </div>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="h-12 bg-background/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="received" className="text-lg font-semibold">Recipient Gets</Label>
              <div className="relative">
                <Input
                  id="received"
                  type="text"
                  value={getConvertedAmount()}
                  readOnly
                  className="text-2xl font-bold pl-12 h-16 bg-success/10 border-2 border-success text-success"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-success">
                  {getCurrencyIcon(toCurrency)}
                </div>
              </div>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="h-12 bg-background/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="bg-background/50 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Our fee</span>
              <span className="font-semibold">{getFee()} {fromCurrency}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Exchange rate</span>
              <span className="font-semibold">
                1 {fromCurrency} = {exchangeRates[`${fromCurrency}-${toCurrency}` as keyof typeof exchangeRates] || 1} {toCurrency}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Transfer time</span>
              <span>Instant</span>
            </div>
          </div>
          
          <Button variant="hero" size="lg" className="w-full group">
            Send This Amount Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default PaymentDemo;