import React from "react";
import NewNavBar from "../../Comun/NavBar/NavBar_JM";
import "../../Comun/NavBar/navBar.css";
import Footer from "../../Comun/footer/footer";
import delivery from "../OrdenDespacho/delivery-truck.png";
export default function OrdenDespacho() {
  return (
    <div>
      <nav>
        <NewNavBar />
      </nav>

      <div class="container">
        <main>
          <div class="py-5 text-center">
            <img
              class="d-block mx-auto mb-4"
              src={delivery}
              alt=""
              width="72"
              height="57"
            />
            <h2>Ordenar</h2>
            <p class="lead">
              Llenar todos los campos requeridos y verificar que la información
              provista sea valida.
            </p>
          </div>

          <div class="row g-5">
            <div class="col-md-5 col-lg-4 order-md-last">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-primary">Total</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$2.000.000</strong>
                </li>
              </ul>
            </div>
            <div class="col-md-7 col-lg-8">
              <h4 class="mb-3">Dirección de Envio</h4>
              <form class="needs-validation" novalidate>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">Ingrese su nombre.</div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">
                      Apellido
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">Ingrese su apellido.</div>
                  </div>

                  <div class="col-12">
                    <label for="username" class="form-label">
                      Usuario
                    </label>
                    <div class="input-group has-validation">
                      <span class="input-group-text">@</span>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Username"
                        required
                      />
                      <div class="invalid-feedback">
                        Nombre de usuario no valido.
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="you@example.com"
                      required
                    />
                    <div class="invalid-feedback">
                      Ingrese una Dirección de correo valida.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">
                      Dirección
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    />
                    <div class="invalid-feedback">
                      Por favor ingrese una Dirección.
                    </div>
                  </div>

                  <div class="col-md-5">
                    <label for="departamento" class="form-label">
                      Departamento
                    </label>
                    <select class="form-select" id="ciudad" required>
                      <option value="">Escoje...</option>
                      <option>Antioquia</option>
                    </select>
                    <div class="invalid-feedback">
                      seleccione un departamento.
                    </div>
                  </div>
                  <div class="col-md-5">
                    <label for="ciudad" class="form-label">
                      Municipio o Ciudad
                    </label>
                    <select class="form-select" id="ciudad" required>
                      <option value="">Escoje...</option>
                      <option>Medellin</option>
                    </select>
                    <div class="invalid-feedback">
                      seleccione un municipio o ciudad.
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="zip" class="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Zip code es requerido.</div>
                  </div>
                </div>

                <hr class="my-4" />

                {/* <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="same-address"
                  />
                  <label class="form-check-label" for="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="save-info"
                  />
                  <label class="form-check-label" for="save-info">
                    Save this information for next time
                  </label>
                </div> */}

                <hr class="my-4" />

                <h4 class="mb-3">Medio de pago</h4>

                <div class="my-3">
                  <div class="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      checked
                      required
                    />
                    <label class="form-check-label" for="credit">
                      Credit card
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required
                    />
                    <label class="form-check-label" for="debit">
                      Debit card
                    </label>
                  </div>
                  {/* <div class="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required
                    />
                    <label class="form-check-label" for="paypal">
                      PayPal
                    </label>
                  </div> */}
                </div>

                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="cc-name" class="form-label">
                      Nombre en la tarjeta
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small class="text-muted">
                      EL nombre completo que aparece en su tarjeta
                    </small>
                    <div class="invalid-feedback">Nombre es requerido</div>
                  </div>

                  <div class="col-md-6">
                    <label for="cc-number" class="form-label">
                      Numero de la tarjeta
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      El numero de la tarjeta es requerido
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-expiration" class="form-label">
                      Expiración
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      Fecha de expiración de la tarjeta
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-cvv" class="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">codigo CVV es requerido</div>
                  </div>
                </div>

                <hr class="my-4" />

                <button class="w-100 btn btn-primary btn-lg" type="submit">
                  Confirmar Compra
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
