import React from "react";
import { Link } from "react-router-dom";

function Registro() {
  return (
    <div className="grid">
      <main className="col align-self-center">
        <div className="card-header">
          <h3 className="text-center font-weight-light my-4">Regístrese</h3>
        </div>
        <div className="col align-self-auto">
          <div className="card-body row mb-3">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="inputFirstName"
                      type="text"
                      placeholder="Nombre"
                      autoFocus
                      required
                    />
                    <label for="inputFirstName">Nombre</label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="inputLastName"
                      type="mail"
                      placeholder="mail"
                      required
                    />
                    <label for="inputLastName">E-mail</label>
                  </div>
                </div>
              </div>
              {/* <div>
              <select
                className="form-select"
                aria-label="Default select example"
                required
              >
                <option selected>Tipo de persona</option>
                <option value="1">Persona natural</option>
                <option value="2">Persona juridica</option>
                <option value="3">Representante legal</option>
              </select>
            </div> */}

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3 mb-md-3">
                    <input
                      className="form-control"
                      id="inputPassword"
                      type="password"
                      placeholder="Create a password"
                      required
                      minLength="6"
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                  <div className="form-floating mb-3 mb-md-0">
                    <input
                      className="form-control"
                      id="inputPasswordConfirm"
                      type="password"
                      placeholder="Confirm password"
                      required
                    />
                    <label for="inputPasswordConfirm">Confirmar Password</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 mb-0">
              <div class="d-grid">
                <a class="btn btn-success" href="#">
                  Crear cuenta
                </a> */}
                <button className="btn btn-success ">Crear cuenta</button>
                {" | "}
                <Link className="btn btn-warning" to="/">
                  Volver
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Registro;
