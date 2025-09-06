import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image, Palette, Trophy, Star } from "lucide-react";

const NFTs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MPS NFTs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Unique digital collectibles with utility in the Meta Pro Space ecosystem
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Image className="h-8 w-8 text-primary" />
                    <Badge variant="default">Live</Badge>
                  </div>
                  <CardTitle>Genesis Warriors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    First collection of MPS warriors with special gaming benefits
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-muted-foreground">Floor Price</div>
                    <div className="font-bold text-primary">0.5 BNB</div>
                  </div>
                  <Button className="w-full">View Collection</Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Palette className="h-8 w-8 text-primary" />
                    <Badge variant="outline">Coming Soon</Badge>
                  </div>
                  <CardTitle>Digital Art Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Curated digital artwork from renowned blockchain artists
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-muted-foreground">Starting Price</div>
                    <div className="font-bold text-primary">0.1 BNB</div>
                  </div>
                  <Button variant="outline" className="w-full">Notify Me</Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Trophy className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">Exclusive</Badge>
                  </div>
                  <CardTitle>Legendary Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Ultra-rare NFTs with maximum gaming and staking benefits
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-muted-foreground">Floor Price</div>
                    <div className="font-bold text-primary">5.0 BNB</div>
                  </div>
                  <Button variant="secondary" className="w-full">Explore</Button>
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

export default NFTs;