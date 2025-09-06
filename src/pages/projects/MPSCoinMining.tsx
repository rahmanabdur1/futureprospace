import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pickaxe, Zap, DollarSign, TrendingUp } from "lucide-react";

const MPSCoinMining = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MPS Coin Mining
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Mine MPS coins and earn passive income through our advanced blockchain mining platform
            </p>
            <Button size="lg" className="glow-effect">
              Start Mining
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <Pickaxe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Mining Power</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">2.5 TH/s</div>
                  <p className="text-muted-foreground">Current hash rate</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Daily Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">$12.50</div>
                  <p className="text-muted-foreground">Per day average</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">98.7%</div>
                  <p className="text-muted-foreground">Uptime rate</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>ROI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">125%</div>
                  <p className="text-muted-foreground">Annual return</p>
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

export default MPSCoinMining;