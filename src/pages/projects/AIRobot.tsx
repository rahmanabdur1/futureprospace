import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Brain, Zap, MessageSquare } from "lucide-react";

const AIRobot = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MPS AI Robot
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced AI assistant for blockchain and DeFi operations
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-center">Chat with MPS AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/20 rounded-lg p-4 h-64 mb-4 overflow-y-auto">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                        <div className="bg-primary/10 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">Hello! I'm your MPS AI assistant. How can I help you today?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 justify-end">
                        <div className="bg-accent/10 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">What's the current MPS token price?</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-accent" />
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                        <div className="bg-primary/10 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">The current MPS token price is $0.15 with a 24h change of +12.5%. Would you like more details?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask me anything about MPS..."
                      className="flex-1 px-3 py-2 rounded-lg bg-muted/20 border border-border"
                    />
                    <Button>Send</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">AI Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Bot className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Smart Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    24/7 AI support for all MPS ecosystem questions
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Brain className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Market Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Real-time market insights and trading recommendations
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Auto Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automated trading strategies and portfolio management
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:glow-effect transition-all">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Multi-Language</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Support for 50+ languages including Bengali
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Coming Soon Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6">
                <Badge variant="outline" className="mb-4">Q2 2024</Badge>
                <h3 className="text-xl font-bold mb-2">Voice Assistant</h3>
                <p className="text-muted-foreground">Voice-activated AI commands</p>
              </div>
              <div className="p-6">
                <Badge variant="outline" className="mb-4">Q3 2024</Badge>
                <h3 className="text-xl font-bold mb-2">Telegram Integration</h3>
                <p className="text-muted-foreground">AI bot for Telegram groups</p>
              </div>
              <div className="p-6">
                <Badge variant="outline" className="mb-4">Q4 2024</Badge>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground">Deep learning market predictions</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIRobot;