import React from 'react';
import { useGlobalContext } from '../context';

const TransactionCard = () => {
  const { transactions } = useGlobalContext();
  // console.log(transactions);

  return (
    <div>
      <h2 className="border-b-2 pb-[4px] text-base text-gray-800 mb-3">
        History
      </h2>
      {transactions.map((transaction, id) => {
        // console.log(transaction);
        const { transactionName, numTransactionAmount } = transaction;

        // checks the sign of the Amount
        const checkSign = (inputStr) => {
          const pattern = /^[-]/;
          return pattern.test(inputStr);
        };

        const transactionSign = numTransactionAmount > 0 ? '+' : '-';

        return (
          <div
            key={id}
            className={`flex flex-row p-2  bg-white capitalize text-sm text-gray-800 border-r-4 justify-between shadow mb-3 
            ${
              checkSign(numTransactionAmount)
                ? 'border-red-500'
                : 'border-green-500'
            }`}
          >
            <p>{transactionName}</p>
            <p>
              {transactionSign}${Math.abs(numTransactionAmount)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionCard;
