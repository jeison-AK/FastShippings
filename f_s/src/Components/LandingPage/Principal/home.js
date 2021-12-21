import React from "react";

function HomeP() {
  return (
    <div class="grid">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.pexels.com/photos/7203788/pexels-photo-7203788.jpeg?cs=srgb&dl=pexels-shvets-production-7203788.jpg&fm=jpg"
              class="d-block w-100"
              alt="cajas"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Despachos Certificados</h5>
              <p>Su empresa de confianza</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6169668.jpg&fm=jpg"
              class="d-block w-100"
              alt="Delivery"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Despachos Certificados</h5>
              <p>Envíos rápidos y efectivos</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/6170458/pexels-photo-6170458.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6170458.jpg&fm=jpg"
              class="d-block w-100"
              alt="entrega"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Despachos Certificados</h5>
              <p>Cotice sus envíos</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          <div class="d-grid gap-2 d-md-flex justify-content-md-start"></div>
        </div>
        <div class="clientes">
          <h2>Nuestros Clientes</h2>
          <span class="placeholder col-12 bg-secondary"></span>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <a href="https://www.exito.com/" target={"_blank"}>
               <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/03/Grupo_Exito_logo.svg"
                alt="Grupo-Exito"
                border="0"
              /> </a>
            </div>
            <div class="col-sm">
            <a href="https://grupobancolombia.com/" target={"_blank"}>
              <img
                src="https://marcas-logos.net/wp-content/uploads/2021/06/Bancolombia-logo.png"
                alt="bancol"
                border="0"
              /></a>
            </div>
            <div class="col-sm">
            <a href="https://www.uninorte.edu.co/" target={"_blank"}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Logo_uninorte_colombia.jpg"
                alt="uninorte"
                border="0"
              /></a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <a href="https://www.lg.com/co" target={"_blank"}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg"
                alt="lg"
                border="0"
              /></a>
            </div>
            <div class="col-sm">
            <a href="https://shop.samsung.com.co/" target={"_blank"}>
              <img
                src="https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-4.png"
                alt="samsung"
                border="0"
              /></a>
            </div>
            <div class="col-sm">
            <a href="https://www.asus.com/co/" target={"_blank"}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png"
                alt="asus"
                border="0"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeP;
