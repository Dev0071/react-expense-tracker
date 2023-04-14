import React from 'react';
import Header from './components/Header';
import TransactionCard from './components/TransactionCard';
import AddTransactionCard from './components/AddTransactionCard';

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Header />
      <TransactionCard />
      <AddTransactionCard />
    </div>
  );
};

export default App;
