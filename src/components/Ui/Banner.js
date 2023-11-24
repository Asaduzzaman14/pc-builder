import React from "react";
import img1 from "@/assets/pc-banner-1.jpg";
import img2 from "@/assets/pc-banner-2.jpg";
import img3 from "@/assets/pc-banner-3.jpg";
import img from "@/assets/img-2.jpg";
import Image from "next/image";
import { Carousel } from "antd";

const Banner = () => {
  const contentStyle = {
    // height: "160px",
    color: "#fff",
    // lineHeight: "160px",
    textAlign: "center",
    // background: "#364d79",
    width: "1200px",
  };
  const settings = {
    className: "mt-5 text-white text-left",
    autoplay: true,
    dots: false,
    speed: 800,
  };

  return (
    <div>
      <div style={contentStyle}>
        <Image
          className='w-full'
          alt='aa'
          // width={"500"}
          height={500}
          src={img2}
        />
      </div>
      {/* <Carousel {...settings}>
        <div>
          <div style={contentStyle}>
            <Image
              className='w-full'
              alt='aa'
              // width={"500"}
              height={500}
              src={img2}
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image alt='aa' width={"1200"} height={500} src={img3} />
          </div>
        </div>
      </Carousel> */}
      {/* <Image src={banner} height={500} width={'100%'} alt="" /> */}
    </div>
  );
};

export default Banner;
