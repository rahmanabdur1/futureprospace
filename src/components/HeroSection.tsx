import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60" />
        <div className="animate-float absolute top-40 right-20 w-6 h-6 bg-accent rounded-full opacity-40" style={{ animationDelay: '1s' }} />
        <div className="animate-float absolute bottom-32 left-1/4 w-3 h-3 bg-primary-glow rounded-full opacity-80" style={{ animationDelay: '2s' }} />
        <div className="animate-float absolute top-1/3 right-1/3 w-5 h-5 bg-gradient-mid rounded-full opacity-50" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
          Enter the gateway of{" "}
          <span className="gradient-primary bg-clip-text text-transparent">
            Blockchain Platform
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Unlock the Power of Decentralization—NFTs, Tokens, Coins, and Mining Await!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 glow-effect animate-pulse-glow group"
          >
            Registration
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-primary/50 hover:border-primary"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Potential Projects</div>
          </div>
          <div className="glass-card p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">$570B</div>
            <div className="text-muted-foreground">Market Cap</div>
          </div>
          <div className="glass-card p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">400K</div>
            <div className="text-muted-foreground">Investors</div>
          </div>
        </div>
      </div>
    </section>
  );
};