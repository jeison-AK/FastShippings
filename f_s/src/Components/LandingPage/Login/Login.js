import React, { Component } from "react";
import "../../LandingPage/Login/SLogin.css";
import Footer from "../../Comun/footer/footer";
import axios from "axios";
import baseURL from "../../../http-common";
import { NavLink } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    // Initialize dad constructor
    super(props);
    // Binding functions
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeStateApp = this.props.onTryLogin;
    // TODO
    // Components State Definition
    this.state = {
      name: "",
      password: "",
    };
  }

  async handleClick() {
    let response = await axios.post(baseURL, this.State);
    // let response = await axios.post(appConfig.urlBackEnd + "users", this.state);
    if (response.data.length == 1) {
      this.changeStateApp(true, response.data[0].nombre);
      console.log(response);
      //actualizar el estado de logged en el component App
    } else {
      alert("Verifique los datos.");
    }
  }

  async handleChange(e) {
    if (e.target.name == "name") {
      await this.setState({
        name: e.target.value,
      });
    } else {
      await this.setState({
        password: e.target.value,
      });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <main className="principal">
          <section className="contenedor-principal">
            <h1 className="titulo">INICIA SESIÓN</h1>

            <section className="contenedor-login">
              <label className="label">USUARIO</label>
              <input
                className="input-usuario"
                id="name"
                name="name"
                placeholder="Nombre"
                type="text"
                onChange={this.handleChange}
                requiered
              />

              <label className="label">CONTRASEÑA</label>
              <input
                className="input-contraseña"
                id="contraseña"
                name="password"
                placeholder="Contraseña"
                type="password"
                onChange={this.handleChange}
                requiered
              />

              <input
                className="ingresar"
                id="boton-ingresar"
                name="boton-ingresar"
                type="submit"
                value="Login"
                onClick={this.handleClick}
              />
              <br></br>
              <br></br>
              <p>
                {" "}
                ¿No tienes cuenta?{" "}
                <NavLink to="/registro" value="Regístrate" style={{}}>
                  Regístrate
                </NavLink>
              </p>
              <br></br>
              <br></br>
            </section>
          </section>
          <div>
            <br></br>
            <br></br>
            <footer className="footer_login">
              <Footer />
            </footer>
          </div>
        </main>
      </div>
    );
  }
}
