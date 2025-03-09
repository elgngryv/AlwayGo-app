import React, { useState } from "react";
import Apple from "../../assets/Apple2.svg";
import Google from "../../assets/Google2.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container max-w-[668px] mx-auto sf-font">
      <div className="w-[668px] mt-[36px] mb-[432px]">
        <div className="mb-[36px] flex flex-col gap-3">
          <h2 className="font-medium text-[34px] leading-[44px]">
            Forgot Your Password?
          </h2>
          <p className="font-normal text-lg leading-[24px] text-[#00000099]">
            Don't worry! Enter your email, and we’ll help you reset it.
          </p>
        </div>
        <div className="bg-[#F6F6F6] p-[24px] w-[620px] flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-2 bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none"
          />

          {/* Sign Up Butonu */}
          <div className="flex items-center justify-center">
            <button className="w-[572px] h-[56px] bg-[#45658B] text-white rounded font-medium text-base leading-[24px] hover:bg-[#EEEEEE] hover:text-[#00000061] ">
              Send Email
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Link to="/SignInPage">
              <button className="w-[572px] h-[56px]  text-[#45658B] rounded font-medium text-base leading-[24px]">
                Back to Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
