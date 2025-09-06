import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Academy from "./pages/Academy";
import Foundation from "./pages/Foundation";
import Dashboard from "./pages/Dashboard";
import Games from "./pages/Games";
import MPSCoinMining from "./pages/projects/MPSCoinMining";
import MPSToken from "./pages/projects/MPSToken";
import NFTs from "./pages/projects/NFTs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/games" element={<Games />} />
          <Route path="/mps-coin-mining" element={<MPSCoinMining />} />
          <Route path="/mps-token" element={<MPSToken />} />
          <Route path="/nfts" element={<NFTs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
