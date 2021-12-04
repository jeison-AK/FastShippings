import React from "react";
import "./NavBar_JM";
import { useLocation, NavLink } from "react-router-dom";
export default function NavBar_Adm() {
  const location = useLocation();
  const url = location.pathname;
  console.log("🔥My PAATH>>>>>>", url);
  return (
    <div className="navbar navbar-expand-md navbar-light fixed-top bg-light grid">
      <div className="container-fluid nav-tabs">
        <a className="navbar-brand" href="#">
          <img clas="" src="https://i.ibb.co/2FSrXtq/LOGO-82x64.jpg" />
        </a>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown04"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Visualizar como
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown04">
                <li className="nav-item">
                  <NavLink
                    to={`/Admin-user-int`}
                    className={({}) =>
                      url === "/Admin-user-int" ? "nav-link active" : "nav-link"
                    }
                  >
                    Administrador
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/Admin-user-int`}
                    className={({}) =>
                      url === "/Admin-user-int" ? "nav-link active" : "nav-link"
                    }
                  >
                    Usuario Interno
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/HomeUsExt`}
                    className={({}) =>
                      url === "/HomeUsExt" ? "nav-link active" : "nav-link"
                    }
                  >
                    Usuario Externo
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contactenos
              </a>
            </li>
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
    </div>
  );
}
