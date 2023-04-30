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
import LineDivisoryFooter from "../../components/footer/subComponents/LineDivisoryFooter";

const Cart = () => {
  const { productsInCartArr } = useSelector((state) => state.cartSlice);
  console.log("ARRAY DE PRODUCTOS:", productsInCartArr);

  return (
    <>
      <CartContainer>
        <CartInfoContainer>
          <CartItemsIn>
            {productsInCartArr.length !== 0 ? (
              <div style={{ height: "100%", width: "100%" }}>
                <NameCategories />
                {productsInCartArr.map(({ ...prod }) => (
                  <CartCardOfProduct {...prod} key={prod.id} />
                ))}
              </div>
            ) : (
              <div className="noItemsCartTextContainer">
                <p>
                  Aquí veras los productos que agregues al carrito, todavía no tienes productos en
                  el carrito.
                </p>
              </div>
            )}
          </CartItemsIn>
          <CartResumeContainer>
            <SubTotalPriceCart />
            <ShippingCostCart />
            <LineDivisoryFooter></LineDivisoryFooter>
            <PurchaseCartButton />
          </CartResumeContainer>
        </CartInfoContainer>
      </CartContainer>
    </>
  );
};

export default Cart;
