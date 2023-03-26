import React, { useContext, useReducer, useState } from "react";
import reducer from "../reducers/orders_reducer";
import { useProductsContext } from "../context/products_context";
import { SEND_ORDER, CLOSE_POSITION } from "../actions";

let startState = {
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
  const [idCount, setIdCount] = useState(0);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [order, setOrder] = useState({
    name: "",
    lastname: "",
    adress: "",
    residential: "",
    comments: "",
    payment: "",
  });
  const [isOrderValid, setIsOrderValid] = useState(true);
  const [state, dispatch] = useReducer(reducer, startState);
  const sendToOrder = (id, name, sizeprice) => {
    const { size, price } = sizeprice;
    const addToOrder = numberofPizzas.find((element) => element.id === id);
    const newPosition = {
      id: idCount,
      name: addToOrder.name,
      price: addToOrder.price,
      size: addToOrder.size,
      value: addToOrder.value,
    };
    setIdCount(idCount + 1);

    const sameObject = startState.actualOrder.filter(
      (element) => element.name === name
    );
    if (sameObject.length > 0) {
      const findDimensions = sameObject.find(
        (element) => element.size === newPosition.size
      );
      if (findDimensions) {
        const addingValue = newPosition.value;
        findDimensions.value = findDimensions.value + addingValue;
      } else if (findDimensions === false) {
        startState.actualOrder.push(newPosition);
      } else {
        startState.actualOrder.push(newPosition);
      }
    } else {
      startState.actualOrder.push(newPosition);
    }
    dispatch({ type: SEND_ORDER, payload: startState.actualOrder });
  };

  const closePosition = (id) => {
    const { actualOrder } = startState;
    const orderAfterDelete = actualOrder.filter((element) => element.id !== id);
    console.log(orderAfterDelete);
    startState.actualOrder = orderAfterDelete;
    dispatch({ type: CLOSE_POSITION, payload: startState });
  };

  const setFullAmount = startState.actualOrder
    .reduce((accumulator, actualOrder) => {
      return accumulator + actualOrder.price * actualOrder.value;
    }, 0)
    .toFixed(2);

  const toggleShowOrderForm = () => {
    if (showOrderForm) {
      setShowOrderForm(false);
    } else if (showOrderForm === false) {
      setShowOrderForm(true);
    }
    setOrder({
      name: "",
      lastname: "",
      adress: "",
      residential: "",
      comments: "",
      payment: "",
    });
  };

  const orderConfirmTab = () => {
    if (isOrderValid) {
      setIsOrderValid(false);
      setShowOrderForm(false);
    } else if (isOrderValid === false) {
      setIsOrderValid(true);
    }
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
        setFullAmount,
        toggleShowOrderForm,
        showOrderForm,
        order,
        setOrder,
        isOrderValid,
        setIsOrderValid,
        orderConfirmTab,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
