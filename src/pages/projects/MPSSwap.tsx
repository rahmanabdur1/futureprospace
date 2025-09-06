import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Zap, Shield, TrendingUp } from "lucide-react";

const MPSSwap = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MPS Swap
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Decentralized exchange for seamless token swapping
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto mb-12">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-center">Swap Tokens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/20 border">
                    <div className="flex justify-between items-center">
                      <span>From</span>
                      <Badge>Balance: 0.00</Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="number"
                        placeholder="0.0"
                        className="flex-1 bg-transparent text-2xl font-bold outline-none"
                      />
                      <Button variant="outline" size="sm">BNB</Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/20 border">
                    <div className="flex justify-between items-center">
                      <span>To</span>
                      <Badge>Balance: 0.00</Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="number"
                        placeholder="0.0"
                        className="flex-1 bg-transparent text-2xl font-bold outline-none"
                      />
                      <Button variant="outline" size="sm">MPS</Button>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Connect Wallet
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary" />
                  <CardTitle>Instant Swaps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lightning fast token swaps with minimal slippage
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle>Secure Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Audited smart contracts for safe trading
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <CardTitle>Best Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Competitive rates across multiple DEXs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MPSSwap;