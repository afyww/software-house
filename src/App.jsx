import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Workus from "./pages/Workus"
import Newsus from "./pages/Newsus"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workus" element={<Workus />} />
      <Route path="/news" element={<Newsus />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
