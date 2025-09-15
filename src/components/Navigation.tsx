

import { Button } from "@/components/ui/button";
import { MenuIcon, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo + Site Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/navlogo.png"
              alt="Meta Pro Space Logo"
              className="h-13 w-14 object-contain"
            />
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              FUTURE PRO <br/>SPACE
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/academy"
              className="text-foreground hover:text-primary transition-colors"
            >
              Academy
            </a>
            <a
              href="/foundation"
              className="text-foreground hover:text-primary transition-colors"
            >
              Foundation
            </a>

            {/* Projects Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Projects <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-md border-primary/20">
                <DropdownMenuItem>
                  <a href="/mps-coin-mining" className="w-full">
                    MPS Coin Mining
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/mps-token" className="w-full">
                    MPS Token
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/nfts" className="w-full">
                    NFTs
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/dapp" className="w-full">
                    DAPP
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/mps-swap" className="w-full">
                    MPS Swap
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/mps-blockchain" className="w-full">
                    MPS Blockchain
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/musd" className="w-full">
                    MUSD
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/mps-lottery" className="w-full">
                    MPS Lottery
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/ai-robot" className="w-full">
                    AI Robot
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="/games"
              className="text-foreground hover:text-primary transition-colors"
            >
              Games
            </a>
            <a
              href="/dashboard"
              className="text-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </a>
            <Button
              variant="default"
              className="glow-effect animate-pulse-glow"
            >
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
              <a
                href="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="/academy"
                className="text-foreground hover:text-primary transition-colors"
              >
                Academy
              </a>
              <a
                href="/foundation"
                className="text-foreground hover:text-primary transition-colors"
              >
                Foundation
              </a>
              <a
                href="/games"
                className="text-foreground hover:text-primary transition-colors"
              >
                Games
              </a>
              <a
                href="/dashboard"
                className="text-foreground hover:text-primary transition-colors"
              >
                Dashboard
              </a>
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
