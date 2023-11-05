import Image from "next/image";
import React from "react";
import { Carousel } from "antd";

import "../../styles/client.module.css";

const OurClient = () => {
  const settings = {
    className: "mt-5 text-white text-left",
    dotPosition: "bottom",
    autoplay: true,

    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint (max-width: 767px)
        settings: {
          slidesToShow: 1, // Show one item at a time on mobile
          slidesToScroll: 1, // Scroll one item at a time on mobile
        },
      },
      {
        breakpoint: 992, // Tablet breakpoint (max-width: 991px)
        settings: {
          slidesToShow: 2, // Show two items at a time on tablets
          slidesToScroll: 1, // Scroll one item at a time on tablets
        },
      },
      {
        breakpoint: 1200, // Larger screens breakpoint (min-width: 992px)
        settings: {
          slidesToShow: 3, // Show three items at a time on larger screens
          slidesToScroll: 1, // Scroll one item at a time on larger screens
        },
      },
    ],
  };

  return (
    <section className='body py-3'>
      <h2>Our Client</h2>

      <div className='gtco-testimonials'>
        <div className='owl-carousel owl-carousel1 owl-theme'>
          <Carousel
            className='item text-left flex justify-center items-center  h-full mx-auto'
            {...settings}
          >
            <div
              style={{ marginRight: "10px" }}
              className='text-white   text-left max-w-[280px] mx-auto lg:max-w-[320px] '
            >
              <div className='card max-w-[260px] lg:max-w-[320px] text-left'>
                <Image
                  loading='lazy'
                  width={"350"}
                  height={"350"}
                  className='card-img-top'
                  src='https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300'
                  alt=''
                />
                <div className='card-body mt-3'>
                  <h5 className='font-semibold text-lg text-[#01b0f8]'>
                    Ronne Galle <br />
                    <span className='text-[#666666]'> Project Manager </span>
                  </h5>
                  <p className='card-text text-[#c5c5ce]'>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginRight: "10px" }}>
              <div className='card max-w-[260px] lg:max-w-[320px] text-left'>
                <Image
                  loading='lazy'
                  width={"350"}
                  height={"350"}
                  className='card-img-top'
                  src='https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301'
                  alt=''
                />

                <div className='card-body mt-3'>
                  <h5 className='font-semibold text-lg text-[#01b0f8]'>
                    Missy Limana
                    <br />
                    <span className='text-[#666666]'> Engineer </span>
                  </h5>
                  <p className='card-text text-[#c5c5ce]'>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginRight: "10px" }}>
              <div className='card max-w-[260px] lg:max-w-[320px] text-left'>
                <Image
                  loading='lazy'
                  width={"350"}
                  height={"350"}
                  className='card-img-top'
                  src='https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302'
                  alt=''
                />
                <div className='card-body mt-3'>
                  <h5 className='font-semibold text-lg text-[#01b0f8]'>
                    Martha Brown
                    <br />
                    <span className='text-[#666666]'> Project Manager </span>
                  </h5>
                  <p className='card-text text-[#c5c5ce]'>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginRight: "10px" }}>
              <div className='card max-w-[260px] lg:max-w-[320px] text-left'>
                <Image
                  loading='lazy'
                  width={"350"}
                  height={"350"}
                  className='card-img-top'
                  src='https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303'
                  alt=''
                />
                <div className='card-body mt-3'>
                  <h5 className='font-semibold text-lg text-[#01b0f8]'>
                    Hanna Lisem
                    <br />
                    <span className='text-[#666666]'> Project Manager </span>
                  </h5>
                  <p className='card-text text-[#c5c5ce]'>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurClient;