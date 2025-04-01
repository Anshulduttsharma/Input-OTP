import React, { useState } from "react";

const inputOtp = () => {
  const OTP_DIGITS_COUNT = 5;
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  return (
    <div>
      <h1>Validate OTP</h1>
      {inputArr.map((input, index) => {
        return <input className="otp-input" key={index} type="text"  value={inputArr[index]}/>;
      })}
    </div>
  );
};

export default inputOtp;
