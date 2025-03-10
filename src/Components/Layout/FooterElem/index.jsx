import React from "react";
import Logo from "../../../assets/LOGO.svg";
import GooglePlay from "../../../assets/GooglePlay.svg";
import Apple from "../../../assets/Apple.svg";
import Vector from "../../../assets/Vector 4.svg"

const FooterElem = () => {
  return (
    <div className="container max-w-[1360px] px-10 pb-10 mx-auto sf-font">
      <div className="flex justify-between">
        <div className="flex items-center gap-[50px]">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-12" />
            <h2 className="font-bold text-[46px] leading-[56px] text-[#314863]">
              AlWayGo
            </h2>
          </div>
          <div>
            <h2 className="font-medium text-[10px] leading-[16px] text-[#00000099]">Copyright © 2025 AlWayGo. All rights reserved.</h2>
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <div>
            <h2 className="font-normal text-[10px] leading-[16px] text-[#000000DE]">Install our applications</h2>
          </div>
          <div>
            <img src={Vector} alt="" />
          </div>
          <div className="text-white flex gap-2">
            <div className="w-[138px] items-center p-[6px] gap-2 flex h-[48px] bg-[#1D1D1D] rounded-md">
              <img src={GooglePlay} alt="Google Play" />
              <div>
                <h2 className="font-normal text-[10px] leading-[16px]">
                  Download on the
                </h2>
                <p className="font-medium text-sm leading-[20px]">
                  Google Play
                </p>
              </div>
            </div>
            <div className="w-[138px] items-center p-[6px] gap-2 flex h-[48px] bg-[#1D1D1D] rounded-md">
              <img src={Apple} alt="Google Play" />
              <div>
                <h2 className="font-normal text-[10px] leading-[16px]">
                  Download on the
                </h2>
                <p className="font-medium text-sm leading-[20px]">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterElem;
