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
  let t = -1;

  function renderBlocks(count, angleMultiplier, signFlip = true) {
    let blocks = [];
    for (let n = 0; n < count; n++) {
      t++;
      const angle = (angleMultiplier * t) % 360;
      const sign = signFlip ? (t % 2 ? 1 : -1) : t % 2 ? -1 : 1;
      blocks.push(
        <div
          key={t}
          className="block"
          style={{
            "--index": t,
            "--angle": angle,
            "--sign": sign,
            gridArea: "a" + (n + 1),
          }}
        >
          <div className="face face-1"></div>
          <div className="face face-2"></div>
          <div className="face face-3"></div>
        </div>
      );
    }
    return blocks;
  }

  return (
    <>
      <section className="hero justify-content-center align-items-center">
        <div className="container justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-content">
                <div className="ready">
                  <div className="letter R">{renderBlocks(11, 147, true)}</div>
                  <div className="letter E">
                    {renderBlocks(11, -147, false)}
                  </div>
                  <div className="letter A">{renderBlocks(10, 147, true)}</div>
                  <div className="letter D">
                    {renderBlocks(11, -147, false)}
                  </div>
                  <div className="letter Y">{renderBlocks(8, 147, true)}</div>
                </div>
              </div>
            </div>
            <div className="siper-slide col-md-6">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false, // continue même après interaction
                }}
                // onSwiper={(swiper) => {
                //   swiperRef.current = swiper;
                // }}
                // onMouseEnter={() => {
                //   if (swiperRef.current?.autoplay) {
                //     swiperRef.current.autoplay.stop();
                //   }
                // }}
                // onMouseLeave={() => {
                //   if (swiperRef.current?.autoplay) {
                //     swiperRef.current.autoplay.start();
                //   }
                // }}
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
      <section>
        <h1>Acceuil</h1>
      </section>
    </>
  );
}
