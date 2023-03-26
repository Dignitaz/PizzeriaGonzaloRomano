import { SEND_ORDER, CLOSE_POSITION, SUME_FULL_AMOUNT } from "../actions";

const orders_reducer = (state, action) => {
  switch (action.type) {
    case SEND_ORDER:
      const newState = action.payload;
      return { ...state, actualOrder: newState };
    case CLOSE_POSITION:
      const orderAfterDelete = action.payload;
      return { ...state, actualOrder: orderAfterDelete };
    case SUME_FULL_AMOUNT:
      const newFullAmount = action.payload;
      return { ...state, fullAmount: newFullAmount };
    default:
      return { ...state };
  }
};

export default orders_reducer;
