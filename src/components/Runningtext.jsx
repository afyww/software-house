import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Runningtext() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false // This line removes the arrows
    };

    return (
        <div className="h-fit grid grid-cols-1 w-full max-w-fit mx-auto bg-black">
            <div className="my-4 xl:my-8">
                <Slider className="" {...settings}>
                    <div>
                        <h1 className="text-white text-lg xl:text-5xl font-extrabold">UI/UX DESIGN</h1>
                    </div>
                    <div>
                        <h1 className="text-white text-lg xl:text-5xl font-extrabold">WEB DEVELOPMENT</h1>
                    </div>
                    <div>
                        <h1 className="text-white text-lg xl:text-5xl font-extrabold">GRAPHIC DESIGN</h1>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Runningtext
