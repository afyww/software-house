import Contactus from '../components/Contactus'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import Scrollup from '../components/Scrollup'
import Whatsapp from '../components/Whatsapp'
import Work from '../components/Work'

function Workus() {
  return (
    <main className='flex flex-col min-h-screen'>
    <Navbar />
      <div>
        <Scrollup />
        <Whatsapp />
        <Work />
        <Contactus />
        <Map />
      </div>
      <Footer />
    </main>
  )
}

export default Workus
