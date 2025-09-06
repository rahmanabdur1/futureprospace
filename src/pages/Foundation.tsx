import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Globe, Heart, Zap } from "lucide-react";

const Foundation = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MPS Foundation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building a decentralized future through blockchain innovation and community empowerment
            </p>
          </div>
        </section>

        {/* Foundation Pillars */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Foundation Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Security First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced security protocols and smart contract auditing
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Expanding blockchain adoption worldwide
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Supporting developers and users in the ecosystem
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pioneering next-generation blockchain solutions
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

export default Foundation;