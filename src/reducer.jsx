const reducer = (state, action) => {
  if (action.type === 'GET_TRANSACTION_NAME') {
    return { ...state, transactionName: action.payload };
  }

  if (action.type === 'GET_TRANSACTION_AMOUNT') {
    return { ...state, transactionAmount: action.payload };
  }

  if (action.type === 'ADD_TRANSACTION') {
    return {
      ...state,
      transactions: [...state.transactions, action.payload],
      transactionName: '',
      transactionAmount: '',
    };
  }

  if (action.type === 'SET_TOTAL_INCOME') {
    return { ...state, totalIncome: action.payload };
  }

  if (action.type === 'SET_TOTAL_EXPENSES') {
    return { ...state, totalExpenses: action.payload };
  }

  if (action.type === 'SET_BALANCE') {
    return { ...state, balance: action.payload };
  }

  if (action.type === 'SET_TRANSACTIONS') {
    return { ...state, transactions: action.payload };
  }

  throw new Error('no matching action type');
};

export default reducer;
