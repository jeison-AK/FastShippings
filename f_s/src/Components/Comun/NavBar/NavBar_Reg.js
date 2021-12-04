import React from "react";
import "./navBar.css";

export default function NavBar_Reg() {
  return (
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light grid">
      <div class="container-fluid nav-tabs">
        <a class="navbar-brand" href="#">
          <img class="" src="https://i.ibb.co/2FSrXtq/LOGO-82x64.jpg" alt="Logo" />
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
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sobre Nosotros
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contáctenos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
