import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../Assests/images/slider-image-1.jpeg"
import slide2 from "../../Assests/images/slider-image-2.jpeg"
import slide3 from "../../Assests/images/slider-image-3.jpeg"
import banner1 from "../../Assests/images/grocery-banner.png"
import banner2 from "../../Assests/images/grocery-banner-2.jpeg"
export default function MainSlider(){
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <>
    <div className="row gx-0">
        <div className="col-md-8">
            <Slider {...settings}>
                <img height={350} className="w-100" src={slide1} alt="" />
                <img height={350} className="w-100" src={slide2} alt="" />
                <img height={350} className="w-100" src={slide3} alt="" />
            </Slider>
        </div>
        <div className="col-md-4">
            <img height={175} className="w-100" src={banner1} alt=""  />
            <img height={175} className="w-100" src={banner2} alt=""  />
        </div>
    </div>

    </>
}