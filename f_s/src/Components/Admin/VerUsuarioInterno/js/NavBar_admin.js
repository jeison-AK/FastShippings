import React from "react";
import "../css/navBar.css";
export default function NavBar_admin() {
  return (
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light grid">
      <div class="container-fluid nav-tabs">
        <a class="navbar-brand" href="#">
          <img clas="" src="https://i.ibb.co/2FSrXtq/LOGO-82x64.jpg" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">
          <ul class="navbar-nav me-auto mb-2 mb-md-0 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="HomeUsExt">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cotizar servicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sobre Nosotros
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contactenos
              </a>
            </li>
          </ul>

          <div>
            <button
              type="button"
              class="btn btn-outline-primary me-2 p-2 flex-fill bd-highlight"
            >
              Iniciar sesión
            </button>
            <button
              type="button"
              class="btn btn-primary p-2 flex-fill bd-highlight"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
