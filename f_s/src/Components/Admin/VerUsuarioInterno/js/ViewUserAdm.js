import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router";
import { NavLink } from "react-router-dom";

import RequestsData from "../../../../services/requests.http";
import Section_cards from "./cards";

function ViewUserAdm() {
  const [users, setCardsUsers] = useState([]);

  useEffect(() => {
    retrieveCardsUsers(); //traerse los usuarios
  }, []);

  const retrieveCardsUsers = () => {
    RequestsData.getAll()
      .then((response) => {
        console.log(response.data.resultados, "🔥");
        setCardsUsers(
          response.data.resultados.find((o) => o.name === "Robert Baratheon")
        );
        console.log(
          response.data.resultados.find((o) => o.name === "Robert Baratheon"),
          "👻👻👻👻"
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // const navigate = useNavigate();
  const { courseId } = useParams(); //-courseId porque asi es como se puso en el Route
  const USERINF = `${users.name}, ${users.email}`; //!

  return (
    <section class="addUserBody container-fluid">
      <div class="grid">
        <main>
          <br></br>
          <section
            id="mid"
            class="container-fluid d-flex justify-content-center"
          >
            <div class="row">
              <div class="col-md-9">
                <NavLink to={`Admin-user-int/${USERINF}`}>
                  <Section_cards />
                </NavLink>
              </div>
              <div class="col-md-3">
                <Outlet />
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}

export default ViewUserAdm;
