import "../AgregarUsuarioInterno/add_user.css";

import React, { Component } from "react";

export default class Add_user extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserRollno = this.onChangeUserRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      email: "",
      rollno: "",
    };
  }

  onChangeUserName(e) {
    this.setState({ username: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeUserRollno(e) {
    this.setState({ rollno: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`User successfully created!`);
    console.log(`Name: $this.state.name`);
    console.log(`Email: $this.state.email`);
    console.log(`Roll no: $this.state.rollno`);

    this.setState({ username: "" }, { email: "" }, { rollno: "" });
  }
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        method="POST"
        action="php/registration.php"
        className="row g-3 needs-validation"
        novalidate
      >
        <div className="col-md-14">
          <label for="validationCustom01" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control username"
            id="validationCustom01"
            placeholder="Ingresa el nombre..."
            value={this.state.name}
            onChange={this.onChangeUserName}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-14">
          <label for="validationCustomUsername" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <input
              type="text"
              className="form-control email"
              id="validationCustomUsername"
              // aria-describedby="inputGroupPrepend"
              placeholder="Ingresa el correo..."
              value={this.state.email}
              onChange={this.onChangeUserEmail}
              required
            />
            <div className="invalid-feedback">Please choose a Email.</div>
          </div>
        </div>
        <div className="col-md-7">
          <label for="validationCustom02" className="form-label">
            Documento
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="Digita un documento..."
            value={this.state.rollno}
            onChange={this.onChangeUserRollno}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-5">
          <label for="validationCustom04" className="form-label">
            Rol
          </label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value="">
              ...
            </option>
            <option>Admin</option>
            <option>Externo</option>
            <option>Interno</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
      </form>
    );
  }
}
