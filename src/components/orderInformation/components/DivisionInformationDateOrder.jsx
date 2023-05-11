import React from "react";
import "./styles.css";

const DivisionInformationDateOrder = ({ date, time, orderId }) => {
  return (
    <div className="information--order__division">
      <p>
        Fecha: <br /> <span>{date}</span>
      </p>
      <p>
        Hora: <br />
        <span>{time}</span>
      </p>
      <p>
        Numero de order: <br />
        <span>{orderId}</span>
      </p>
    </div>
  );
};

export default DivisionInformationDateOrder;
