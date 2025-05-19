import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./routes/Home"
import Sobre from "./routes/Sobre"
import Contato from "./routes/Contato"
import Projetos from "./routes/Projetos"

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
