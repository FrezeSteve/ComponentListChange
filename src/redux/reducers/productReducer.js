import {
  PRODUCT_START,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL
} from "../types";

const initialState = {
  message: "",
  error: "",
  products: [],
  loading_get: false,
  loading_product: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_START:
      return { ...state, loading_product: true };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading_product: false
      };
    case PRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading_product: false
      };
    case GET_PRODUCT_START:
      return { ...state, loading_get: true };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading_get: false
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading_get: false
      };
    default:
      return state;
  }
};
