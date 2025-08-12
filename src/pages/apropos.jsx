import React, { useRef } from "react";
import demonSlayer from "../images/demon_slayer.webp";
import jujutsu from "../images/jujutsu.webp";
import naruto from "../images/naruto.png";
import myhero from "../images/myhero.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Apropos() {
  // Déclarations nécessaires
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <div className="appropos">
        <div className="container-fluid justify-content-center align-items-center">
          <div className="img_slider">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={demonSlayer} alt="" srcset="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={jujutsu} alt="" srcset="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={myhero} alt="" srcset="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={naruto} alt="" srcset="" />
              </SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
