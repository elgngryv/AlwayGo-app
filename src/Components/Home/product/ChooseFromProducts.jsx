import React from "react";
import SectionHeader from "../SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import CardMd from "../../Card/card-md";

import p2 from "../../../assets/products/p2.png";
import p4 from "../../../assets/products/p4.png";
import p6 from "../../../assets/products/p6.png";

const ChooseFromProducts = () => {
  const products = [
    {
      reviewsCount: 21,
      starsCount: 4,
      name: 'MacBook Air 13.6" Apple M3 (8C CPU/8C GPU)',
      price: 149.0,
      img: p2,
    },
    {
      reviewsCount: 13,
      starsCount: 3,
      name: "Apple iPhone 20W USB-C Power Adapter",
      price: 40.0,
      img: p4,
    },
    {
      reviewsCount: 45,
      starsCount: 5,
      name: "Iphone 16 Pro Max 256 GB Black Titanium",
      price: 1500.0,
      img: p6,
    },
  ];
  return (
    <section className="mt-24">
      <SectionHeader title="More products to choose from" />
      <Swiper slidesPerView={"auto"} spaceBetween={24} freeMode={true} modules={[FreeMode]} className="mySwiper">
        {products.map((product, index) => (
          <SwiperSlide>
            <CardMd data={product} key={index}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ChooseFromProducts;
