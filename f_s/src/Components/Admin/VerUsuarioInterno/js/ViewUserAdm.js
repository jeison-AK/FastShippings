import React from "react";
import NavBar_admin from "../../../Comun/NavBar/NavBar_Adm";
import Section_cards from "./cards";
import Info_user from "./info_user";
import Footer from "../../../Comun/footer/footer";

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
