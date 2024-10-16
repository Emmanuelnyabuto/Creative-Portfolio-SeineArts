const initialState = {
  payments: [],
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PAYMENT':
      return { ...state, payments: [...state.payments, action.payload] };
    case 'UPDATE_PAYMENT':
      return {
        ...state,
        payments: state.payments.map(payment =>
          payment.id === action.payload.id ? action.payload : payment
        ),
      };
    case 'DELETE_PAYMENT':
      return {
        ...state,
        payments: state.payments.filter(payment => payment.id !== action.payload),
      };
    default:
      return state;
  }
};

export default paymentReducer;