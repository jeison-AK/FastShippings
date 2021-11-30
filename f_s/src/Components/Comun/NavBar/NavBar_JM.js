import React from "react";

export default function NavBar_JM() {
  return (
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://i.ibb.co/2FSrXtq/LOGO-82x64.jpg" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0 mx-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
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
        </div>
        <div class="col-md-auto mb-2 p-2 text-end p-2 justify-content-end">
          <button
            type="button"
            class="btn btn-outline-primary me-2 p-2  bd-highlight"
          >
            Iniciar sesión
          </button>
          <button type="button" class="btn btn-primary p-2  bd-highlight">
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
}
