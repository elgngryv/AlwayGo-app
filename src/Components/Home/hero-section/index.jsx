import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import HeroSlide from "./HeroSlide";

import Dyson from "@/assets/Dyson.svg";
import p2 from '@/assets/products/p2.png'
import p6 from '@/assets/products/p6.png'

const HeroSection = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  const slidesData = [
    {
      name: 'Dyson hair dryer at a super price',
      img: Dyson,
      fromPrice: 1299
    },
    {
      name: 'MacBook Air 13.6" Apple M3 (8C CPU/8C GPU)',
      img: p2,
      fromPrice: 2599
    },
    {
      name: 'Iphone 16 Pro Max 256 GB Black Titanium',
      img: p6,
      fromPrice: 1650
    }
  ]

  return (
    <div className="mt-10">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          slidesData.map((slide, i) => (
            <SwiperSlide>
              <HeroSlide data={slide}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default HeroSection;
