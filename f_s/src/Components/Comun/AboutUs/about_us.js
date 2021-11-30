import React from 'react';

// import "./navBar.css"
function AboutUSmain () {
    return (
        
        // Contener principal del navbar
        <div class="container col-xxl-8 px-4 py-5 border rounded-3">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://i.ibb.co/S724yYh/mapa-navegaci-n.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3" >Sobre nosotros:</h1>
            <p class="lead">La empresa de transportes Despachos Certificados Ltda, cuenta con cierta cantidad de vehículos, y se encarga de realizar la recogida de productos de un cliente, y llevarlos a donde este cliente le indique.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              
              <a class="btn btn-primary btn-lg px-4 me-md-2 "  >About us </a>
              <button type="button" class="btn btn-primary me-2 p-2 bd-highlight" src="#">About us</button>
            </div>
          </div>
        </div>
        <div class="b-example-divider"></div>
      </div>

    );
}

export default AboutUSmain;