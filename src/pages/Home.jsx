import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Motion from '../components/Motion'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Scrollup from '../components/Scrollup'
import Whatsapp from '../components/Whatsapp'
import Contactus from '../components/Contactus'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Scrollup />
                <Whatsapp />
                <Hero />
                <Motion />
                <Contactus />
                <Map />
            </div>
            <Footer />
        </main>
    )
}

export default Home
