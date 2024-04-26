import Contactus from "../components/Contactus"
import Footer from "../components/Footer"
import Map from "../components/Map"
import Navbar from "../components/Navbar"
import Scrollup from "../components/Scrollup"
import Whatsapp from "../components/Whatsapp"


function Contact() {
  return (
    <main>
      <Navbar />
      <div>
        <Scrollup />
        <Whatsapp />
        <Contactus />
        <Map />
      </div>
      <Footer />
    </main>
  )
}

export default Contact
