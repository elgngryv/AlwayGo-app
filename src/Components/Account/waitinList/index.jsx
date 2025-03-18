import React from "react";
import img from "../../../assets/products/p1.png";

const productsData = [
  {
    id: "720",
    title: "Comb hair dryer BRAUN AS 720",
    price: 149.0,
    currency: "$",
    rating: 4,
    reviewCount: 21,
    imageUrl: img,
    isInStock: true,
    category: "Electronic",
  },
  {
    id: "721",
    title: "Hair straightener PHILIPS HP8321",
    price: 89.99,
    currency: "$",
    rating: 5,
    reviewCount: 34,
    imageUrl: img,
    isInStock: true,
    category: "Electronic",
  },
  {
    id: "722",
    title: "Curling iron REMINGTON CI91X1",
    price: 129.5,
    currency: "$",
    rating: 3,
    reviewCount: 17,
    imageUrl: img,
    isInStock: false,
    category: "Electronic",
  },
  {
    id: "723",
    title: "Hair clipper WAHL 79600-3301",
    price: 59.95,
    currency: "$",
    rating: 4,
    reviewCount: 42,
    imageUrl: img,
    isInStock: true,
    category: "Electronic",
  },
  {
    id: "724",
    title: "Beard trimmer BRAUN BT7240",
    price: 79.99,
    currency: "$",
    rating: 5,
    reviewCount: 28,
    imageUrl: img,
    isInStock: true,
    category: "Electronic",
  },
  {
    id: "725",
    title: "Hair dryer DYSON Supersonic",
    price: 399.0,
    currency: "$",
    rating: 5,
    reviewCount: 56,
    imageUrl: img,
    isInStock: true,
    category: "Electronic",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#F6F6F6] rounded-[8px] overflow-hidden shadow-sm">
      <div className="relative">
        <button className="absolute top-2 right-2 p-1 z-10">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={product.imageUrl} alt={product.title} className="w-full h-64 object-contain p-4" />
      </div>
      <div className="p-4">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-1 text-sm text-gray-600">{product.reviewCount} reviews</span>
        </div>
        <h3 className="mt-2 text-[#000000DE] font-medium text-[16px]">{product.title}</h3>
        <p className="mt-2 text-[22px] font-semibold text-[#000000DE]">
          {product.currency}
          {product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

const WaitingProd = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaitingProd;
