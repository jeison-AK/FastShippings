import React from "react";
import "./carrusel.css";
import NavBar from "../../Comun/NavBar/NavBarHome";
import "../../Comun/NavBar/navBar.css";
import Footer from "../../Comun/footer/footer";

//-Esta pagina cubre los siguientes requerimientos para el usuario externo:
// ✅	Darse de alta en la plataforma (Registrarse).
// ✅	Iniciar sesión en su cuenta.

function Home() {
  return (
    <div class="grid">
      <nav>
        <NavBar />
      </nav>
      <main>
        {/* <section id="mid" class="container-fluid">
          <div class="row">
            <div class="col-md-8 ">
              
            </div>
            <div class="col-md-4">
              SideBar
              <p>
                para ver la info de la orden que se escoja del filtro y generar
                la orden
              </p>
            </div>
          </div>
        </section> */}
      </main>
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
      <Footer />
    </div>
  );
}

export default Home;
