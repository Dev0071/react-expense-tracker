import React from 'react';
import Header from './components/Header';
import TransactionCard from './components/TransactionCard';
import AddTransactionCard from './components/AddTransactionCard';

const App = () => {
  return (
    <>
      <Header />
      <TransactionCard />
      <AddTransactionCard />
    </>
  );
};

export default App;
