import react, { useContext, useEffect, useReducer, useState } from 'react';
import reducer from './reducer';
import { v4 as uuidv4 } from 'uuid';

const AppContext = react.createContext();

const initialState = {
  balance: 0,
  totalIncome: 0,
  totalExpenses: 0,
  transactionName: '',
  transactionAmount: '',
  transactions: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get the name of the transaction
  const getTransactionName = (e) => {
    dispatch({ type: 'GET_TRANSACTION_NAME', payload: e.target.value });
  };

  // get the amount
  const getTransactionAmount = (e) => {
    dispatch({ type: 'GET_TRANSACTION_AMOUNT', payload: e.target.value });
  };

  // add a new transaction
  const addTransaction = () => {
    const { transactionName, transactionAmount } = state;
    const numTransactionAmount = Number(transactionAmount);

    if (isNaN(numTransactionAmount) || transactionName === '') {
      <p>hello</p>;
      console.log('Transaction amount must be a number');
      return;
    }

    if (numTransactionAmount === 0) {
      console.log('amount shouldnt be zero');
      return;
    }

    const NewTransaction = {
      id: uuidv4(),
      transactionName,
      numTransactionAmount,
    };
    dispatch({ type: 'ADD_TRANSACTION', payload: NewTransaction });
  };

  // total Income
  useEffect(() => {
    const income = state.transactions.reduce((total, transaction) => {
      return transaction.numTransactionAmount > 0
        ? total + transaction.numTransactionAmount
        : total;
    }, 0);
    dispatch({ type: 'SET_TOTAL_INCOME', payload: income });
  }, [state.transactions]);

  // total Expenses
  useEffect(() => {
    const expenses = state.transactions.reduce((total, transaction) => {
      return transaction.numTransactionAmount < 0
        ? total + transaction.numTransactionAmount
        : total;
    }, 0);
    dispatch({ type: 'SET_TOTAL_EXPENSES', payload: expenses });
  }, [state.transactions]);

  // total balance
  useEffect(() => {
    const income = state.transactions.reduce((total, transaction) => {
      return transaction.numTransactionAmount > 0
        ? total + transaction.numTransactionAmount
        : total;
    }, 0);
    const expenses = state.transactions.reduce((total, transaction) => {
      return transaction.numTransactionAmount < 0
        ? total + transaction.numTransactionAmount
        : total;
    }, 0);
    const balance = income + expenses;
    dispatch({ type: 'SET_BALANCE', payload: balance });
  }, [state.transactions]);

  // store transactions in local storage
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  // retrieve transactions from local storage on app load
  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      dispatch({
        type: 'SET_TRANSACTIONS',
        payload: JSON.parse(storedTransactions),
      });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getTransactionName,
        getTransactionAmount,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
