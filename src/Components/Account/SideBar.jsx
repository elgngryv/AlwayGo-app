import React from "react";
import { NavLink } from "react-router-dom";
import user from "../../assets/icons/user.png";
import card from "../../assets/icons/card.png";
import star from "../../assets/icons/star.png";
import heart from "../../assets/icons/heart.png";
import offer from "../../assets/icons/offer.png";
import review from "../../assets/icons/review.png";
import eye from "../../assets/icons/eye.png";
import coupon from "../../assets/icons/cuopon.png";
import exit from "../../assets/icons/exit.png";

const menuItems = [
  { icon: user, text: "Personal data", path: "/account/personal-data" },
  { icon: card, text: "My cards", path: "/account/my-cards" },
  { icon: star, text: "Wishlists", path: "/account/wishlist" },
  { icon: heart, text: "Waiting list", path: "/account/waiting-list" },
  { icon: offer, text: "My offers", path: "/account/my-offers" },
  { icon: review, text: "Reviews", path: "/account/viewed-products" },
  { icon: eye, text: "My Coupons", path: "/account/my-coupons" },
  { icon: coupon, text: "Seller Messages", path: "/account/seller-messages" },
  { icon: exit, text: "Exit", path: "/logout" },
];

const SideBar = () => {
  return (
    <aside className="w-full md:w-[323px] md:mr-[24px]">
      <h1 className="mt-6 text-[#000000DE] text-3xl font-normal hidden md:block">My Account</h1>
      <div className="mt-6 flex flex-col w-full max-w-full md:max-w-[322px]">
        {menuItems.map(({ icon, text, path }, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `border-t-2 w-full border-black py-6 flex items-center gap-4 ${
                isActive ? "text-[#45658B]" : "text-[#000000DE]"
              }`
            }
          >
            <img className="w-5 h-5 text-[#1D1D1D]" src={icon} alt={text} />
            <p className="font-normal text-lg">{text}</p>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
