import React from "react";
import "./login.scss";
import { connect } from "react-redux";
import { Button, Input, Row, Col, FormGroup } from "reactstrap";
import { useState } from "react";
import Loading from "../../components/loading/loading";
import Slide from "react-reveal/Slide";
import firebase from "../../modules/auth/firebase"
import { AiOutlineArrowLeft } from "react-icons/ai";

import Home from "../home/home";

const Login = (props) => {
const [tab, setTab] = useState("manage");



const login = (props) =>  {
   setTab("manage")
}

const logout = () =>{
    //firebase.logOut();
    setTab("home")
}

if(props.status == "logged" && tab != "manage"){
  setTab("manage")
}

  return (
    <>
      {/* <div className="loading-login">
    <img src={require("../../assets/global/logo.png")}/>
    </div> */}
      {tab == "manage" && <Home logout={() =>logout()}/>}
      {tab != "manage" && (
        <>
                          <h6 className="cant-login">¿No puedes acceder a tu cuenta?</h6>

        <img src={require("../../assets/global/logo.svg")} className="logo-login" />
        <Container-fluid className="login-home">
          <Row>
            <Col className="col-12 col-lg-1" className="login-rigth-side">
              <img src={require("../../assets/login/cover.svg")} className="cover-login" />
              {tab == "home" && (
                <>
                  <h2>¡Bienvenido!</h2>
                  <p>Conecta. Ayuda. Crece.</p>
                  <button className="btn sign-in" onClick={() => setTab("login")}>
                    Iniciar sesión
                  </button>
                  <button className="btn request-access" onClick={() => setTab("access")}>
                    Registrarse
                  </button>
                </>
              )}  
              {tab == "login" && (
                <Slide left>
                  <h2 className="login-title">
                    <AiOutlineArrowLeft onClick={() => setTab("home")} /> Iniciar Sesión
                  </h2>
                  <FormGroup>
                    <input type="text" placeholder="ingresa tu email" id="email" name="email"/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="ingresa tu password" id="password" name="password"/>
                  </FormGroup>
                  <button className="btn sign-in" on onClick={() => login()}>
                    Iniciar sesión
                  </button>
                </Slide>
              )}
              {tab == "access" && (
                <Slide left>
                  <h2 className="login-title">
                    <AiOutlineArrowLeft onClick={() => setTab("home")} /> Solicitar acceso
                  </h2>
                  <FormGroup>
                    <input type="text" placeholder="ingresa el nombre de tu negocio" />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="ingresa tu email" />
                  </FormGroup>
                  <button className="btn request-access">Solicitar</button>
                </Slide>
              )}
            </Col>
          </Row>
        </Container-fluid>
</>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  status: state.status,
  user: state.user,
});

export default connect(mapStateToProps)(Login);
