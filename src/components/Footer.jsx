import { SiGmail } from "react-icons/si";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
    return (
        <footer className="h-fit w-full bg-black  mx-auto">
            <div className="">
                <div className=" grid grid-cols-3 xl:grid-cols-4 p-8 xl:p-16 space-y-4 xl:space-y-0">
                    <div className="col-span-3 xl:col-span-1">
                        <a className='space-y-2' href="/">
                            <h1 className='text-white text-center text-2xl xl:text-4xl font-extrabold'>Custom<span className='text-white'>Pedia</span></h1>
                            <p className="block text-white text-center text-xs xl:text-sm 2xl:text-lg">Custompedia Creative Merupakan Creative Marketing Agency yang berlokasi di Semarang. Kami siap menjadi partner untuk mengoptimalkan bisnis Anda.</p>
                        </a>
                    </div>
                    <div className='space-y-4 mx-auto col-span-1'>
                        <div>
                            <h1 className='font-semibold text-yellow-500 text-center text-xs xl:text-lg 2xl:text-xl'>Quick Link</h1>
                        </div>
                        <div className='space-y-2 text-center'>
                            <a className='block text-white text-xs xl:text-sm 2xl:text-lg' href="/">Home</a>
                            <a className='block text-white text-xs xl:text-sm 2xl:text-lg' href="/about">About Us</a>
                            <a className='block text-white text-xs xl:text-sm 2xl:text-lg' href="/service">Services</a>
                            <a className='block text-white text-xs xl:text-sm 2xl:text-lg' href="/internship">Internship</a>
                            <a className='block text-white text-xs xl:text-sm 2xl:text-lg' href="/contact">Contact Us</a>
                        </div>
                    </div>
                    <div className='space-y-2 mx-auto col-span-2 xl:col-span-1'>
                        <div>
                            <h1 className='font-semibold text-yellow-500 text-center text-xs xl:text-lg 2xl:text-xl'>Our Address</h1>
                        </div>
                        <div className='text-center'>
                            <h1 className='block text-white text-xs xl:text-sm 2xl:text-lg'>Jl. Tlogo Sarangan No.39, Palebon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50246, Indonesia</h1>
                        </div>
                    </div>

                    <div className='space-y-4 mx-auto col-span-3 xl:col-span-1'>
                        <div>
                            <h1 className='font-semibold text-yellow-500 text-center text-xs xl:text-lg 2xl:text-xl'>Connect With Us</h1>
                        </div>
                        <div className='flex gap-4 xl:gap-8'>
                            <FaInstagram className='text-white w-8 h-8' />
                            <FaFacebookSquare className='text-white w-8 h-8' />
                            <IoLogoWhatsapp className='text-white w-8 h-8' />
                            <SiGmail className="text-white w-8 h-8" />
                        </div>

                    </div>
                </div>
                <div className='text-center p-2.5 xl:p-5 my-auto border-t mx-10 border-white'>
                    <h1 className='text-white text-xs'>Copyright © PT Custompedia Creative 2024</h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer
