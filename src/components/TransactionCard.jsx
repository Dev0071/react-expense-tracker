import React from 'react';
import { useGlobalContext } from '../context';

const TransactionCard = () => {
  const { transactions } = useGlobalContext();
  console.log(transactions);

  return (
    <div>
      <h2 className="border-b-2 pb-[4px] text-base text-gray-800 mb-3">
        History
      </h2>
      {transactions.map()}
      <div className="flex flex-row p-2 bg-white capitalize text-sm text-gray-800 border-r-4 justify-between shadow mb-3 border-green-500">
        <p>cash</p>
        <p>+50</p>
      </div>
    </div>
  );
};

export default TransactionCard;
