import React from 'react';

const AddTransactionCard = () => {
  return (
    <div className="mt-5">
      <h2 className="pb-[4px] border-b-2 text-gray-800 text-base mb-3">
        Add new transaction
      </h2>
      <form>
        <label className=" text-sm text-gray-800" htmlFor="text">
          Text
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="p-[4px] text-sm w-full text-gray-800 my-2 border-[1px] border-solid focus:border-gray-600 outline-none rounded"
        />
        <label className="block text-sm text-gray-800" htmlFor="text">
          Amount <br /> (negative - expense, positive - income)
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="p-[4px] text-sm w-full my-2 text-gray-800 border-[1px] border-solid focus:border-gray-600 outline-none rounded "
        />
        <div>
          <button
            type="button"
            className="p-2 w-full bg-indigo-500 text-white hover:bg-indigo-400"
          >
            Add transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransactionCard;
