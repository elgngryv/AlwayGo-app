import React from 'react';
import "swiper/css/free-mode";
import "swiper/css";
import Section from '../../Components/Home/Section';
import FreeDeliveryBox from '../../Components/Home/FreeDeliveryBox';
import ChooseFromProducts from '../../Components/Home/product/ChooseFromProducts';
import PopularProducts from '../../Components/Home/product/PopularProducts';
import AddedWishlistProducts from '../../Components/Home/product/AddedWishlistProducts';
import TopSalesProducts from '../../Components/Home/product/TopSalesProducts';
import NewProducts from '../../Components/Home/product/NewProducts';
import OnlyInAlWayGoProducts from '../../Components/Home/product/OnlyInAlWayGoProducts';

const Home = () => {
  return (
    <div className='container max-w-[1360px] mx-auto'>
      <Section />
      <PopularProducts />
      <ChooseFromProducts />
      <NewProducts />
      <FreeDeliveryBox />
      <AddedWishlistProducts />
      <OnlyInAlWayGoProducts />
      <TopSalesProducts />
    </div>
  );
};

export default Home;