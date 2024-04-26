import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function Scrollup() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="fixed bottom-10 left-5 bg-black opacity-85 hover:opacity-100 py-2 xl:py-4 rounded-full">
            <button onClick={scrollToTop} className="">
                <MdKeyboardDoubleArrowUp className="text-white hover:text-black w-10 h-16 xl:w-12 xl:h-20" />
            </button>
        </div>

    );
}

export default Scrollup;
