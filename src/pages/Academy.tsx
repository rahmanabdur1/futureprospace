import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, Users, Trophy } from "lucide-react";

const Academy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MPS Academy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Learn blockchain technology, trading strategies, and cryptocurrency fundamentals
            </p>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Blockchain Basics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understanding blockchain technology, DeFi, and smart contracts
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Video className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Step-by-step video guides for trading and platform usage
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join discussions with experts and fellow learners
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Trophy className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Earn certificates and unlock advanced features
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

export default Academy;