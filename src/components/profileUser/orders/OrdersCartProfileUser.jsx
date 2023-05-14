import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { ordersOfCurrentUser } from "../../../axios/axiosOrders";
import { dateFunc } from "../../../utils/formatDateOrder";
import { useNavigate } from "react-router-dom";

const OrdersCartProfileUser = () => {
  const { orders } = useSelector((state) => state.ordersSlice);
  const { dataUser } = useSelector((state) => state.registerSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    ordersOfCurrentUser(dispatch, dataUser);
  }, [dispatch, dataUser]);

  const handlerMoreInfoOrder = (orderId) => {
    return navigate(`/orderInformation/${orderId}`);
  };

  return (
    <div className="container--orders">
      <h2 style={{ textDecoration: "underline" }}>Tus ordenes de compra</h2>
      <div className="wrapper--orders">
        {orders !== null ? (
          orders.data.map((order, key) => (
            <div className="orderInProfile" key={key}>
              <div className="divition--informationOrder">
                <p>
                  Fecha: <br /> <span>{dateFunc(order.createdAt).date}</span>
                  <br />
                  Hora: <br /> <span>{dateFunc(order.createdAt).time}</span>
                </p>
                <p>
                  Numero de orden: <br />
                  <span>{order._id}</span>
                </p>
              </div>
              <div className="divition--informationOrder">
                <p>
                  Total de la compra: <br />
                  <span>${order.total}</span>
                </p>
                <p>
                  Cantidad de productos:
                  <span>
                    {`${order.items.length} (${order.items.reduce(
                      (acc, cur) => acc + cur.quantity,
                      0
                    )} en cantitad de productos)`}
                  </span>
                </p>
              </div>
              <div className="container--buttonMoreInfoOrder">
                <button
                  className="button--moreInfoOrder"
                  onClick={() => handlerMoreInfoOrder(order._id)}
                >
                  Más información
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3>Todavia no has comprado nada.</h3>
        )}
      </div>
    </div>
  );
};

export default OrdersCartProfileUser;
