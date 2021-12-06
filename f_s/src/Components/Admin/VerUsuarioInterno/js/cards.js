import React from "react";
import "../css/services.css";
import {
  useLocation,
  useSearchParams,
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { getAccounts, deleteAccounts } from "./data";

function Section_cards() {
  let [searchParams, setSearchParams] = useSearchParams();
  let accounts = getAccounts();
  let navigate = useNavigate();

  function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }
  return (
    <section id="services" class="services">
      <div class="container h-100 p-5 text-white bg-dark rounded-3 ">
        <div class="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2 class="pb-3 border-bottom">Usuarios</h2>
          <div class="input-add_user">
            <input
              placeholder="Introduzca documento"
              value={searchParams.get("filter") || ""}
              onChange={(event) => {
                let filter = event.target.value;
                if (filter) {
                  setSearchParams({ filter });
                } else {
                  setSearchParams({});
                }
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                deleteAccounts(accounts.cc);
                navigate("/Add_User");
              }}
            >
              Agregar
            </button>
          </div>
          <div class="cotainer">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-2">
              {accounts
                .filter((acount) => {
                  let filter = searchParams.get("filter");
                  if (!filter) return true;
                  let documento = acount.cc.toString();
                  return documento.startsWith(filter.toLowerCase());
                })
                .map((accounts) => (
                  // Esto lo que hace es aplicar el "mapeo" en la consulta y lo erroja como link
                  <QueryNavLink
                    style={({ isActive }) => ({
                      display: "flex",
                      alignItems: "between",
                      margin: "10px 0px",
                      color: isActive ? "#0064fa" : "white",
                    })}
                    to={`/Admin-user-int/${accounts.cc}`}
                    key={accounts.cc}
                  >
                    <div class="icon-box" data-aos="fade-up">
                      <h4 class="title">{accounts.name}</h4>
                      <p class="description">
                        <b>Job:</b> {accounts.job}
                        <br></br>
                        <b>Document:</b> {accounts.cc}
                        <br></br>
                        <b>Rol:</b> {accounts.rol}
                      </p>
                    </div>
                  </QueryNavLink>
                ))}
            </div>
          </div>
        </div>
        <p>
          {" "}
          Esta sección está dedicada para la búsqueda de usuarios internos por
          su documento de identidad (ID). <br></br>Pruebe libremente, por favor,
          con alguno de los documentos relacionados en la base de datos que se
          le proporcionó anteriormente.
        </p>
      </div>
    </section>
  );
}

export default Section_cards;
