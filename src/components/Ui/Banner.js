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
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <Image alt='aa' width={"cover"} height={500} src={img2} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image alt='aa' width={"1200px"} height={500} src={img3} />
          </div>
        </div>
      </Carousel>
      {/* <Image src={banner} height={500} width={'100%'} alt="" /> */}
    </div>
  );
};

export default Banner;
