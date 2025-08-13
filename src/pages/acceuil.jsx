import React, { useRef, useState } from "react";
// img 
import naruto2 from "../images/hero/naruto_new.jpg";
import preason_break from "../images/hero/preson_break.jpeg"
import squid_game from "../images/hero/squid_gam.png"
import one_piece from "../images/hero/one_piec.jpg"
import film from "../images/hero/film.png"
import best_movie from "../images/hero/Netflix-films-top-10_99.webp"
import demon_slayer1 from "../images/hero/demon_slaye1.jpg"
import sonic from "../images/hero/sonic.webp"
import spider_man from "../images/hero/spider_man.webp"
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
                className="mySwiper"
              >
                <SwiperSlide><img src={preason_break} alt="" /></SwiperSlide>
                <SwiperSlide><img src={naruto2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={squid_game} alt="" /></SwiperSlide>
                <SwiperSlide><img src={film} alt="" /></SwiperSlide>
                <SwiperSlide><img src={one_piece} alt="" /></SwiperSlide>
                <SwiperSlide><img src={best_movie} alt="" /></SwiperSlide>
                <SwiperSlide><img src={demon_slayer1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sonic} alt="" /></SwiperSlide>
                <SwiperSlide><img src={spider_man} alt="" /></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
