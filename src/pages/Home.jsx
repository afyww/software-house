import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Scrollup from '../components/Scrollup'
import Whatsapp from '../components/Whatsapp'
import Contactus from '../components/Contactus'
import Slider from '../components/Runningtext'
import Aboutus from '../components/Aboutus'
import Serviceus from '../components/Serviceus'
import Ourwork from '../components/Ourwork'
import Review from '../components/Review'

function Home() {
    return (
        <main className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Scrollup />
                <Whatsapp />
                <Hero />
                <Slider />
                <Aboutus />
                <Serviceus />
                <Ourwork />
                <Review />
                <Contactus />
                <Map />
            </div>
            <Footer />
        </main>
    )
}

export default Home
