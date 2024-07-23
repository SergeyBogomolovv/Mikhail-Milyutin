import React from "react";
import { Carousel, Image } from "antd";
import { Link } from "react-router-dom";
const CarouselMain: React.FC = () => {
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      <Link to="/Жемчуг">
        <img
          loading="lazy"
          src="/alicafon1.jpg"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Жемчуг">
        <img
          loading="lazy"
          src="/alicafon.jpg"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Жемчуг">
        <img
          loading="lazy"
          src="/alicafon2.JPG"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Жемчуг">
        <img
          loading="lazy"
          src="/alicafon3.JPG"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Жемчуг">
        <Image
          loading="lazy"
          src="/alicafon4.JPG"
          alt=""
          className="w-full object-cover"
        />
      </Link>
    </Carousel>
  );
};

export default CarouselMain;
