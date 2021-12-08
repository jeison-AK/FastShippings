import React from "react";
import NavBar from "../NavBar/NavBar_Reg";
import Footer from "../footer/footer";

function AboutUSmain() {
  return (
    <div class="container col-xxl-8 px-4 py-5 border rounded-3">
      <nav>
        <NavBar />
      </nav>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?cs=srgb&dl=pexels-tiger-lily-4481259.jpg&fm=jpg"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h2>Sobre nosotros:</h2>
          <span class="placeholder col-12 bg-secondary"></span>
          <p class="lead">
            La empresa de transportes Despachos Certificados Ltda, cuenta con
            cierta cantidad de vehículos, y se encarga de realizar la recogida
            de productos de un cliente, y llevarlos a donde este cliente le
            indique.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          </div>
        </div>
      </div>
      <div class="b-example-divider"></div>
      <footer>
        <Footer />
      </footer>
    </div>

    
  );
}

export default AboutUSmain;
