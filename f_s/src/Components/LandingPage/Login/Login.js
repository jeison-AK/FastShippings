import React from "react";
import "../../LandingPage/Login/SLogin.css";
import Opciones from "../Login/Label/Label";
import NavBar_CC from "../../Comun/NavBar/NavBar_CC";
import Footer from "../../Comun/footer/footer";

function Login() {
  const [user, setUser] = React.useState(null);
  //no es un sistema de logeo completo
  async function login(user = null) {
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }

  return (
    <main className="principal">
      <NavBar_CC />
      <div>
        <section className="contenedor-principal">
          <h1 className="titulo">INICIA SESIÓN</h1>
          <Opciones />
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default Login;
