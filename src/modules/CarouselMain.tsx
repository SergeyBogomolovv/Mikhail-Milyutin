import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

const CarouselMain: React.FC = () => {
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      <Link to="/Алиса в стране чудес">
        <img
          loading="lazy"
          src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon1.jpg"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Алиса в стране чудес">
        <img
          loading="lazy"
          src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon.jpg"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Алиса в стране чудес">
        <img
          loading="lazy"
          src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon2.JPG"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Алиса в стране чудес">
        <img
          loading="lazy"
          src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon3.JPG"
          alt=""
          className="w-full object-cover"
        />
      </Link>
      <Link to="/Алиса в стране чудес">
        <img
          loading="lazy"
          src="https://storage.yandexcloud.net/mikhail-milutin/slider/alicafon4.JPG"
          alt=""
          className="w-full object-cover"
        />
      </Link>
    </Carousel>
  );
};

export default CarouselMain;
