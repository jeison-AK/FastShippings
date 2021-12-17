import React from "react";
import "../Label/SLabel.css";
import axios from "axios";
import appConfig from "../../../../appConfig";

export default class Opciones extends React.Component {
  constructor(props) {
    // Initialize dad constructor
    super(props);
    // Binding functions
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeStateApp = this.props.onTryLogin;
    // Components State Definition
    this.state = {
      username: "",
      password: "",
    };
  }

  async handleClick() {
    let response = await axios.post(appConfig.urlBackEnd + "users", this.state);
    if (response.data.length == 1) {
      console.log(response);
      this.changeStateApp(true, response.data[0].username);
    } else {
      alert("Usuario y/o contraseña incorrecto.");
    }
  }

  async handleChange(e) {
    if (e.target.name == "username") {
      await this.setState({
        username: e.target.value,
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
      <div className="contenedor">
        <section className="contenedor-login">
          <label className="label">USUARIO</label>
          <input
            className="input-usuario"
            id="usuario"
            name="username"
            placeholder="Usuario"
            type="text"
            onChange={this.handleChange}
          />

          <label className="label">CONTRASEÑA</label>
          <input
            className="input-contraseña"
            id="contraseña"
            name="password"
            placeholder="Contraseña"
            type="password"
            onChange={this.handleChange}
          />

          <input
            className="ingresar"
            id="boton-ingresar"
            name="boton-ingresar"
            type="submit"
            value="Login"
            onClick={this.handleClick}
          />
        </section>
      </div>
    );
  }
}
