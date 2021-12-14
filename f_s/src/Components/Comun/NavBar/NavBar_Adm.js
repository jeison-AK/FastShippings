import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export function NavBar_Adm() {
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
                      url === "/Admin-user-int" || "/Admin-user-int:userID"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Administrador
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/historialui`}
                    className={({}) =>
                      url === "/historialui" ? "nav-link active" : "nav-link"
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

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown04"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Perfil
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown04">
                <li className="nav-item">
                  <NavLink
                    to={""}
                    className={({}) => (url === "" ? "" : "nav-link")}
                  >
                    Ver Perfil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={""}
                    className={({}) => (url === "" ? "" : "nav-link")}
                  >
                    Editar Perfil
                  </NavLink>
                </li>
              </ul>
            </li>
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
            <li className="nav-item">
              <NavLink
                to={`/HomeUsExt`}
                className={({}) =>
                  url === "/HomeUsExt" ? "nav-link active" : "nav-link "
                }
              >
                HomeUsExt
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={`/Solicitud`}
                className={({}) =>
                  url === "/Solicitud" ? "nav-link active" : "nav-link "
                }
              >
                Solicitudes
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={`/historialui`}
                className={({}) =>
                  url === "/historialui" ? "nav-link active" : "nav-link "
                }
              >
                Historial
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={`/rutas`}
                className={() =>
                  url === "/rutas" ? "nav-link active" : "nav-link"
                }
              >
                Rutas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={`/about`}
                className={({}) =>
                  url === "/about" ? "nav-link active" : "nav-link "
                }
              >
                Sobre nosotros
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={``}
                className={({}) => (url === "" ? "" : "nav-link ")}
              >
                Contactenos
              </NavLink>
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
            <a href="/login">
              <button
                type="button"
                className="btn btn-outline-primary me-2 p-2 flex-fill bd-highlight"
              >
                Iniciar sesión
              </button>
            </a>
            <a href="/registro">
              <button
                type="button"
                className="btn btn-primary p-2 flex-fill bd-highlight"
              >
                Registrarse
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
