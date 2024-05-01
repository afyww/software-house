import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Internship from "./pages/Internship"
import Contact from "./pages/Contact"
import Workus from "./pages/Workus"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workus" element={<Workus />} />
      <Route path="/service" element={<Services />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
