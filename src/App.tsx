import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OracoesPrincipais from "./pages/OracoesPrincipais";
import OracoesManha from "./pages/OracoesManha";
import OracoesNoite from "./pages/OracoesNoite";
import NossaSenhora from "./pages/NossaSenhora";
import SaoJose from "./pages/SaoJose";
import AntesMissa from "./pages/AntesMissa";
import AcaoGracas from "./pages/AcaoGracas";
import DevocoesEucaristicas from "./pages/DevocoesEucaristicas";
import OracoesDiversas from "./pages/OracoesDiversas";
import Ladainhas from "./pages/Ladainhas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/oracoes-principais" element={<OracoesPrincipais />} />
          <Route path="/oracoes-manha" element={<OracoesManha />} />
          <Route path="/oracoes-noite" element={<OracoesNoite />} />
          <Route path="/nossa-senhora" element={<NossaSenhora />} />
          <Route path="/sao-jose" element={<SaoJose />} />
          <Route path="/antes-missa" element={<AntesMissa />} />
          <Route path="/acao-gracas" element={<AcaoGracas />} />
          <Route path="/devocoes-eucaristicas" element={<DevocoesEucaristicas />} />
          <Route path="/oracoes-diversas" element={<OracoesDiversas />} />
          <Route path="/ladainhas" element={<Ladainhas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
