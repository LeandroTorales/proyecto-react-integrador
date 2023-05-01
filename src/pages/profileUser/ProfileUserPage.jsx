import React from "react";
import "./styles.css";
import ContainerProfile from "../../components/profileUser/ContainerProfile";
import ButtonLogout from "../../components/profileUser/buttonLogout/ButtonLogout";
import InformationUser from "../../components/profileUser/informationUser/InformationUser";
import OrdersCartProfileUser from "../../components/profileUser/orders/OrdersCartProfileUser";

const ProfileUserPage = () => {
  return (
    <div className="wrapper--profilePage">
      <ContainerProfile>
        <InformationUser />
        <OrdersCartProfileUser />
        <ButtonLogout />
      </ContainerProfile>
    </div>
  );
};

export default ProfileUserPage;
