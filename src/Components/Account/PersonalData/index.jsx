import React, { useState } from "react";
import FB from "../../../assets/Facebook2.svg";
import google from "../../../assets/Google.svg";

const PersonalData = () => {
  const [formData, setFormData] = useState({
    name: "Layla Ahmedova",
    email: "laylaahmedova@gmail.com",
    phone: "+994 55 123 45 67",
    address: "Baku, Nizami Street and 1 more address",
    Link: "https://www.facebook.com",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#F6F6F6] sf-font min-h-screen flex flex-col ">
      <div className=" flex flex-col gap-[24px]">
        <div className="flex gap-2 rounded-lg justify-between h-[72px] p-[24px]   w-[966px] bg-white ">
          <label className="text-lg font-medium text-gray-800">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-gray-600   rounded-lg px-3 py-2 focus:outline-none "
          />
        </div>
        <div className="flex gap-2 rounded-lg justify-between h-[72px] p-[24px]   w-[966px] bg-white ">
          <label className="text-lg font-medium text-gray-800">
            Mail Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-gray-600   rounded-lg px-3 py-2 focus:outline-none "
          />
        </div>

        <div className="flex gap-2 rounded-lg justify-between h-[72px] p-[24px]   w-[966px] bg-white ">
          <label className="text-lg font-medium text-gray-800">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="text-gray-600   rounded-lg px-3 py-2 focus:outline-none "
          />
        </div>

        <div className="flex gap-2 rounded-lg justify-between h-[72px] p-[24px]   w-[966px] bg-white ">
          <label className="text-lg font-medium text-gray-800">Address</label>
          <input
            type="text"
            name="name"
            value={formData.address}
            onChange={handleChange}
            className="text-gray-600   rounded-lg px-3 py-2 focus:outline-none "
          />
        </div>
        <h2 className="font-normal text-base leading-[24px] flex  sf-font text-[#00000099]">
          Link your AlwayGo account to your social network accounts and log in
          to the site as a Facebook or Google user.
        </h2>
      </div>
      <div className="flex mt-[45px] gap-[24px]">
        <div className="flex gap-2 justify-between rounded-lg h-[72px] p-[24px]   w-[471px] bg-white ">
          <label className="text-base leading-[24px]  flex gap-2 font-thin text-[#000000DE]">
            <img src={FB} alt="FB" />
            Facebook
          </label>
          <input
            type="text"
            name="Link"
            value={formData.Link}
            onChange={handleChange}
            className="text-gray-600   rounded-lg px-3 py-2 focus:outline-none "
          />
        </div>
        <div className="flex gap-2 justify-between rounded-lg h-[72px] p-[24px]   w-[471px] bg-white ">
          <label className="text-base leading-[24px]  flex gap-2 font-thin text-[#000000DE]">
            <img src={google} alt="google" />
            Layla Ahmedova
          </label>
          <input
            type="text"
            name="Link"
            value={formData.Link}
            onChange={handleChange}
            className="text-gray-600   rounded-lg px-3 py-2 focus:outline-none "
          />
        </div>
      </div>
      <div className="flex justify-between mt-[36px]">
      <button className="w-[195px] font-medium text-base leading-[24px] text-[#000000DE] flex items-center text-center justify-center">Edit personal data</button>
      <button className="w-[195px] font-medium text-base leading-[24px] text-[#000000DE] flex items-center text-center justify-center">Change password</button>
      </div>
    </div>
  );
};

export default PersonalData;
