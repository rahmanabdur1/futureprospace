import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Wallet, Shield, Zap } from "lucide-react";

const DAPP = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MPS DAPP
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Decentralized application for seamless blockchain interactions
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">DAPP Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Smartphone className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Mobile First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Optimized for mobile devices with responsive design
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Wallet className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Multi-Wallet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Support for MetaMask, Trust Wallet, and more
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Secure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bank-grade security with smart contract audits
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lightning fast transactions on BSC network
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

export default DAPP;