import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewOrder, ordersOfCurrentUser } from "../../../../axios/axiosOrders";
import { clearCartAction } from "../../../../redux/slices/cart/cartSlice";
import { orderArrNewProps } from "./renamePropsArrApi/renamePropsArr";
import { fetchOrdersStart } from "../../../../redux/slices/orders/ordersSlice";

const PurchaseCartButton = () => {
  const { isLogin } = useSelector((state) => state.registerSlice);
  const { productsInCartArr } = useSelector((state) => state.cartSlice);
  const { shippingCost } = useSelector((state) => state.cartSlice);
  const { dataUser } = useSelector((state) => state.registerSlice);
  const { loading } = useSelector((state) => state.ordersSlice);
  const { orders } = useSelector((state) => state.ordersSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ifDisabled = !isLogin || productsInCartArr.length === 0;

  const handleClickPurchaseCart = async () => {
    if (loading === true) return;
    dispatch(fetchOrdersStart());
    const orderData = {
      price: productsInCartArr.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
      shippingCost: shippingCost,
      total:
        productsInCartArr.reduce((acc, cur) => acc + cur.price * cur.quantity, 0) + shippingCost,
      shippingDetails: {
        name: dataUser.nombre,
        cellphone: "1212121212",
        location: "Buenos Aires",
        address: "calle falsa 123",
      },
      items: orderArrNewProps(productsInCartArr),
    };
    try {
      await createNewOrder(orderData, dispatch, dataUser);
      if (createNewOrder) {
        await ordersOfCurrentUser(dispatch, dataUser);
        dispatch(clearCartAction());
        console.log(orders);
        const findOrderIdWithSlice = await ordersOfCurrentUser(dispatch, dataUser);
        return navigate(`/orderInformation/${findOrderIdWithSlice.data.slice(-1)[0]._id}`);
      }
    } catch (error) {
      console.log(error);
      return alert(error);
    }
  };

  return (
    <>
      <button
        className={`button--purchaseCart ${ifDisabled ? "disabledButton" : ""}`}
        disabled={ifDisabled}
        onClick={handleClickPurchaseCart}
      >
        Comprar carrito
      </button>
    </>
  );
};

export default PurchaseCartButton;
