import axios from "axios";
import { fetchOrderSuccess, fetchOrdersFail } from "../redux/slices/orders/ordersSlice";
import { urlBase } from "../utils/nucbaZappiBackendApi";

export const ordersOfCurrentUser = async (dispatch, currentUser) => {
  try {
    const response = await axios.get(`${urlBase}/orders`, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    dispatch(fetchOrderSuccess(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    dispatch(fetchOrdersFail());
    return alert(error);
  }
};

export const createNewOrder = async (order, dispatch, currentUser) => {
  try {
    const response = await axios.post(`${urlBase}/orders`, order, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    if (response) {
      ordersOfCurrentUser(dispatch, currentUser);
    }
    return response.data.order;
  } catch (error) {
    console.log(error);
    return alert(error);
  }
};
