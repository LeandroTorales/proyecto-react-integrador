import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import FreeShippingCost from "./FreeShippingCost";
import { getShippingCostAction } from "../../../../redux/slices/cart/cartSlice";

const ShippingCostCart = () => {
  const { shippingCost } = useSelector((state) => state.cartSlice);
  const { productsInCartArr } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShippingCostAction());
  }, [productsInCartArr, dispatch]);

  return (
    <div className="shippingCost">
      Envio: {shippingCost === 0 ? <FreeShippingCost /> : "$" + shippingCost}
    </div>
  );
};

export default ShippingCostCart;
