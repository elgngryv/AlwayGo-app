import React, { useState } from "react";
import Apple from "@/assets/Apple2.svg";
import Google from "@/assets/Google2.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container max-w-[668px] mx-auto sf-font">
      <div className="w-[668px] mt-[36px]">
        <div className="mb-[36px] flex flex-col gap-3">
          <h2 className="font-medium text-[34px] leading-[44px]">
            Welcome to AlWayGo
          </h2>
          <p className="font-normal text-lg leading-[24px] text-[#00000099]">
            Shopping made easy! Join for free, grab deals, and explore your
            favorites.
          </p>
        </div>
        <div className="bg-[#F6F6F6] p-[24px] w-[620px] flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-2 bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-2 bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none"
          />

          {/* Şifre Alanı */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full py-2 bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <p className="font-normal text-xs mt-[4px] leading-4 text-[#000000DE]">
              At least 8 characters, with 1 number and 1 lowercase letter (no
              spaces allowed)
            </p>
          </div>

          {/* Şifreyi Tekrar Girme Alanı */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-Enter Password"
              className="w-full py-2 bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 focus:outline-none pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <p className="font-normal text-xs leading-4 mt-[4px] text-[#000000DE]">
              At least 8 characters, with 1 number and 1 lowercase letter (no
              spaces allowed)
            </p>
          </div>

          {/* Onay Kutusu */}
          <div className="flex gap-2 mt-4 mb-[24px]">
            <input
              className="w-[20px] h-[20px] border-2 border-[#B3B3B3] accent-[#B3B3B3]"
              type="checkbox"
            />
            <h2 className="font-normal text-sm leading-[20px] text-[#000000DE]">
              I've read and agree with Terms of Service and Privacy Policy
            </h2>
          </div>

          {/* Sign Up Butonu */}
          <div className="flex items-center justify-center">
            <button className="w-[572px] h-[56px] bg-[#45658B] text-white rounded font-medium text-base leading-[24px]">
              Sign Up
            </button>
          </div>

          {/* Alternatif Giriş Yöntemleri */}
          <div className="flex items-center mt-4 mb-4 justify-center">
            <h2 className="font-medium text-sm leading-[20px] text-[#000000DE]">
              OR
            </h2>
          </div>
          <div className="flex gap-[24px]">
            <button className="border flex items-center justify-center gap-2 border-[#45658B] w-[274px] h-[56px] rounded font-medium text-base leading-[24px]">
              <img src={Google} alt="Google" /> Sign up with Google
            </button>
            <button className="border flex items-center justify-center gap-2 border-[#45658B] w-[274px] h-[56px] rounded font-medium text-base leading-[24px]">
              <img src={Apple} alt="Apple" /> Sign up with Apple
            </button>
          </div>

          {/* Hesabı Olan Kullanıcılar İçin Giriş */}
          <div className="flex gap-4 items-center mt-4 justify-center">
            <h2 className="font-normal text-sm leading-[20px] text-[#000000DE]">
              Already have an account?
            </h2>
            <Link to="/SignInPage" className="text-[#45658B] font-medium text-base leading-[24px]">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
