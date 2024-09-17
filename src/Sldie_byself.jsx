import { useState } from 'react';
import Slider from 'react-slick';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.png';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.png';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight  } from "react-icons/md";
const items = [image1, image2, image3, image4];

function Slider_me() {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <MdKeyboardArrowRight size={"30px"} color='#A858EE'/>
            </div>
        );
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <MdKeyboardArrowLeft size={'30px'} color='#A858EE'/>
            </div>
        );
    }
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,              
        centerMode: true,             
        centerPadding:0, 
        autoplay:true,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };


    return (
        <div className="App">
            <Slider {...settings}>
                {items.map((image, idx) => (
                    <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={image} alt={`Slide ${idx}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Slider_me;
