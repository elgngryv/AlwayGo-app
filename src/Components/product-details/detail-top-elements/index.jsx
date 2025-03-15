import React from 'react'
import DetailBuyNowBtn from "./DetailBuyNowBtn";
import DetailAddToCartBtn from "./DetailAddToCartBtn";
import DetailProductTitle from "./DetailProductTitle";
import StarRating from "@/components/cards/StarRating";
import DetailProductCode from "./DetailProductCode";
import DetailProductPrice from "./DetailProductPrice";
import DetailProductReviewCount from "./DetailProductReviewCount";
import DetailCreditInfo from "./DetailCreditInfo";
import DetailBasketCount from "./DetailBasketCount";
import DetailProductStockInfo from "./DetailProductStockInfo";
import DetailFavoriteBtn from "./DetailFavoriteBtn";
import DetailProductColors from './DetailProductColors';
import DetailProductImages from './DetailProductImages';

import productImage from "@/assets/products/p7.png";

const DetailTopElements = () => {
  const productData = {
    name: 'Hair dryer Dyson HD07 NICKEL PINK',
    price: 150.00,
    images: [productImage],
    colors: [productImage, productImage, productImage],
    ratingStars: 4,
    reviwesCount: 120,
    code: 14657,
    stock: 210
  }

  return (
    <section className="py-8 md:pt-10 md:pb-[92px] antialiased">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <DetailProductImages images={productData.images}/>
        <div className="mt-6 sm:mt-8 lg:mt-0">
          <div className="flex justify-between">
            <DetailProductTitle title={productData.name}/>
            <DetailFavoriteBtn />
          </div>
          <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <StarRating starsCount={productData.ratingStars} md={true} />
              <DetailProductReviewCount reviewCount={productData.reviwesCount}/>
            </div>
            <DetailProductCode code={productData.code}/>
          </div>
          <div className="flex justify-between mt-[60px] mb-10">
            <DetailProductPrice price={productData.price}/>
            <DetailCreditInfo />
          </div>
          <DetailProductColors colors={productData.colors}/>
          <div className="flex items-center gap-6 mb-10">
            <DetailBasketCount />
            <DetailProductStockInfo stockCount={productData.stock}/>
          </div>
          <div className="flex items-center gap-6">
            <DetailBuyNowBtn />
            <DetailAddToCartBtn />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailTopElements