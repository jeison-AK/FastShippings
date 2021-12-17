import React from "react";
import "../css/services.css";
import { useLocation, useSearchParams, NavLink } from "react-router-dom";
import { getAccounts } from "./data";

function Section_cards() {
  let [searchParams, setSearchParams] = useSearchParams();
  let accounts = getAccounts();

  function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }
  return (
    <section id="services" class="services">
      <div class="container h-100 p-5 text-white bg-dark rounded-3 ">
        <div class="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2 class="pb-3 border-bottom">Historial de ordenes de despacho</h2>
          <input
            placeholder="Introduzca el estado"
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
          <div class="cotainer">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-2">
              {accounts
                .filter((acount) => {
                  let filter = searchParams.get("filter");
                  if (!filter) return true;
                  let estado = acount.status.toLowerCase();
                  return estado.startsWith(filter.toLowerCase());
                })
                .map((accounts) => (
                  // Esto lo que hace es aplicar el "mapeo" en la consulta y lo erroja como link
                  <QueryNavLink
                    style={({ isActive }) => ({
                      display: "flex",
                      alignItems: "between",
                      margin: "10px 0px",
                      color: isActive ? "red" : "",
                    })}
                    to={`/historialui/${accounts.status}`}
                    key={accounts.status}
                  >
                    <div class="icon-box" data-aos="fade-up">
                      <h4 class="title">{accounts.status}</h4>
                      <p class="description">
                        <b>Punto de origen:</b> {accounts.puntoo}
                        <br></br>
                        <b>Punto de destino:</b> {accounts.puntod}
                        <br></br>
                        <b>Distancia (KM):</b> {accounts.distancia}
                      </p>
                    </div>
                  </QueryNavLink>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_cards;
