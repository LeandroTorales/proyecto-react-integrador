import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPriceCartAction } from "../../../../redux/slices/cart/cartSlice";
import "./styles.css";

const SubTotalPriceCart = () => {
  const { priceOfCart } = useSelector((state) => state.cartSlice);
  const { productsInCartArr } = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPriceCartAction());
  }, [productsInCartArr]);

  return <p className="subtotal--cart">El subtotal de la compra es: ${priceOfCart}</p>;
};

export default SubTotalPriceCart;
