import React from "react";
import "../../LandingPage/Login/SLogin.css";
import Opciones from "../Login/Label/Label";
import Separador from "../../Comun/Separador/separador";
import Footer from "../../Comun/footer/footer";

function Login() {
  return (
    <div>
      <main className="principal">
        <div>
          <section className="contenedor-principal">
            <h1 className="titulo">INICIA SESIÓN</h1>
            <Opciones />
          </section>
        </div>
        <footer>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default Login;
