import React from "react";
import "./styles.css";
import CartContainer from "../../components/cart/CartContainer";
import CartInfoContainer from "../../components/cart/CartInfoContainer";
import CartItemsIn from "../../components/cart/CartItemsIn";
import CartResumeContainer from "../../components/cart/CartResumeContainer";
import { useSelector } from "react-redux";
import CartCardOfProduct from "../../components/cart/cartCardOfProduct/CartCardOfProduct";
import NameCategories from "../../components/cart/cartCardOfProduct/components/NameCategories";
import ShippingCostCart from "../../components/cart/cartCardOfProduct/components/ShippingCostCart";
import PurchaseCartButton from "../../components/cart/cartCardOfProduct/components/PurchaseCartButton";
import SubTotalPriceCart from "../../components/cart/cartCardOfProduct/components/SubTotalPriceCart";

const Cart = () => {
  const { productsInCartArr } = useSelector((state) => state.cartSlice);
  console.log("ARRAY DE PRODUCTOS:", productsInCartArr);

  return (
    <>
      <CartContainer>
        <CartInfoContainer>
          <CartItemsIn>
            <NameCategories />
            {productsInCartArr.map(({ ...prod }) => (
              <CartCardOfProduct {...prod} key={prod.id} />
            ))}
          </CartItemsIn>
          <CartResumeContainer>
            <SubTotalPriceCart />
            <ShippingCostCart />
            <PurchaseCartButton />
          </CartResumeContainer>
        </CartInfoContainer>
      </CartContainer>
    </>
  );
};

export default Cart;
