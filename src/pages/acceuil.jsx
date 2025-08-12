import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./acceuil.css";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
export default function Acceuil() {
  const swiperRef = useRef(null);
  return (
    <>
      <section className="hero justify-content-center align-items-center">
        <div className="container justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-content">
                <div className="ready">
                  {/* Lettre R */}
                  <div className="letter R">
                    <div
                      className="block"
                      style={{
                        "--index": 0,
                        "--angle": 0,
                        "--sign": 1,
                        gridArea: "a1",
                      }}
                    >
                      <div className="face face-1"></div>
                      <div className="face face-2"></div>
                      <div className="face face-3"></div>
                    </div>

                    <div
                      className="block"
                      style={{
                        "--index": 1,
                        "--angle": 147,
                        "--sign": -1,
                        gridArea: "a2",
                      }}
                    >
                      <div className="face face-1"></div>
                      <div className="face face-2"></div>
                      <div className="face face-3"></div>
                    </div>
                  </div>

                  {/* Lettre E */}
                  <div className="letter E">
                    <div
                      className="block"
                      style={{
                        "--index": 11,
                        "--angle": 0,
                        "--sign": 1,
                        gridArea: "a1",
                      }}
                    >
                      <div className="face face-1"></div>
                      <div className="face face-2"></div>
                      <div className="face face-3"></div>
                    </div>
                  </div>

                  {/* Lettre A */}
                  <div className="letter A">
                    <div
                      className="block"
                      style={{
                        "--index": 22,
                        "--angle": 0,
                        "--sign": 1,
                        gridArea: "a1",
                      }}
                    >
                      <div className="face face-1"></div>
                      <div className="face face-2"></div>
                      <div className="face face-3"></div>
                    </div>
                  </div>

                  {/* Lettre D */}
                  <div className="letter D"></div>

                  {/* Lettre Y */}
                  <div className="letter Y"></div>
                </div>

                {/* <h1>MovieScope</h1>
                <p>
                  Découvrez les meilleurs films et séries en un seul endroit.
                </p> */}
              </div>
            </div>
            <div className="col-md-6">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false, // continue même après interaction
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onMouseEnter={() => {
                  if (swiperRef.current?.autoplay) {
                    swiperRef.current.autoplay.stop();
                  }
                }}
                onMouseLeave={() => {
                  if (swiperRef.current?.autoplay) {
                    swiperRef.current.autoplay.start();
                  }
                }}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
