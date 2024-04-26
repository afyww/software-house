import { useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import anime from 'animejs';
import logo from '../assets/custompedia.png'

function Hero() {

    useEffect(() => {
        anime({
            targets: '.img',
            translateY: -40,
            direction: 'alternate',
            loop: true,
            easing: 'spring(1, 30, 100, 0)'
        });
    }, []);

    return (
        <div className='grid grid-cols-1 h-screen bg-black'>
            <div className="my-64 xl:my-56 2xl:my-64 xl:flex justify-between">
                <div className='xl:w-fit h-fit xl:my-44 xl:order-2 order-1'>
                    <img className='img' src={logo} alt="" />
                </div>
                <div className="xl:order-1 mx-5 xl:mx-32 order-2 space-y-5 xl:space-y-10 2xl:space-y-16">
                    <div className="w-full">
                        <h1 className="text-2xl text-center xl:text-left xl:text-7xl 2xl:text-7xl text-white  font-medium">Digitalize</h1>
                        <h1 className="text-2xl text-center xl:text-left xl:text-7xl 2xl:text-7xl text-white  font-medium">Your Brand And</h1>
                        <h1 className="text-2xl text-center xl:text-left xl:text-7xl 2xl:text-7xl text-white font-medium">Connect The World.</h1>
                    </div>
                    <div className="xl:w-full">
                        <p className="text-sm xl:text-base 2xl:text-lg text-center xl:text-left font-light text-white">Dipercaya para klien selama 9 tahun berkarya, kami siap membantu untuk membangun dan mengembangkan strategi bisnis anda</p>
                    </div>
                    <div className='flex space-x-1 xl:space-x-5 mx-auto xl:mx-0 w-fit'>
                        <div className="p-2 mx-auto xl:mx-0 xl:p-4 2xl:p-6 hover:scale-110 hover:bg-gradient-to-l from-amber-400 to-amber-600 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl w-fit duration-200 delay-150">
                            <a className="text-white text-center px-3 xl:p-6 2xl:p-8 text-base xl:text-xl 2xl:text-2xl font-bold" href="/">Get Started</a>
                        </div>
                        <a href='/' className='flex'>
                            <h1 className="my-auto text-white text-center px-3 text-base xl:text-xl 2xl:text-2xl font-bold" href="/">Learn More</h1>
                            <FaLongArrowAltRight className='text-white my-auto w-8 h-6 xl:w-12 xl:h-8' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
