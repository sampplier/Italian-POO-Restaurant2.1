import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="father">
      <div className="topFixedBar">
        <img className="logo" alt="Logo" src={require("../../../static/img/logo.png")}></img>
        <ul className="optionsTopBar">
          <li>QUEM SOMOS</li>
          <li>CARDAPIO</li>
          <li>LOCALIZAÇÃO</li>
          <li>AVALIAÇÕES</li>
        </ul>
        <div className="login-button" alt="Login-Button">
          <img className="login-logo" alt="Login-Logo" src={require("../../../static/img/login-icon.svg")}></img>
          LOGIN
        </div>
      </div>
      <div className="showroom">
        <img className="background-Photo" alt="Background-Photo" src={require("../../../static/img/background-photo.png")} />
        <div className="lateral-bar" alt="Lateral-Bar">
          <ul className="alternates-buttons" alt="Alternates-Buttons">
            <li className="button1"></li>
            <li className="button2"></li>
            <li className="button3"></li>
            <li className="button4"></li>
          </ul>
        </div>
        <div className="background-down-button" alt="Background-Down-Button" >
          <img className="down-button" alt="Down-Button" src={require("../../../static/img/Down-Button.svg")}></img>
        </div>
      </div>
      <div className="teste">
        <h1>Bem-vindo ao nosso restaurante italiano, onde a tradição encontra a tecnologia! Nasceu de um projeto de amigos apaixonados por Programação Orientada a Objetos (POO) e pelo amor à culinária italiana. Inspirados pela riqueza das tipicas comidas italianas, nosso cardápio é um convite à Itália, com foco em massas de dar água na boca.</h1>
        <h1>Os favoritos de nossa casa são o delicioso macarrão a molho branco e os crepes irresistíveis. São pratos que conquistaram o paladar de nossos clientes e se tornaram verdadeiras estrelas em nosso menu.</h1>
        <h1>Nosso ambiente é um refúgio de calma e tranquilidade. Com músicas que nos transportam diretamente para as ruas da Itália, criamos uma atmosfera que faz você se sentir como se estivesse na cidade. Cada detalhe da decoração foi cuidadosamente escolhido para criar uma experiência autêntica e memorável.</h1>
        <h1>Venha nos visitar e faça uma viagem gastronômica à Itália em pleno coração da cidade. No nosso restaurante, a paixão pela POO e pela culinária italiana se unem para proporcionar uma experiência única. Esperamos recebê-lo em nosso cantinho italiano em breve!</h1>
      </div>
      <div className="Infobar">
        <ul className="options-infobar" alt="Options-InfoBar">
          <li>QUEM SOMOS</li>
          <li>CONTATO</li>
          <li>TRABALHE CONOSCO</li>
          {/* <div className="Icons-InfoBar">
          <img className="instagram-icon" src={require('../../../static/img/Instagram-Icon.svg')}></img>
          <img className="Twitter-icon" src={require('../../../static/img/Twitter-Icon.svg')}></img>
          <img className="Facebook-icon" src={require('../../../static/img/Facebook-Icon.svg')}></img>
          <img className="Youtube-icon" src={require('../../../static/img/Youtube-Icon.svg')}></img>
          <img className="Linkedin-icon" src={require('../../../static/img/Linkedin-Icon.svg')}></img>
          </div> */}
        </ul>
      </div>
    </div>
  );
};
