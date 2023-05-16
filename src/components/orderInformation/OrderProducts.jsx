import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { dateFunc } from "../../utils/formatDateOrder";
import DivisionInformationDateOrder from "./components/DivisionInformationDateOrder";
import DivisionInformationTotalPriceOrder from "./components/DivisionInformationTimeOrder";

const OrderProducts = () => {
  const { orders } = useSelector((state) => state.ordersSlice);
  const { orderParam } = useParams();

  const order = orders.data.filter((order) => order._id === orderParam)[0];

  return (
    <div className="wrapper--informationOrder">
      <div className="wrapper--informationDate">
        <DivisionInformationDateOrder
          date={dateFunc(order.createdAt).date}
          time={dateFunc(order.createdAt).time}
          orderId={order._id}
        />
      </div>
      <DivisionInformationTotalPriceOrder
        totalPrice={order.total}
        quantityProductsTotal={order.items.reduce((acc, cur) => acc + cur.quantity, 0)}
        address={order.shippingDetails.address}
        cellphone={order.shippingDetails.cellphone}
        location={order.shippingDetails.location}
        name={order.shippingDetails.name}
      />
      <div className="products--wrapperOrder">
        <h2>Productos comprados:</h2>
        <div className="wrapper--mapOrder">
          {order.items.map((order, key) => {
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
