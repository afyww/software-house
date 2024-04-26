import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Internship from "./pages/Internship"
import Contact from "./pages/Contact"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
