import "../AgregarUsuarioInterno/add_user.css";

function Add_user() {
  return (
    <section class="addUserBody">
      <div class="container-md ">
        <main class="addUser">
          <div>
            <h1 className="tittle-add-user">Añadir Usuario Interno</h1>
          </div>
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
              <label for="validationCustom01" class="form-label">
                Nombre y Apellido
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  👤
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="Ingrese nombre/s y apellido/s."
                  required
                />
              </div>
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">
                Documento
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  🖋
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  placeholder="Ingrese documento de identidad."
                  required
                />
              </div>
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustomUsername" class="form-label">
                Email
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  📧
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Ingrese Correo Electrónico."
                  required
                />
                <div class="invalid-feedback">Please choose a Email.</div>
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom03" class="form-label">
                Contacto
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  📱
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  placeholder="Ingrese número de contacto."
                  required
                />
              </div>
              <div class="invalid-feedback">
                Please provide a valid contact.
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom04" class="form-label">
                Rol
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  👥
                </span>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  {/* <option>Administrador</option> */}
                  {/* <option>Usuario Externo</option> */}
                  <option>Usuario Interno</option>
                </select>
              </div>
              <div class="invalid-feedback">Please select a valid state.</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom05" class="form-label">
                Due
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  📆
                </span>
                <input
                  type="date"
                  class="form-control"
                  id="validationCustom05"
                  placeholder="Ingrese fecha de nacimiento."
                  required
                />
              </div>
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom06" class="form-label">
                Job
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  🖥
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom06"
                  placeholder="Ingrese puesto de trabajo"
                  required
                />
              </div>
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom07" class="form-label">
                Descripción
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  📃
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom07"
                  placeholder="Ingrese breve descripción"
                  required
                />
              </div>
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
}
export default Add_user;
