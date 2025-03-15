import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreateNewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container mx-auto max-w-[668px]">
      <div className="mt-[40px] mb-[36px]">
        <h1 className="font-semibold text-[34px] text-[#000000DE]">Create new password</h1>
        <p className="text-[18px] font-normal mt-[12px]">
          Click the link or enter the code we sent to:{" "}
          <span className="text-[#45658B] underline">laylaahmedova@gmail.com</span> for reset password
        </p>
      </div>
      <div className="bg-[#F6F6F6] p-[24px]">
        {/* Şifre Alanı */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            className="w-full pl-4 py-2 bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none pr-10"
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <p className="font-normal mb-3 text-xs mt-[4px] leading-4 text-[#000000DE]">
            At least 8 characters, with 1 number and 1 lowercase letter (no spaces allowed)
          </p>
        </div>

        {/* Şifreyi Tekrar Girme Alanı */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full pl-4 py-2 bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none pr-10"
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <p className="font-normal text-xs leading-4 mt-[4px] text-[#000000DE]">
            At least 8 characters, with 1 number and 1 lowercase letter (no spaces allowed)
          </p>
        </div>
        <button className="w-full text-[#00000061] bg-[#EEEEEE] py-[16px] mt-[24px]">
          <p className="text-[16px] font-semibold">Reset password</p>
        </button>
        <Link className="flex items-center justify-center mt-[32px]" to={"/SignInPage"}>
          <p className="text-[#45658B] text-[16px] font-semibold">Back to Log in</p>
        </Link>
      </div>
    </div>
  );
};

export default CreateNewPassword;
