import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { ordersOfCurrentUser } from "../../axios/axiosOrders";
import { useParams } from "react-router-dom";
import { dateFunc } from "../../utils/formatDateOrder";
import DivisionInformationDateOrder from "./components/DivisionInformationDateOrder";
import DivisionInformationTotalPriceOrder from "./components/DivisionInformationTimeOrder";

const OrderProducts = () => {
  const { orders } = useSelector((state) => state.ordersSlice);
  const { dataUser } = useSelector((state) => state.registerSlice);
  const { orderParam } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    ordersOfCurrentUser(dispatch, dataUser);
  }, [dispatch, dataUser]);

  const orderWithParam = () => {
    return orders.data.filter((order) => order._id === orderParam)[0];
  };

  return (
    <div className="wrapper--informationOrder">
      <div className="wrapper--informationDate">
        <DivisionInformationDateOrder
          date={dateFunc(orderWithParam().createdAt).date}
          time={dateFunc(orderWithParam().createdAt).time}
          orderId={orderWithParam()._id}
        />
      </div>
      <DivisionInformationTotalPriceOrder
        totalPrice={orderWithParam().total}
        quantityProductsTotal={orderWithParam().items.reduce((acc, cur) => acc + cur.quantity, 0)}
        address={orderWithParam().shippingDetails.address}
        cellphone={orderWithParam().shippingDetails.cellphone}
        location={orderWithParam().shippingDetails.location}
        name={orderWithParam().shippingDetails.name}
      />
      <div className="products--wrapperOrder">
        <h2>Productos comprados:</h2>
        <div className="wrapper--mapOrder">
          {orderWithParam().items.map((order, key) => {
            return (
              <div className="product--order" key={key}>
                <div className="container--imgProductOrder">
                  <img src={order.img} alt="ImagenProducto" className="imgProductOrder" />
                </div>
                <div className="wrapper--productsInformation">
                  <span>
                    <span>{order.desc}</span>
                  </span>
                  <span>
                    Precio unitario: <span>${order.price}</span>
                  </span>
                  <span>
                    Cantidad: <span>{order.quantity}</span>
                  </span>
                </div>
              </div>
            );
          })}
          {orderWithParam().items.map((order, key) => {
            return (
              <div className="product--order" key={key}>
                <div className="container--imgProductOrder">
                  <img src={order.img} alt="ImagenProducto" className="imgProductOrder" />
                </div>
                <div className="wrapper--productsInformation">
                  <span>
                    <span>{order.desc}</span>
                  </span>
                  <span>
                    Precio unitario: <span>${order.price}</span>
                  </span>
                  <span>
                    Cantidad: <span>{order.quantity}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderProducts;
