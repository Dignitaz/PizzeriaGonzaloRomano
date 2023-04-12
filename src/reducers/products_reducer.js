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

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
    case OPEN_PRODUCT:
      return { ...state, isProductOpen: true };
    case CLOSE_PRODUCT:
      return { ...state, isProductOpen: false };
    case GET_CONTACT_DATA_SUCCESS:
      const contact_info = action.payload;
      return { ...state, contact_info };
    case GET_CONTACT_DATA_ERROR:
      return { ...state };
    case GET_MENU_DATA_SUCCESS:
      const rest_menu = action.payload;
      return { ...state, rest_menu };
    case GET_MENU_DATA_ERROR:
      return { ...state };
    default:
      return { ...state };
  }
};

export default products_reducer;
