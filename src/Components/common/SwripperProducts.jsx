import React from 'react';
import "swiper/css/free-mode";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import SectionHeader from "./SectionHeader";
import CardXs from "@/components/cards/card-xs";
import CardSm from "@/components/cards/card-sm";
import CardMd from "@/components/cards/card-md";

const SwripperProducts = ({ data, cardType, title }) => {
    const cards = [
        {
            card: CardXs,
            type: 'xs'
        },
        {
            card: CardSm,
            type: 'sm'
        },
        {
            card: CardMd,
            type: 'md'
        }]
    return (
        <section className="mt-24 products-swipper">
            <SectionHeader title={title} />
            <Swiper slidesPerView={"auto"} spaceBetween={24} freeMode={true} modules={[FreeMode]} className="mySwiper">
                {data?.map((d, i) => {
                    const c = cards.find((card) => card.type == cardType);
                    return <SwiperSlide>
                        <c.card data={d} key={i} />
                    </SwiperSlide>
                })}
            </Swiper>
        </section>
    )
}

export default SwripperProducts