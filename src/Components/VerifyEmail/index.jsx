import React, { useState } from "react";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`code-${index - 1}`).focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pastedData)) {
      setCode(pastedData.split(""));
      document.getElementById("code-5").focus();
    }
  };

  return (
    <div className="container mx-auto max-w-[668px]">
      <div className="mt-[40px] mb-[36px]">
        <h1 className="font-semibold text-[34px] text-[#000000DE]">Verify email</h1>
        <p className="text-[18px] font-normal mt-[12px]">
          Click the link or enter the code we sent to:{" "}
          <span className="text-[#45658B] underline">laylaahmedova@gmail.com</span> for reset password
        </p>
      </div>
      <div className="flex justify-center gap-2" onPaste={handlePaste}>
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-[70px] h-[70px] text-center text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-[24px]">
        <button className="flex h-[56px] rounded-[4px] w-[410px] justify-center items-center text-[#00000061] bg-[#EEEEEE]">
          <p className="text-[16px] text-[#00000061] font-semibold">Confirm code</p>
        </button>
        <Link className="mt-[32px]" to="/SignInPage">
          <p className="text-[#45658B] text-[16px] font-semibold">Back to log in</p>
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
