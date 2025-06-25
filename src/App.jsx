import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip"; // Importando o Provider do Radix UI

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import Contato from "./routes/Contato";
import Projetos from "./routes/Projetos";
import DetalhesProjeto from "./Components/DetalhesProjeto";
import ParticlesBackground from "./Components/ParticlesBackground";
import Error from "./routes/Error";
import SimpleSpotifyEmbed from "./Components/SimpleSpotifyEmbed";

function AppWrapper() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 relative">
      <Header />
      <ParticlesBackground />

      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<DetalhesProjeto />} />
          <Route path="*" element={<Error />} />
        </Routes>

        {/* Renderizando o Spotify apenas na Home */}
        {location.pathname === "/" && <SimpleSpotifyEmbed />}
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Router>
        <AppWrapper />
      </Router>
    </Tooltip.Provider>
  );
}

export default App;
