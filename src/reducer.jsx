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

  throw new Error('no matching action type');
};

export default reducer;
