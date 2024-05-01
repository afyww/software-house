import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Scrollup from '../components/Scrollup'
import Whatsapp from '../components/Whatsapp'
import Contactus from '../components/Contactus'
import Slider from '../components/Runningtext'

function Home() {
    return (
        <main className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Scrollup />
                <Whatsapp />
                <Hero />
                <Slider />
                <Contactus />
                <Map />
            </div>
            <Footer />
        </main>
    )
}

export default Home
