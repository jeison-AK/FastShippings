import React from "react";
import NavBar_admin from "./NavBar_admin";
import Section_cards from "./cards";
import Info_user from "./info_user";
import Footer from "../../../Comun/footer/footer";
import "../../../Admin/VerUsuarioInterno/css/carrucel.css"

//-Esta pagina cubre los siguientes requerimientos para el usuario externo:
// ❌	Darse de alta en la plataforma (Registrarse).
// ✅	Generar una orden de despacho indicando el nombre, descripción, y peso del producto. Así mismo, deberá ingresar la cantidad de vehículos necesarios para el transporte, el lugar de recogida y el lugar de entrega.
// ✅	Ver historial de ordenes de despacho.
// ✅	Filtrar órdenes de despacho de acuerdo a su estado
// ✅	Ver detalle de una orden de despacho.

function ViewUserAdm() {
    
  return (
    <div class="grid">
      <nav>
      <NavBar_admin />
      </nav>
      <main>
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
                src="https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?cs=srgb&dl=pexels-george-dolgikh-giftpunditscom-1666067.jpg&fm=jpg"
                class="d-block w-100 img-fluid"
                alt="package"
                />
            </div>
            <div class="carousel-item">
                <img
                src="https://images.pexels.com/photos/6867933/pexels-photo-6867933.jpeg?cs=srgb&dl=pexels-kindel-media-6867933.jpg&fm=jpg"
                class="d-block w-100 img-fluid"
                alt="delivery"
                />
            </div>
            <div class="carousel-item">
                <img
                src="https://cdn.pixabay.com/photo/2018/05/20/01/33/background-3414801_960_720.jpg"
                class="d-block w-100"
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

        <section id="mid" class="container-fluid d-flex justify-content-center">

            <div class="row">
                
                <div class="col-md-8">
                    <Section_cards />
                </div>

                <div class="col-md-4">
                    <Info_user />
                </div>
            
            </div>

        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ViewUserAdm;