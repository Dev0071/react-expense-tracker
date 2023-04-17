import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const AddTransactionCard = () => {
  const {
    transactionName,
    getTransactionName,
    getTransactionAmount,
    transactionAmount,
    addTransaction,
  } = useGlobalContext();
  // console.log(transactionName);
  console.log(transactionAmount);

  // check if Amount starts with a +/-
  // const checkAmount = (inputStr) => {
  //   const pattern = /^[-+]/;
  //   return pattern.test(inputStr);
  // };

  //check Amount is interger and starts with a non zero
  const checkAmount = (inputStr) => {
    const pattern = /^[+-][1-9]\d*$/;
    return pattern.test(inputStr);
  };

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
          value={transactionName}
          onChange={getTransactionName}
          className="p-[4px] text-sm w-full text-gray-800 my-2 border-[1px] border-solid focus:border-gray-600 outline-none rounded"
        />
        <label className="block text-sm text-gray-800" htmlFor="text">
          Amount <br /> (negative - expense, positive - income)
        </label>
        {checkAmount(transactionAmount) ? (
          ''
        ) : (
          <p className=" mt-2 text-[12px] italic text-red-600 text-center">
            should: put a +/- before the amount, be a number
          </p>
        )}
        <input
          type="text"
          placeholder="Enter Amount"
          value={transactionAmount}
          onChange={getTransactionAmount}
          className={`p-[4px] text-sm w-full my-2 text-gray-800 border-[1px] border-solid outline-none rounded ${
            checkAmount(transactionAmount)
              ? ' focus:border-gray-600'
              : 'focus:border-red-700'
          }`}
        />
        <div>
          <button
            type="button"
            onClick={addTransaction}
            className="p-2 w-full bg-indigo-500 text-white hover:bg-indigo-400 rounded"
          >
            Add transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransactionCard;
