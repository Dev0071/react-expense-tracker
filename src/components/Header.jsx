import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold mt-2 text-gray-800 text-center mb-4 text-lg ">
        Expense Tracker
      </h2>
      <div className="mb-2">
        <p className="text-[15px] text-gray-800">Your Balance</p>
        <p className="text-lg text-gray-800 font-semibold">$350.00</p>
      </div>
      <div className="w-full p-4 bg-white flex items-center justify-around shadow-md mb-7">
        <div className="flex flex-col justify-center items-center">
          <p className="uppercase text-sm text-gray-800">Income</p>
          <p className="text-green-600">$500.00</p>
        </div>
        <div className="bg-gray-500 w-[1px] h-10 "></div>
        <div className="flex flex-col justify-center items-center">
          <p className="uppercase text-sm text-gray-800">Expense</p>
          <p className="text-red-700">$300.00</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
