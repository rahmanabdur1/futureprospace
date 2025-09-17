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
import DAPP from "./pages/projects/DAPP";
import MPSSwap from "./pages/projects/MPSSwap";
import MPSBlockchain from "./pages/projects/MPSBlockchain";
import MUSD from "./pages/projects/MUSD";
import MPSLottery from "./pages/projects/MPSLottery";
import AIRobot from "./pages/projects/AIRobot";

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
          <Route path="/dapp" element={<DAPP />} />
          <Route path="/mps-swap" element={<MPSSwap />} />
          <Route path="/mps-blockchain" element={<MPSBlockchain />} />
          <Route path="/musd" element={<MUSD />} />
          <Route path="/mps-lottery" element={<MPSLottery />} />
          <Route path="/ai-robot" element={<AIRobot />} />
  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
