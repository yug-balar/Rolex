import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

function Carousel() {
  const images = [
    { src: "/images/01.jpg", alt: "Image 1" },
    { src: "/images/02.jpg", alt: "Image 2" },
    { src: "/images/03.jpg", alt: "Image 3" },
    { src: "/images/04.jpg", alt: "Image 4" },
    { src: "/images/05.jpg", alt: "Image 4" },
    { src: "/images/06.jpg", alt: "Image 4" },
    { src: "/images/07.jpg", alt: "Image 4" },
    { src: "/images/08.jpg", alt: "Image 4" },
    { src: "/images/09.jpg", alt: "Image 4" },
    { src: "/images/10.jpg", alt: "Image 4" },
    { src: "/images/11.jpg", alt: "Image 4" },
    { src: "/images/12.jpg", alt: "Image 4" },
    { src: "/images/13.jpg", alt: "Image 4" },
    { src: "/images/14.jpg", alt: "Image 4" },
  ];

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,


  };

  return (
    <Slider
      {...settings}
    >
      {images.map(function (value, index) {
        return <Slide key={index} src={value.src} alt={value.alt} />;
      })}

    </Slider>
  );
}

export default Carousel;
