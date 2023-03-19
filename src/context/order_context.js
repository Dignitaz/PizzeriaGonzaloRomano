import axios from "axios";
import React, { useContext, useReducer, useState } from "react";
import reducer from "../reducers/orders_reducer";
import { useProductsContext } from "../context/products_context";
import { SEND_ORDER, CLOSE_POSITION } from "../actions";

const startState = {
  actualOrder: [],
};

const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [numberofPizzas, setNumberofPizzas] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 1 },
    { id: 3, value: 1 },
    { id: 4, value: 1 },
    { id: 5, value: 1 },
    { id: 6, value: 1 },
    { id: 7, value: 1 },
    { id: 8, value: 1 },
    { id: 9, value: 1 },
    { id: 10, value: 1 },
  ]);
  const [state, dispatch] = useReducer(reducer, startState);
  const sendToOrder = (id) => {
    const addToOrder = numberofPizzas.find((element) => element.id === id);
    console.log(addToOrder);
    const sameObject = startState.actualOrder.find(
      (element) => element.id === id
    );
    if (sameObject) {
      const addingValue = addToOrder.value;
      sameObject.value = sameObject.value + addingValue;
    } else {
      startState.actualOrder.push(addToOrder);
    }
    dispatch({ type: SEND_ORDER, payload: startState });
  };

  const closePosition = (id) => {
    const { actualOrder } = startState;
    const orderAfterDelete = actualOrder.find((element) => element.id === id);
    startState.actualOrder.splice(orderAfterDelete, 1);
    dispatch({ type: CLOSE_POSITION, payload: startState });
  };

  return (
    <OrderContext.Provider
      value={{
        ...state,
        sendToOrder,
        numberofPizzas,
        setNumberofPizzas,
        startState,
        closePosition,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
