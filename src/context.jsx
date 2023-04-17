import react, { useContext, useReducer, useState } from 'react';
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

  const { transactionName, transactionAmount } = state;
  const transaction = { transactionName, transactionAmount };

  // get the name of the transaction
  const getTransactionName = (e) => {
    dispatch({ type: 'GET_TRANSACTION_NAME', payload: e.target.value });
  };

  // get the amount
  const getTransactionAmount = (e) => {
    dispatch({ type: 'GET_TRANSACTION_AMOUNT', payload: e.target.value });
  };

  const addTransaction = () => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

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
