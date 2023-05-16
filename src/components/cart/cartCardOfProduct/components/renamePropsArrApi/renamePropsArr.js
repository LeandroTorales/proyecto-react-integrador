export const orderArrNewProps = (arr) => {
  const unionOfPropsToOrderArr = arr.map((prod) => {
    return {
      ...prod,
      desc: `${prod.modelo} ${prod.tamañoDeMemoria} ${prod.tipoDeMemoriaGrafica} ${prod.marca}`,
      img: prod.imgProduct,
      title: `${prod.fabricante} ${prod.modelo}`,
    };
  });

  return unionOfPropsToOrderArr.map((prod) => {
    const {
      fabricante,
      imgProduct,
      serie,
      stock,
      isTi,
      marca,
      modelo,
      tamañoDeMemoria,
      tipoDeMemoriaGrafica,
      ...resto
    } = prod;
    return resto;
  });
};
