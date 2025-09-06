import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Shield, TrendingUp, Zap } from "lucide-react";

const MUSD = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MUSD
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Meta Pro Space USD - Algorithmic stablecoin for the MPS ecosystem
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="glass-card text-center">
                <CardHeader>
                  <CardTitle className="text-3xl">Current MUSD Price</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-6xl font-bold text-primary mb-4">$1.00</div>
                  <div className="flex justify-center gap-8">
                    <div>
                      <div className="text-2xl font-bold">$10.2M</div>
                      <div className="text-muted-foreground">Market Cap</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">$2.1M</div>
                      <div className="text-muted-foreground">24h Volume</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">98.5%</div>
                      <div className="text-muted-foreground">Collateral Ratio</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">MUSD Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Price Stability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Maintains $1.00 peg through algorithmic mechanisms
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Collateralized</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Backed by diversified crypto assets and reserves
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Yield Earning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stake MUSD to earn attractive yields
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>DeFi Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seamlessly integrate with DeFi protocols
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="mr-4">Mint MUSD</Button>
              <Button variant="outline" size="lg">View Whitepaper</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MUSD;