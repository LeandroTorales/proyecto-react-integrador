import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { ordersOfCurrentUser } from "../../../axios/axiosOrders";

const OrdersCartProfileUser = () => {
  const { orders } = useSelector((state) => state.ordersSlice);
  const { dataUser } = useSelector((state) => state.registerSlice);
  console.log("dataUser:", dataUser);
  console.log("orders:", orders[0].data);

  const dispatch = useDispatch();

  useEffect(() => {
    ordersOfCurrentUser(dispatch, dataUser);
  }, [dispatch, dataUser]);

  return (
    <div className="container--orders">
      <h2 style={{ textDecoration: "underline" }}>Tus ordenes de compra</h2>
      <div className="wrapper--orders">
        {orders[0].data.map((order, key) => (
          <div className="orderInProfile" key={key}>
            order
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersCartProfileUser;
