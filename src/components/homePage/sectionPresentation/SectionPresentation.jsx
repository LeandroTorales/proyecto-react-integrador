import React from "react";
import BackgroundImagePresentation from "./backgroundImage/BackgroundImagePresentation";
import BlurImageBackGround from "./subComponents/BlurImageBackGround";
import "./styles.css";

const SectionPresentation = () => {
  return (
    <>
      <div className="container--section__presentation">
        <BackgroundImagePresentation
          height={"calc(100vh - 60px)"}
          width={"100%"}
          image={
            "url(https://wallscloud.net/img/resize/3840/2160/MM/2022-11-02-nvidia-rtx-4090-1-55054.png)"
          }
        >
          <BlurImageBackGround
            backdropFilter={"blur(20px)"}
            backgroundColor={"rgba(0, 0, 0, 0.791)"}
          >
            <BackgroundImagePresentation
              height={"60%"}
              width={"50%"}
              image={
                "url(https://wallscloud.net/img/resize/3840/2160/MM/2022-11-02-nvidia-rtx-4090-1-55054.png)"
              }
              borderRadius={"25px"}
            >
              <BlurImageBackGround
                borderRadius={"25px"}
                backgroundColor={"rgba(0, 0, 0, 0.216)"}
              ></BlurImageBackGround>
            </BackgroundImagePresentation>
          </BlurImageBackGround>
        </BackgroundImagePresentation>
      </div>
    </>
  );
};

export default SectionPresentation;
