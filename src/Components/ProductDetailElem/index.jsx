import React, { useState } from "react";
import right from "../../assets/Icona.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import p1 from "../../assets/products/p1.png";
import p3 from "../../assets/products/p3.png";
import p5 from "../../assets/products/p5.png";
import p6 from "../../assets/products/p6.png";
import SectionHeader from "../Home/SectionHeader";
import CardXs from "../Card/card-xs";
import Features from "../Features";
import Overview from "../OverView";

const ProductDetailElem = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showOverview, setShowOverView] = useState(false);

  const products = [
    {
      reviewsCount: 11,
      starsCount: 3,
      name: "Comb hair dryer BRAUN AS 720",
      price: 49.0,
      img: p1,
    },
    {
      reviewsCount: 43,
      starsCount: 4,
      name: "Comb hair dryer BRAUN AS 320",
      price: 79.0,
      img: p3,
    },
    {
      reviewsCount: 75,
      starsCount: 5,
      name: "Iphone 16 Pro Max 256 GB Black Titanium",
      price: 1500.0,
      img: p6,
    },
    {
      reviewsCount: 41,
      starsCount: 3,
      name: "Comb hair dryer BRAUN AS 720",
      price: 29.0,
      img: p5,
    },
    {
      reviewsCount: 41,
      starsCount: 3,
      name: "Comb hair dryer BRAUN AS 720",
      price: 39.0,
      img: p1,
    },
  ];

  return (
    <div className="container max-w-[1360px] sf-font mx-auto">
      <div>
        {/* Header */}
        <div>
          <div className="flex gap-4">
            <h2
              className={`font-medium text-base leading-[24px] cursor-pointer ${
                showOverview
                  ? "text-[#45658B] border-b-2 border-[#45658B]"
                  : "text-[#000000DE]"
              }`}
              onClick={() => setShowOverView(!showOverview)}>
              Overview
            </h2>
            <h2
              className={`font-medium text-base leading-[24px] cursor-pointer ${
                showFeatures
                  ? "text-[#45658B] border-b-2 border-[#45658B]"
                  : "text-[#000000DE]"
              }`}
              onClick={() => setShowFeatures(!showFeatures)}>
              Features
            </h2>
            <h2 className="font-medium text-base leading-[24px] text-[#000000DE] cursor-pointer">
              Reviews
            </h2>
            <h2 className="font-medium text-base leading-[24px] text-[#000000DE] cursor-pointer">
              Photos
            </h2>
          </div>

          {/* Features bölməsi klik edildikdə görünəcək */}
          {showFeatures && <Features />}
          {showOverview && <Overview />}
        </div>
        {/* Footer */}
        <div className="mt-[100px] mb-[100px]">
          <div>
            <section className="mt-24">
              <SectionHeader title="Last viewed" />
              <div>
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={24}
                  freeMode={true}
                  modules={[FreeMode]}
                  className="mySwiper">
                  {products.map((product, index) => (
                    <SwiperSlide key={index}>
                      <CardXs data={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          </div>
          <div>
            <section className="mt-24">
              <SectionHeader title="Like This? Check These Out" />
              <div>
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={24}
                  freeMode={true}
                  modules={[FreeMode]}
                  className="mySwiper">
                  {products.map((product, index) => (
                    <SwiperSlide key={index}>
                      <CardXs data={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          </div>
        </div>
        {/* Footer */}
      </div>
    </div>
  );
};

export default ProductDetailElem;
