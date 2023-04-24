import React from "react";
import "./styles.css";
import { BsGithub } from "react-icons/bs";
import { AiFillMail, AiOutlineLinkedin } from "react-icons/ai";

const AcercaDe = () => {
  return (
    <div className="wrapper--acercaDe">
      <div className="container--acercaDe">
        <div className="container--text__aboutMe">
          <h2>Acerca de mi</h2>
          <p>
            Hola, me llamo Leandro Torales, tengo 20 años y soy de Argentina.
            <br />
            Apasionado por la programación, me gustan los desafíos complejos y la satisfacción de
            realizar un buen producto, implementando buenas prácticas y tecnologías modernas en el
            proceso.
          </p>
          <p>
            Tengo conocimientos en HTML, CSS, Javascript y actualmente me encuentro estudiando
            React, usando como manejos de estado la librería Redux.
          </p>
        </div>
        <div className="container--Redes__contacto">
          <div className="bubble">
            <a href="https://github.com/LeandroTorales" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
          </div>
          <div className="bubble">
            <a href="mailTo:leandrotorales1234@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiFillMail />
            </a>
          </div>
          <div className="bubble">
            <a
              href="https://www.linkedin.com/in/leandrotorales/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
