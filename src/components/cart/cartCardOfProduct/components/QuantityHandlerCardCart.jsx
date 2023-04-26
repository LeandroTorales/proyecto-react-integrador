import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { modificateQuantityProductInCartAction } from "../../../../redux/slices/cart/cartSlice";

const QuantityHandlerCardCart = ({ prod }) => {
  const dispatch = useDispatch();
  const componentesGenerados = [];

  for (let i = 1; i <= prod.stock; i++) {
    componentesGenerados.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  const handlerQuantityProductInCart = (e) => {
    const valueSelectOption = e.target.value;
    const numberSelect = Number(valueSelectOption);

    const objectPayload = {
      payload1: prod,
      payload2: numberSelect,
    };

    return objectPayload;
  };

  return (
    <div className="wrapper--select">
      <select
        name="selectQuantityProduct"
        defaultValue={prod.quantity}
        onChange={(e) =>
          dispatch(modificateQuantityProductInCartAction(handlerQuantityProductInCart(e)))
        }
      >
        {componentesGenerados}
      </select>
    </div>
  );
};

export default QuantityHandlerCardCart;
