import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./routes/Home"
import Sobre from "./routes/Sobre"
import Contato from "./routes/Contato"
import Projetos from "./routes/Projetos"
import DetalhesProjeto from "./Components/DetalhesProjeto"
import ParticlesBackground from "./Components/ParticlesBackground"
import Error from "./routes/Error" 
import SimpleSpotifyEmbed from "./Components/SimpleSpotifyEmbed"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <Router>
        <Header/>
        <ParticlesBackground /> 

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
        <SimpleSpotifyEmbed/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App