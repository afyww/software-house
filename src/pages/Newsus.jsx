import Contactus from "../components/Contactus"
import Footer from "../components/Footer"
import Map from "../components/Map"
import Navbar from "../components/Navbar"
import Scrollup from "../components/Scrollup"
import Whatsapp from "../components/Whatsapp"
import News from "../components/News"


function Newsus() {
  return (
    <main className='flex flex-col min-h-screen'>
    <Navbar />
    <div>
      <Scrollup />
      <Whatsapp />
      <News />
      <Contactus />
      <Map />
    </div>
    <Footer />
    </main>
  )
}

export default Newsus
