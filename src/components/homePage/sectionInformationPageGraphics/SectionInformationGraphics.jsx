import React from "react";
import "./styles.css";
import BoxesInformation from "./boxesInformation/BoxesInformation";
import ImagenInformationGraphics from "./subComponents/ImagenInformationGraphics";
import TitleInformation from "./subComponents/TitleInformation";
import TextInformation from "./subComponents/TextInformation";

const SectionInformationGraphics = () => {
  return (
    <div className="container--main__informationGraphics">
      <BoxesInformation>
        <ImagenInformationGraphics imagen={"https://fondosmil.com/fondo/9335.jpg"} />
        <TitleInformation>Las mejores marcas</TitleInformation>
        <TextInformation>
          En nuestra página encontrarás los mejores precios y marcas del mercado, en una amigable
          interfaz.
        </TextInformation>
      </BoxesInformation>

      <BoxesInformation>
        <ImagenInformationGraphics
          imagen={"https://www.muycomputerpro.com/wp-content/uploads/2022/08/NVIDIA-Grace.jpg"}
        />
        <TitleInformation>Futuro en arquitectura</TitleInformation>
        <TextInformation>
          Podrás comprar tarjetas de video dedicadas, equipadas con la mejor arquitectura posible,
          eficiente y competente.
        </TextInformation>
      </BoxesInformation>

      <BoxesInformation>
        <ImagenInformationGraphics
          imagen={
            "https://hiraoka.com.pe/media/mageplaza/blog/post/q/u/qu_es_una_tarjeta_gr_fica_y_como_funciona.jpg"
          }
        />
        <TitleInformation>Disfruta de una estetica sin igual</TitleInformation>
        <TextInformation>
          Admira la belleza de las ultimas innovaciones en materia artística que nos dan estas
          hermosas gráficas.
        </TextInformation>
      </BoxesInformation>
    </div>
  );
};

export default SectionInformationGraphics;
