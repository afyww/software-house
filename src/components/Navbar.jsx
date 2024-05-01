import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Work Us', href: '/workus' },
    { title: 'News', href: '/news' },
    { title: 'Contact Us', href: '/contact' }
];

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [activePage, setActivePage] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Adjust this value based on your mobile breakpoint
        };

        handleResize(); // Call once to initialize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Get the current pathname
        const currentPath = window.location.pathname;

        // Find the matching nav link
        const matchedLink = navLinks.find(link => link.href === currentPath);

        // Set the active page
        setActivePage(matchedLink);
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const modalVariants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween', // Set transition type to 'tween'
                duration: 0.3, // Specify duration
            },
        },
        exit: {
            y: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: 0.3,
            },
        },
    };

    const linkItemVariants = {
        hidden: { opacity: 0, y: '50%' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" // Add ease-out easing function
            },
        },
        exit: {
            opacity: 0,
            y: '50%',
            transition: {
                duration: 0.1,
                ease: "easeOut" // Add ease-out easing function
            }
        },
    };

    const navLinksVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    return (
        <nav className="bg-transparent shadow-xl z-10 absolute top-0 right-0 left-0 p-4 xl:p-10">
            <div className="flex justify-between xl:mx-24">
                <div>
                    <a href="/">
                        <h1 className='text-white text-2xl xl:text-5xl font-semibold'>Sivi<span className='text-amber-500'>Naries</span></h1>
                    </a>
                </div>
                {isMobileView ? (
                    <button className="text-white">
                        {showModal ? (
                            <FaTimes onClick={toggleModal} className="xl:w-10 xl:h-8 w-6 h-6" />
                        ) : (
                            <FaBars onClick={toggleModal} className="xl:w-10 xl:h-8 w-6 h-6" />
                        )}
                    </button>
                ) : (
                    <div className="hidden sm:flex gap-10 my-auto">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className={`text-white text-lg font-semibold hover:scale-110 duration-200 delay-150 ${activePage && activePage.href === link.href ? 'border-b-4 border-amber-500' : ''}`}>
                                {link.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <AnimatePresence>
                {showModal && isMobileView && (
                    <motion.div
                        className="fixed inset-0 flex justify-center items-center bg-black"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <FaTimes
                            className="absolute top-5 right-4 text-white cursor-pointer w-6 h-6"
                            onClick={toggleModal}
                        />
                        <motion.div
                            className="relative w-full"
                            variants={navLinksVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="flex flex-col gap-8 items-center justify-center h-full ">
                                {navLinks.map((link, index) => (
                                    <motion.span key={index} className={`text-gray-200 text-5xl font-semibold ${activePage && activePage.href === link.href ? 'border-b-4 border-amber-500' : ''}`} variants={linkItemVariants} onClick={closeModal}>
                                        <a href={link.href}>{link.title}</a>
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;