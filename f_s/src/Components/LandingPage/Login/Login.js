import React from "react";
import "../../LandingPage/Login/SLogin.css";
import Opciones from "../Login/Label/Label";
import Separador from "../../Comun/Separador/separador";

function Login() {
  return (
    <main className="principal">
      <div>
        <section className="contenedor-principal">
          <h1 className="titulo">INICIA SESIÓN</h1>
          <Opciones />
          <Separador />
        </section>
      </div>
    </main>
  );
}

export default Login;
