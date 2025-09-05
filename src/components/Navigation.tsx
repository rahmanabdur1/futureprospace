import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            Meta Pro Space
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#roadmap" className="text-foreground hover:text-primary transition-colors">Roadmap</a>
            <a href="#partners" className="text-foreground hover:text-primary transition-colors">Partners</a>
            <Button variant="default" className="glow-effect animate-pulse-glow">
              Registration
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#roadmap" className="text-foreground hover:text-primary transition-colors">Roadmap</a>
              <a href="#partners" className="text-foreground hover:text-primary transition-colors">Partners</a>
              <Button variant="default" className="w-full">
                Registration
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};