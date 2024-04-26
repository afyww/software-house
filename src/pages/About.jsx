import Aboutus from '../components/Aboutus'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import Scrollup from '../components/Scrollup'
import Whatsapp from '../components/Whatsapp'

function About() {
  return (
    <main>
      <Navbar />
      <div>
        <Scrollup />
        <Whatsapp />
        <Aboutus />
        <Contactus />
        <Map />
      </div>
      <Footer />
    </main>
  )
}

export default About
