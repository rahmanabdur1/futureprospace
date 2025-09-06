import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wallet, Users, TrendingUp, DollarSign, Clock, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-8 border-b border-primary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">User Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's your account overview.</p>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-primary/50">Millionaire Program</Badge>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">$1,247.50</div>
                  <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">127</div>
                  <p className="text-xs text-muted-foreground">5 levels deep</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Growth</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">+24.3%</div>
                  <p className="text-xs text-muted-foreground">Above average</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">$847.25</div>
                  <p className="text-xs text-muted-foreground">Available for withdrawal</p>
                </CardContent>
              </Card>
            </div>

            {/* Commission Structure */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle>Commission Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-lg font-bold text-primary">Admin: 30%</div>
                    <div className="text-sm text-muted-foreground">$1.50</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/10">
                    <div className="text-lg font-bold">1st Upline: 30%</div>
                    <div className="text-sm text-muted-foreground">$1.50</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/10">
                    <div className="text-lg font-bold">2nd Upline: 10%</div>
                    <div className="text-sm text-muted-foreground">$0.50</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/10">
                    <div className="text-lg font-bold">3rd-5th: 5%</div>
                    <div className="text-sm text-muted-foreground">$0.25 each</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-4 rounded-lg bg-secondary/10">
                    <div className="text-lg font-bold">Salary: 10%</div>
                    <div className="text-sm text-muted-foreground">$0.50</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/10">
                    <div className="text-lg font-bold">Free Fund: 5%</div>
                    <div className="text-sm text-muted-foreground">$0.25</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Programs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Active Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                      <div>
                        <div className="font-semibold text-primary">Millionaire</div>
                        <div className="text-sm text-muted-foreground">Currently Active</div>
                      </div>
                      <Badge variant="default">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <div>
                        <div className="font-semibold">Billionaire</div>
                        <div className="text-sm text-muted-foreground">Coming Soon</div>
                      </div>
                      <Badge variant="outline">Soon</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <div>
                        <div className="font-semibold">Trillionaire</div>
                        <div className="text-sm text-muted-foreground">Coming Soon</div>
                      </div>
                      <Badge variant="outline">Soon</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <DollarSign className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Commission Received</div>
                          <div className="text-sm text-muted-foreground">From downline</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">+$12.50</div>
                        <div className="text-xs text-muted-foreground">2h ago</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <div className="font-medium">Salary Payment</div>
                          <div className="text-sm text-muted-foreground">Monthly salary</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">+$50.00</div>
                        <div className="text-xs text-muted-foreground">1d ago</div>
                      </div>
                    </div>
                  </div>
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

export default Dashboard;