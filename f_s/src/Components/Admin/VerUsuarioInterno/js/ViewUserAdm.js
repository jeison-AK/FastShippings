import React from "react";
import Section_cards from "./cards";
import { Outlet } from "react-router";

function ViewUserAdm() {
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
                <Section_cards />
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
