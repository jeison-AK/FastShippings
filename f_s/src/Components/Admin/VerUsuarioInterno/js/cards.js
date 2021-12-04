import React from "react";
import "../css/services.css";
import { useLocation, useSearchParams, NavLink } from "react-router-dom";
import { getAccounts } from "./data";

function Section_cards() {
  let [searchParams, setSearchParams] = useSearchParams();
  let acounts = getAccounts();

  function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }
  return (
    <section id="services" class="services">
      <div class="container h-100 p-5 text-white bg-dark rounded-3 ">
        <div class="section-title " data-aos="fade-in" data-aos-delay="100">
          <h2 class="pb-3 border-bottom">Usuarios</h2>

          {/* <input
                            placeholder="Introduzca documento"
                            value={searchParams.get("filter") || ""}
                            onChange={event => {
                            let filter = event.target.value;
                            if (filter) {
                                setSearchParams({ filter });
                            } else {
                                setSearchParams({});
                        }}}/> */}

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
          {acounts
            .filter((acount) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = acount.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((acount) => (
              // Esto lo que hace es aplicar el "mapeo" en la consulta y lo erroja como link
              <NavLink
                style={({}) => ({
                  display: "flex",
                  alignItems: "between",
                  margin: "10px 0px",
                  // color: isActive ? "red" : "",
                })}
                to={``}
                key={acount.cc}
              >
                <div class="icon-box" data-aos="fade-up">
                  <h4 class="title">{acount.name}</h4>
                  <p class="description">
                    <b>Job:</b> Front-end newbie
                    <br></br>
                    <b>Document:</b> {acount.cc}
                    <br></br>
                    <b>Rol:</b> Usuario Interno<br></br>
                  </p>
                </div>
              </NavLink>
            ))}

          <p>
            {" "}
            Esta sección está dedicada para la búsqueda de usuarios internos por
            su documento de identidad (ID). <br></br>Pruebe libremente, por
            favor, con alguno de los documentos relacionados en la base de datos
            que se le proporcionó anteriormente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section_cards;
