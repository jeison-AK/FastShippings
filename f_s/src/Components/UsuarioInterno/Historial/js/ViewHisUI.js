import React from "react";
import Section_cards from "./cards";
import { Outlet } from "react-router";

function ViewHisUI() {
  return (
    <div class="grid">
      <main>
        <section id="mid" class="container-fluid d-flex justify-content-center">
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
  );
}

export default ViewHisUI;
