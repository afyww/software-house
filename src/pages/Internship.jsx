import Contactus from "../components/Contactus"
import Footer from "../components/Footer"
import Internshipus from "../components/Internshipus"
import Map from "../components/Map"
import Navbar from "../components/Navbar"
import Scrollup from "../components/Scrollup"
import Whatsapp from "../components/Whatsapp"


function Internship() {
  return (
    <main className='flex flex-col min-h-screen'>
    <Navbar />
    <div>
      <Scrollup />
      <Whatsapp />
      <Internshipus />
      <Contactus />
      <Map />
    </div>
    <Footer />
    </main>
  )
}

export default Internship
