import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const InformationUser = () => {
  const { dataUser } = useSelector((state) => state.registerSlice);

  return (
    <div className="wrapper--profile">
      <div className="wrapper--picture__container">
        <div className="picture--container">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="profilePicture"
            className="picture--profile__img"
          />
        </div>
        <span>{dataUser.nombre}</span>
      </div>
      <div className="wrapper--profileData">
        <h2 className="h2--information">Tus datos personales</h2>
        <div className="container--data">
          <span>Nombre: {dataUser.nombre}</span>
          <span>Email: {dataUser.email}</span>
        </div>
      </div>
    </div>
  );
};

export default InformationUser;
