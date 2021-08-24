import StoreApi from "../../APIs/StoreApi";
import { ActionTypes } from "../Contants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const responseData = await StoreApi.get(
    "https://my-sneaker-api.herokuapp.com/sneakers"
  );
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: responseData.data });
};

export const fetchProduct = (productId) => async (dispatch) => {
  const responseData = await StoreApi.get(
    `https://my-sneaker-api.herokuapp.com/sneakers/${productId}`
  );
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: responseData.data });
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addSize = (product) => {
  return {
    type: ActionTypes.ADD_SIZE,
    payload: product.size,
  };

};

