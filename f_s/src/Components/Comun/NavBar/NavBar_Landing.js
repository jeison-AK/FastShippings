import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export function NavBar_Landing() {
  const location = useLocation();
  const url = location.pathname;
  return (
    <div className="navbar navbar-expand-md navbar-light fixed-top bg-light grid navigation">
      <div className="container-fluid nav-tabs ">
        <NavLink className="navbar-brand" to="/">
          <img clas="" src="https://i.ibb.co/2FSrXtq/LOGO-82x64.jpg" />
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
            <li className="nav-item">
              <NavLink
                to={`/`}
                className={({}) =>
                  url === "/" ? "nav-link active" : "nav-link "
                }
              >
                Home
              </NavLink>
            </li>
          </ul>

          <div>
            {/* <a href="#">
              <button
                type="button"
                className="btn btn-info me-2 p-2 flex-fill bd-highlight"
              >
                Mi cuenta
              </button>
            </a> */}
            <NavLink to="/login">
              <button
                type="button"
                className="btn btn-outline-primary me-2 p-2 flex-fill bd-highlight"
              >
                Iniciar sesión
              </button>
            </NavLink>
            <NavLink to="/registro">
              <button
                type="button"
                className="btn btn-primary me-2 p-2 flex-fill bd-highlight"
              >
                Registrarse
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
