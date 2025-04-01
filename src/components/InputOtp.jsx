import React, { useRef, useState } from "react";

const inputOtp = () => {
  const OTP_DIGITS_COUNT = 5;
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  const refArr = useRef([]);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    console.log(value);
    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr);
  };

  return (
    <div>
      <h1>Validate OTP</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            className="otp-input"
            key={index}
            type="text"
            ref={(input) => (refArr.current[index] = input)}
            value={inputArr[index]}
            onChange={(e) => handleOnChange(e.target.value, index)}
          />
        );
      })}
    </div>
  );
};

export default inputOtp;
