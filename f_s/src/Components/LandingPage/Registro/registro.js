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
        <div>
          <h1>Regístrese</h1>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Nombre" autoFocus required
          />
          <label for="floatingInput">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Apellido" required
          />
          <label for="floatingInput">Apellido</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="CC"
          />
          <label for="floatingInput">Documento</label>
        </div>
        <div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Tipo de persona</option>
            <option value="1">Persona natural</option>
            <option value="2">Persona juridica</option>
            <option value="3">Representante legal</option>
          </select>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="email" required
          />
          <label for="floatingInput">E-mail</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingInput"
            placeholder="pass" required minLength="8"
          />
          <label for="floatingInput">Password</label>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Registro;
