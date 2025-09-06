import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Trophy, Users, Star } from "lucide-react";

const Games = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MPS Games
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Play, earn, and compete in our blockchain-powered gaming ecosystem
            </p>
          </div>
        </section>

        {/* Featured Games */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Gamepad2 className="h-8 w-8 text-primary" />
                    <Badge variant="default">Live</Badge>
                  </div>
                  <CardTitle>Crypto Warriors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Battle in the metaverse and earn MPS tokens
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">1,247 players</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="h-4 w-4" />
                      <span className="text-sm">$5,000 pool</span>
                    </div>
                  </div>
                  <Button className="w-full">Play Now</Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Star className="h-8 w-8 text-primary" />
                    <Badge variant="outline">Beta</Badge>
                  </div>
                  <CardTitle>NFT Racing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Race with your NFT cars and win prizes
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">523 players</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="h-4 w-4" />
                      <span className="text-sm">$2,500 pool</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Join Beta</Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Trophy className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                  <CardTitle>MPS Arena</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Competitive tournament platform
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">Pre-register</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="h-4 w-4" />
                      <span className="text-sm">$10,000 pool</span>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full">Notify Me</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gaming Stats */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Gaming Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Active Games</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Players</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$50K</div>
                <div className="text-muted-foreground">Total Rewards</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Live Tournaments</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Games;