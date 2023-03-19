import axios from "axios";
import React, { useContext, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { dbURL } from "../contains/extraURLs";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  OPEN_PRODUCT,
  CLOSE_PRODUCT,
  GET_CONTACT_DATA_SUCCESS,
  GET_CONTACT_DATA_ERROR,
  GET_MENU_DATA_SUCCESS,
  GET_MENU_DATA_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  isProductOpen: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  const openProduct = () => {
    dispatch({ type: OPEN_PRODUCT });
  };
  const closeProduct = () => {
    dispatch({ type: CLOSE_PRODUCT });
  };

  const fetchContactData = async () => {
    try {
      const contactinfo = await axios.get(dbURL);
      const contact_info = contactinfo.data.contact_icons;
      dispatch({ type: GET_CONTACT_DATA_SUCCESS, payload: contact_info });
    } catch (error) {
      dispatch({ type: GET_CONTACT_DATA_ERROR });
    }
  };

  const fetchMenuData = async () => {
    try {
      const menuinfo = await axios.get(dbURL);
      const fullmenu = menuinfo.data.menu;
      dispatch({ type: GET_MENU_DATA_SUCCESS, payload: fullmenu });
    } catch (error) {
      dispatch({ type: GET_MENU_DATA_ERROR });
    }
  };
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openProduct,
        closeProduct,
        fetchContactData,
        fetchMenuData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
