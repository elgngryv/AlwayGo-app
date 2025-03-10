import React from 'react'
import SectionHeader from '../SectionHeader'
import CardXs from '../../Card/card-xs';

import p1 from "../../../assets/products/p1.png";
import p3 from "../../../assets/products/p3.png";
import p5 from "../../../assets/products/p5.png";
import p6 from "../../../assets/products/p6.png";

const TopSalesProducts = () => {
  const products = [
    {
      reviewsCount: 11,
      starsCount: 3,
      name: 'Comb hair dryer BRAUN AS 720',
      price: 49.00,
      img: p1,
    },
    {
      reviewsCount: 43,
      starsCount: 4,
      name: "Comb hair dryer BRAUN AS 320",
      price: 79.00,
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
      name: 'Comb hair dryer BRAUN AS 720',
      price: 29.00,
      img: p5,
    },
    {
      reviewsCount: 41,
      starsCount: 3,
      name: 'Comb hair dryer BRAUN AS 720',
      price: 39.00,
      img: p1,
    },
    {
      reviewsCount: 11,
      starsCount: 3,
      name: 'Comb hair dryer BRAUN AS 720',
      price: 49.00,
      img: p1,
    },
    {
      reviewsCount: 43,
      starsCount: 4,
      name: "Comb hair dryer BRAUN AS 320",
      price: 79.00,
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
      name: 'Comb hair dryer BRAUN AS 720',
      price: 29.00,
      img: p5,
    },
    {
      reviewsCount: 41,
      starsCount: 3,
      name: 'Comb hair dryer BRAUN AS 720',
      price: 39.00,
      img: p1,
    },
    {
      reviewsCount: 43,
      starsCount: 4,
      name: "Comb hair dryer BRAUN AS 320",
      price: 79.00,
      img: p3,
    },
    {
      reviewsCount: 75,
      starsCount: 5,
      name: "Iphone 16 Pro Max 256 GB Black Titanium",
      price: 1500.0,
      img: p6,
    },
  ];
  return (
    <section className='my-24'>
      <SectionHeader title="Top sales" />
      <div className='flex flex-wrap justify-center gap-6'>
        {
          products.map((product, index) => (
            <CardXs data={product} key={index} />
          ))
        }
      </div>
    </section>
  )
}

export default TopSalesProducts