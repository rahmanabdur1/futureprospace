import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TokenStatsSection } from "@/components/TokenStatsSection";

const MPSToken = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-background via-background/80 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              MPS Token
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The native utility token powering the Meta Pro Space ecosystem
            </p>
          </div>
        </section>

        <TokenStatsSection />
      </main>

      <Footer />
    </div>
  );
};

export default MPSToken;