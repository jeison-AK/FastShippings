import React, { useState, useEffect } from "react";
import "../css/services.css";
import RequestUserData from "../../../../services/requests.http";

import {
  useLocation,
  useSearchParams,
  NavLink,
  useNavigate,
} from "react-router-dom";
// import { getAccounts, deleteAccounts } from "./data";

function Section_cards() {
  const [cardUser, setCardUsers] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  // let accounts = getAccounts();
  let navigate = useNavigate();

  useEffect(() => {
    retrieveCardUser(); //traerse los usuarios
  }, []);

  const retrieveCardUser = () => {
    RequestUserData.getAll()
      .then((response) => {
        console.log("URL 💲💲💲", RequestUserData);
        console.log(response.data, "🐜🐜");
        console.log(response.data.resultados, " 🃏🃏");
        console.log(response.data);
        setCardUsers(response.data.resultados);
        console.log(response.data.resultados[0].name, "🤯🤯🤯");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrieveCardUser();
  };

  function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }

  const style = {
    margin: "0.5em",
    listStyle: "none",
  };
  return (
    <section id="services" className="services">
      <div className="container h-100 p-5 text-white bg-dark rounded-3 ">
        <div className="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2 className="pb-3 border-bottom">Usuarios</h2>
          <div className="input-add_user">
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
              style={style}
              className="btn btn-primary"
              onClick={() => {
                navigate("/Add_User");
              }}
            >
              Agregar
            </button>
          </div>
          <div className="cotainer">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-2">
              {cardUser
                .filter((acount) => {
                  let filter = searchParams.get("filter");
                  if (!filter) return true;
                  let documento = acount.name.toLowerCase();
                  return documento.startsWith(filter.toLowerCase());
                })
                .map((cardUser) => (
                  // Esto lo que hace es aplicar el "mapeo" en la consulta y lo erroja como link
                  <QueryNavLink
                    style={({ isActive }) => ({
                      display: "flex",
                      alignItems: "between",
                      margin: "10px 0px",
                      color: isActive ? "#0064fa" : "white",
                    })}
                    to={`/Admin-user-int/${cardUser.name}`}
                    key={cardUser.name}
                  >
                    <div className="icon-box" data-aos="fade-up">
                      <h4 className="title">{cardUser.user}</h4>
                      <p className="description">
                        <b>Estado de ruta:</b> {cardUser.name}
                        <br></br>
                        <b>Document:</b> {cardUser.email}
                        <br></br>
                        {/*<b>Rol:</b> {cardUser.rol} */}
                      </p>
                    </div>
                  </QueryNavLink>
                ))}
            </div>
          </div>
        </div>
        <p>
          <br></br>
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
