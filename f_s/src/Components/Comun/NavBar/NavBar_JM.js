import React from "react";
import "./navBar.css";
import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
export default function NavBar_JM() {
  const location = useLocation();
  const url = location.pathname;
  console.log("My PAAAAAAAAAAAAATHHH>>>>>>", location.pathname);
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
                to={`/HomeUsExt`}
                className={({ location }) =>
                  (location =
                    url === "/HomeUsExt" ? "nav-link active" : "nav-link")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cotizar servicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contactenos
              </a>
            </li>

            {/* DropDown */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown04"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown04">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>

          <div>
            <button
              type="button"
              className="btn btn-outline-primary me-2 p-2 flex-fill bd-highlight"
            >
              Iniciar sesión
            </button>
            <button
              type="button"
              className="btn btn-primary p-2 flex-fill bd-highlight"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
