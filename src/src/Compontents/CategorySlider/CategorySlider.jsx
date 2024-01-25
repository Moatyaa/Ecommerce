import axios from "axios";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategorySlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  function getCat() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  let { isLoading, data } = useQuery("getCat", getCat);

  return (
    <>
      {data?.data.data ? (
        <Slider {...settings}>
          {data?.data.data.map((cat , index) => (
            <img key={index} className="w-100" height={150} src={cat.image}></img>
          ))}
        </Slider>
      ) : (
        ""
      )}
    </>
  );
}
