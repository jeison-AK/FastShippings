import React from "react";
import "./navBar.css";
export default function NavBar_JM() {
  return (
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light grid">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            clas="img-responsive"
            src="https://i.ibb.co/2FSrXtq/LOGO-82x64.jpg"
          />
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
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown04"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdown04">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
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
