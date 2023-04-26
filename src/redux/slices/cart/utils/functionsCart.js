export const addProductCart = (productsArr, product) => {
  const findProductInArrCart = productsArr.find((prod) => prod.id === product.id);

  if (findProductInArrCart) {
    return productsArr.map((prod) => {
      return prod.id === findProductInArrCart.id
        ? {
            ...prod,
            quantity: prod.quantity + 1,
          }
        : prod;
    });
  }

  return [...productsArr, { ...product, quantity: 1 }];
};

export const modificateQuantityProductInCart = (
  productsArr,
  actionPayloadWithProductAndValueSelect
) => {
  const findProductInArrCart = productsArr.find(
    (prod) => prod.id === actionPayloadWithProductAndValueSelect.payload1.id
  );

  if (findProductInArrCart) {
    return productsArr.map((prod) => {
      return prod.id === findProductInArrCart.id
        ? {
            ...prod,
            quantity: actionPayloadWithProductAndValueSelect.payload2,
          }
        : prod;
    });
  }
};

export const removeProductCart = (productsArr, product) => {
  const findProductInArrCart = productsArr.find((prod) => prod.id === product.id);

  const findIndex = productsArr.findIndex((prod) => prod.id === findProductInArrCart.id);

  if (findProductInArrCart) {
    return productsArr.map((prod) => {
      return prod.id === findProductInArrCart.id
        ? {
            ...prod,
            quantity: prod.quantity - 1,
          }
        : prod;
    });
  }

  return productsArr.splice(findIndex, 1);
};

export const calculateShippingCost = (productsArr, shippingCost) => {
  const arrVacio = [];
  productsArr.map((prod) => arrVacio.push(prod.price * prod.quantity));

  if (arrVacio.reduce((acc, cur) => acc + cur, 0) > 500000) {
    return 0;
  }

  return shippingCost;
};
