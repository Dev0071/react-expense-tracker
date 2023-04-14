import React from 'react';
import Header from './components/Header';
import TransactionCard from './components/TransactionCard';
import AddTransactionCard from './components/AddTransactionCard';

const App = () => {
  return (
    <div className="flex flex-col  items-center ">
      <div className="w-[30%] border-solid border-cyan-300 border-2 p-4">
        <Header />
        <TransactionCard />
        <AddTransactionCard />
      </div>
    </div>
  );
};

export default App;
