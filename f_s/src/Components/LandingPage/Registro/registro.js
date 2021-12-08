import React from "react";
import NavBar from "../../Comun/NavBar/NavBar_Reg";
import "../../Comun/NavBar/navBar.css";
import "../../LandingPage/Registro/registro.css";
import Footer from "../../Comun/footer/footer";

function Registro() {
  return (
    <div class="grid">
      <nav>
        <NavBar />
      </nav>
      <main>
        <div class="card-header">
          <h3 class="text-center font-weight-light my-4">Regístrese</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-floating mb-3 mb-md-0">
                  <input
                    class="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="Nombre" autoFocus required
                  />
                  <label for="inputFirstName">Nombre</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="inputLastName"
                    type="text"
                    placeholder="Apellido" required
                  />
                  <label for="inputLastName">Apellido</label>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-floating mb-3 mb-md-0">
                  <input
                    class="form-control"
                    id="inputFirstName"
                    type="number"
                    placeholder="Documento" required
                  />
                  <label for="inputFirstName">Número de documento</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="inputLastName"
                    type="mail"
                    placeholder="mail" required
                  />
                  <label for="inputLastName">E-mail</label>
                </div>
              </div>
            </div>
            <div>
          <select class="form-select" aria-label="Default select example" required>
            <option selected>Tipo de persona</option>
            <option value="1">Persona natural</option>
            <option value="2">Persona juridica</option>
            <option value="3">Representante legal</option>
          </select>
        </div>
        <p/>
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-floating mb-3 mb-md-0">
                  <input
                    class="form-control"
                    id="inputPassword"
                    type="password"
                    placeholder="Create a password" required minLength="6"
                  />
                  <label for="inputPassword">Password</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3 mb-md-0">
                  <input
                    class="form-control"
                    id="inputPasswordConfirm"
                    type="password"
                    placeholder="Confirm password" required
                  />
                  <label for="inputPasswordConfirm">Confirmar Password</label>
                </div>
              </div>
            </div>
            <div class="mt-4 mb-0">
              <div class="d-grid">
                <a class="btn btn-secondary" href="login.html">
                  Crear cuenta
                </a>
              </div>
            </div>
          </form>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Registro;
