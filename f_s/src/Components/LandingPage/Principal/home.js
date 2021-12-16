import React from "react";

function HomeP() {
  return (
    <div class="grid">
      <div
        id="carouselExampleIndicators"
        class="carousel carousel-dark slide grid"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img
              src="https://images.pexels.com/photos/7203788/pexels-photo-7203788.jpeg?cs=srgb&dl=pexels-shvets-production-7203788.jpg&fm=jpg"
              class="d-block w-100 img-fluid"
              alt="package"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6169668.jpg&fm=jpg"
              class="d-block w-100 img-fluid"
              alt="delivery"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/6170458/pexels-photo-6170458.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6170458.jpg&fm=jpg"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/5025646/pexels-photo-5025646.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              class="d-block w-100 img-fluid"
              alt="entrega"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <p></p>
        <span class="placeholder col-12 bg-primary"></span>
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
          <h2 id="scrollAbout">Sobre nosotros:</h2>
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
    </div>
  );
}

export default HomeP;
