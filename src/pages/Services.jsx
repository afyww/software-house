import Contactus from '../components/Contactus'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import Scrollup from '../components/Scrollup'
import Serviceus from '../components/Serviceus'
import Whatsapp from '../components/Whatsapp'

function Services() {
  return (
    <main>
      <Navbar />
    <div>
      <Scrollup />
      <Whatsapp />
      <Serviceus />
      <Contactus />
      <Map />
    </div>
    <Footer />
    </main>
  )
}

export default Services
