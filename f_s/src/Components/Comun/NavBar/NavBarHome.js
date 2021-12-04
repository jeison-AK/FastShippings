import React from "react";
import "./navBar.css";
import { Outlet, useLocation, Link, NavLink } from "react-router-dom";

export default function NavBarHome() {
  const location = useLocation();
  const url = location.pathname;
  console.log("🔥My PAATH>>>>>>", url);
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light grid">
      <div className="container-fluid nav-tabs">
        <a className="navbar-brand" href="#">
          <img clas="" src="https://i.ibb.co/2FSrXtq/LOGO-82x64.jpg" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
            <li className="nav-item">
              <NavLink
                to={`/`}
                className={() => (url === "/" ? "nav-link active" : "nav-link")}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={`/about`}
                className={() =>
                  url === "/about" ? "nav-link active" : "nav-link"
                }
              >
                Sobre Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/about">
                Contactenos
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/OrdenarDespacho`}
                className={({}) =>
                  url === "/OrdenarDespacho" ? "nav-link active" : "nav-link"
                }
              >
                🛒
              </NavLink>
            </li>
          </ul>

          <div>
            {/* <NavLink
              to={`/login`}
              className={({}) =>
                url === "/login" ? "nav-link active" : "nav-link"
              }
            >
              <button
                type="button"
                className="btn btn-outline-primary me-2 p-2 flex-fill bd-highlight"
              >
                Iniciar sesión
              </button>
            </NavLink>
            <NavLink
              to={`/registro`}
              className={({}) =>
                url === "/registro" ? "nav-link active" : "nav-link"
              }
            >
              <button
                type="button"
                className="btn btn-outline-primary me-2 p-2 flex-fill bd-highlight"
              >
                Regis
              </button>
            </NavLink>
            <button
              type="button"
              className="btn btn-outline-primary me-2 p-2 flex-fill bd-highlight"
            >
              Registrarse
            </button> */}
            <a
              class="btn btn-outline-primary me-2 p-2 flex-fill bd-highlight"
              href="http://localhost:3000/login"
              role="button"
            >
              Iniciar sesión
            </a>
            <a
              class="btn btn-outline-primary me-2 p-2 flex-fill bd-highlight"
              href="http://localhost:3000/registro"
              role="button"
            >
              Registrarse
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
