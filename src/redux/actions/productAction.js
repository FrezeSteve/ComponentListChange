import {
  PRODUCT_START,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  NETWORK
} from "../types";
import { createError } from "./alertAction";
import axios from "axios";

export const postProduct = data => dispatch => {
  dispatch({
    type: PRODUCT_START
  });
  const token = localStorage.getItem("token");
  token !== null
    ? (axios.defaults.headers = {
        "Content-Type": "application/json",
        "x-access-token": `${token}`
      })
    : (axios.defaults.headers = {
        "Content-Type": "application/json"
      });
  axios
    .post(`${NETWORK}/product`, data)
    .then(res => {
      console.log(res.data);

      dispatch({
        type: PRODUCT_SUCCESS
        // message: res.data
      });
    })
    .catch(error => {
      // debugger;
      dispatch({
        type: PRODUCT_FAIL,
        error: error.response.data.error
      });
      dispatch(createError({ error: error.response.data.error }));
    });
};

export const getProduct = () => dispatch => {
  // application/octet-stream
  dispatch({
    type: GET_PRODUCT_START
  });
  axios
    .get(`${NETWORK}/product`)
    .then(response => {
      console.log(response.data);

      dispatch({
        type: GET_PRODUCT_SUCCESS
        // payload: response.data.products
      });
    })
    .catch(error => {
      dispatch({
        type: GET_PRODUCT_FAIL,
        error: error.response.data.error
      });
      dispatch(createError({ error: error.response.data.error }));
    });
};
