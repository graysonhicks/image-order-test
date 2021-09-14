import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/css";
SwiperCore.use([Pagination]);

const Testimonials = () => {
  let swiper;

  const testimonials = [
    {
      image:
        "https://images.pexels.com/photos/6774693/pexels-photo-6774693.jpeg",
      name: "Two women"
    },
    {
      image:
        "https://images.pexels.com/photos/4992802/pexels-photo-4992802.jpeg",
      name: "Tower"
    },
    {
      image:
        "https://images.pexels.com/photos/6151194/pexels-photo-6151194.jpeg",
      name: "Balcony"
    },
    {
      image:
        "https://images.pexels.com/photos/7499780/pexels-photo-7499780.jpeg",
      name: "Flower"
    },
    {
      image:
        "https://images.pexels.com/photos/5721879/pexels-photo-5721879.jpeg",
      name: "TV"
    },
    {
      image:
        "https://images.pexels.com/photos/5721879/pexels-photo-5721879.jpeg",
      name: "Another TV"
    }
  ];

  return (
    <>
      <Swiper
        slidesPerGroup={1}
        loopAdditionalSlides={3}
        onSwiper={(e) => (swiper = e)}
        loop
        breakpoints={{
          1195: {
            slidesPerView: 3,
            spaceBetween: 70
          },

          900: {
            slidesPerView: 3,
            spaceBetween: 50
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },

          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }}
      >
        {testimonials.map((r, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                style={{
                  maxHeight: "500px",
                  width: "100%",
                  objectFit: "cover"
                }}
                src={r.image}
                alt=""
              />
              <div>{r.name}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonials;
