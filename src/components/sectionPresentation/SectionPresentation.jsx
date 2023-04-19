import React from "react";
import BackgroundImagePresentation from "./backgroundImage/BackgroundImagePresentation";
import BlurImageBackGround from "./subComponents/BlurImageBackGround";
import "./styles.css";
import TextMainHomePage from "../../pages/homePage/subComponentsHomePage/TextMainHomePage";
import SliderPresentationUl from "./slider/SliderPresentationUl";

const SectionPresentation = () => {
  return (
    <>
      <div className="container--section__presentation">
        <BackgroundImagePresentation
          height={"calc(100vh - 60px)"}
          width={"100%"}
          image={"url(https://images7.alphacoders.com/385/385737.jpg)"}
        >
          <BlurImageBackGround
            backdropFilter={"blur(1px)"}
            backgroundColor={"rgba(0, 0, 0, 0.791)"}
          >
            <div className="containerMain--slider">
              <SliderPresentationUl>
                <li>
                  <BackgroundImagePresentation
                    height={"100%"}
                    width={"100%"}
                    image={"url(https://images2.alphacoders.com/756/756084.jpg)"}
                  />
                </li>
                <li>
                  <BackgroundImagePresentation
                    height={"100%"}
                    width={"100%"}
                    image={
                      "url(https://img.wallscloud.net/uploads/thumb/2192406258/the-witcher-3-wild-hunt-1-56061-1024x576-MM-80.webp)"
                    }
                  />
                </li>
                <li>
                  <BackgroundImagePresentation
                    height={"100%"}
                    width={"100%"}
                    image={
                      "url(https://img.wallscloud.net/uploads/thumb/1426676112/gtx680-GMxQ-1024x576-MM-80.webp)"
                    }
                  />
                </li>
                <li>
                  <BackgroundImagePresentation
                    height={"100%"}
                    width={"100%"}
                    image={"url(https://images.alphacoders.com/462/462431.jpg)"}
                  />
                </li>
                <li>
                  <BackgroundImagePresentation
                    height={"100%"}
                    width={"100%"}
                    image={"url(https://images5.alphacoders.com/129/1296503.jpg)"}
                  />
                </li>
              </SliderPresentationUl>
            </div>

            <TextMainHomePage>
              Consigue la tarjeta de video de tus sueños, con nosotros.
            </TextMainHomePage>
          </BlurImageBackGround>
        </BackgroundImagePresentation>
      </div>
    </>
  );
};

export default SectionPresentation;
