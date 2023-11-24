import React from "react";
import img1 from "@/assets/pc-banner-1.jpg";
import img2 from "../../assets/pc-banner-2.jpg";
import img3 from "../../assets/pc-banner-3.jpg";
import img5 from "@/assets/img-2.jpg";
import Image from "next/image";
import { Carousel } from "antd";

const Banner = () => {
  const contentStyle = {
    maxHeight: "100vh",
  };
  const settings = {
    className: "mt-2 lg:mt-4 text-white text-left",
    autoplay: true,
    dots: false,
    speed: 800,
  };

  return (
    <div>
      <Carousel {...settings} style={contentStyle}>
        <div style={contentStyle}>
          <div>
            <Image
              src={img1}
              alt='Your Image Alt Text'
              width={350}
              height={200}
              layout='responsive'
              className='max-h-screen'
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              src={img3}
              alt='Your Image Alt Text'
              width={350}
              height={200}
              layout='responsive'
              className='max-h-screen'
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
