import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ticket, Trophy, Clock, Users } from "lucide-react";

const MPSLottery = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MPS Lottery
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Decentralized lottery with transparent, provably fair draws
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto mb-12">
              <Card className="glass-card text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">Current Jackpot</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold text-primary mb-4">$125,000</div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xl font-bold">2,547</div>
                      <div className="text-muted-foreground">Players</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">6h 23m</div>
                      <div className="text-muted-foreground">Time Left</div>
                    </div>
                  </div>
                  <Button size="lg" className="w-full mb-2">Buy Tickets</Button>
                  <p className="text-sm text-muted-foreground">Ticket Price: $5 MUSD</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="glass-card">
                <CardHeader>
                  <Ticket className="h-8 w-8 text-primary" />
                  <CardTitle>Fair Draw</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provably fair using Chainlink VRF
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <Trophy className="h-8 w-8 text-primary" />
                  <CardTitle>Weekly Prizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    New lottery every week with growing jackpots
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary" />
                  <CardTitle>Instant Payout</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automatic smart contract payouts
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle>Community Pool</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    5% goes to community development fund
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Recent Winners</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10">
                    <div>
                      <div className="font-semibold">0x7f...8a2b</div>
                      <div className="text-sm text-muted-foreground">Round #127</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">$85,000</div>
                      <div className="text-xs text-muted-foreground">3 days ago</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
                    <div>
                      <div className="font-semibold">0x3c...9f1d</div>
                      <div className="text-sm text-muted-foreground">Round #126</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">$67,500</div>
                      <div className="text-xs text-muted-foreground">1 week ago</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MPSLottery;