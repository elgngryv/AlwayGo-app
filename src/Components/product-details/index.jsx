import React from "react";
import ProductDetailTabs from "./product-detail-tabs";
import DetailTopElements from "./detail-top-elements";
import ProductList from "./product-list";


const ProductDetails = () => {
  return (
    <div className="container max-w-[1360px] sf-font mx-auto mb-14">
      <DetailTopElements/>
      <ProductDetailTabs />
      <ProductList/>
    </div>
  );
};

export default ProductDetails;
