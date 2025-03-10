import React from "react";
import Phone from "../../../assets/Phone.svg";
import Whatsapp from "../../../assets/WhatsApp.svg";
import Facebook from "../../../assets/Facebook1.svg";
import Instagram from "../../../assets/Instagram2.svg";
import Youtube from "../../../assets/Youtube3.svg";
import Telegram from "../../../assets/Telegram4.svg";

const Footer = () => {
  return (
    <div className="container max-w-[1360px] px-10 mx-auto mt-[43px] p-10 sf-font ">
      <div className="h-px bg-black mb-10"></div>
      <div className="flex justify-between">
        <div>
          <div className="mb-8">
            <h2 className="font-medium text-[#000000DE] text-2xl leading-[32px] ">
              Help
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-thin text-base leading-[24px] ">
              Delivery and payment{" "}
            </p>
            <p className="font-thin text-base leading-[24px] ">Credit</p>
            <p className="font-thin text-base leading-[24px] ">Warranty</p>
            <p className="font-thin text-base leading-[24px] ">
              Return of goods
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Service centers
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Questions and answers
            </p>
            <p className="font-thin text-base leading-[24px] ">Track order</p>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="font-medium text-[#000000DE] text-2xl leading-[32px] ">
              Information
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-thin text-base leading-[24px] ">
              Delivery and payment{" "}
            </p>
            <p className="font-thin text-base leading-[24px] ">About us</p>
            <p className="font-thin text-base leading-[24px] ">
              Shop addresses
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Terms of use of the site
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Vacancies Contacts
            </p>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="font-medium text-[#000000DE] text-2xl leading-[32px] ">
              Services
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-thin text-base leading-[24px] ">Bonus account</p>
            <p className="font-thin text-base leading-[24px] ">Premium</p>
            <p className="font-thin text-base leading-[24px] ">
              Gift certificates
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Money from card to card
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Tours and recreation
            </p>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="font-medium text-[#000000DE] text-2xl leading-[32px] ">
              Partners
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-thin text-base leading-[24px] ">
              Sell on AlwayGo
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Cooperation with us
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Logo and style guide
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Return of goods
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Service centers
            </p>
            <p className="font-thin text-base leading-[24px] ">
              Questions and answers
            </p>
            <p className="font-thin text-base leading-[24px] ">Track order</p>
          </div>
        </div>
        <div>
          <div className="font-medium mb-8 text-[#000000DE] text-2xl leading-[32px] ">
            <h2>Call center</h2>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-thin text-base leading-[24px]">
                info@alwaygo.az
              </h2>
            </div>
            <div className="flex gap-8">
              <img src={Phone} alt="" />
              <p className="font-medium text-base leading-[24px] ">
                +994 50 111 11 11
              </p>
            </div>
            <div className="flex gap-8">
              <img src={Whatsapp} alt="" />
              <p className="font-medium text-base leading-[24px]">
                +994 50 111 11 11
              </p>
            </div>
          </div>
          <div className="mt-[68px]">
            <div>
              <h2 className="font-medium mb-8 text-[#000000DE] text-2xl leading-[32px] ">Follow Us</h2>
            </div>
            <div className="flex gap-4">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Youtube} alt="" />
              <img src={Telegram} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-black mt-10"></div>
    </div>
  );
};

export default Footer;
