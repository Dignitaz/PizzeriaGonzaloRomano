import { SEND_ORDER, CLOSE_POSITION } from "../actions";

const orders_reducer = (state, action) => {
  switch (action.type) {
    case SEND_ORDER:
      const newState = action.payload;
      return { ...state, actualOrder: newState };
    case CLOSE_POSITION:
      const orderAfterDelete = action.payload;
      return { ...state, actualOrder: orderAfterDelete };
    default:
      return { ...state };
  }
};

export default orders_reducer;
