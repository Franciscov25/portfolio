// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./routes/Home"
import Sobre from "./routes/Sobre"
import Contato from "./routes/Contato"
import Projetos from "./routes/Projetos"
import DetalhesProjeto from "./Components/DetalhesProjeto"
import ParticlesBackground from "./Components/ParticlesBackground"
import Error from "./routes/Error" // Certifique-se de importar o componente Error

function App() {
  return (
    // O container principal do App terá flex-col e min-h-screen para preencher a viewport.
    // O bg-zinc-900 aqui atua como um fundo geral.
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <Router>
        <Header/>
        <ParticlesBackground /> {/* Particles continua fixo e no z-index -1 */}

        {/* O main com flex-grow vai preencher o espaço entre Header e Footer.
            Ele não precisa de z-index, pois o z-index dos componentes de rota cuidará da sobreposição. */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/projetos" element={<Projetos/>}/>
            <Route path="/projetos/:id" element={<DetalhesProjeto/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  )
}

export default App