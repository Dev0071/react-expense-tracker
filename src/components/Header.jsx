import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold mt-10 text-center mb-4 text-[18px] ">
        Expense Tracker
      </h2>
      <div className="mb-2">
        <p className="text-[15px]">Your Balance</p>
        <p className="text-[20px] font-semibold">$350.00</p>
      </div>
      <div className="w-full p-4 bg-white flex items-center justify-around shadow-md">
        <div className="flex flex-col justify-center items-center">
          <p className="uppercase text-[13px]">Income</p>
          <p className="text-green-500">$500.00</p>
        </div>
        <div className="bg-gray-500 w-[1px] h-10 "></div>
        <div className="flex flex-col justify-center items-center">
          <p className="uppercase text-[13px]">Expense</p>
          <p className="text-red-600">$300.00</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
