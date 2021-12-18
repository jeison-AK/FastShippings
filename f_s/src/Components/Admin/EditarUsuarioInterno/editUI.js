import "../AgregarUsuarioInterno/add_user.css";

function Edit_user() {
  return (
    <section className="addUserBody">
      <div className="container-md ">
        <main className="addUser">
          <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">
                Nombre y Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Ingrese nombre/s y apellido/s."
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">
                Documento
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="Ingrese documento de identidad."
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustomUsername" className="form-label">
                Email
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  📧
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Ingrese Correo Electrónico."
                  required
                />
                <div className="invalid-feedback">Please choose a Email.</div>
              </div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom03" className="form-label">
                Contacto
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                placeholder="Ingrese número de contacto."
                required
              />
              <div className="invalid-feedback">
                Please provide a valid contact.
              </div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom04" className="form-label">
                Rol
              </label>
              <select className="form-select" id="validationCustom04" required>
                <option selected disabled value="">
                  Choose...
                </option>
                {/* <option>Administrador</option> */}
                {/* <option>Usuario Externo</option> */}
                <option>Usuario Interno</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom05" className="form-label">
                Due
              </label>
              <input
                type="date"
                className="form-control"
                id="validationCustom05"
                placeholder="Ingrese fecha de nacimiento."
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom06" className="form-label">
                Job
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom06"
                placeholder="Ingrese puesto de trabajo"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom07" className="form-label">
                Descripción
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom07"
                placeholder="Ingrese breve descripción"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
}
export default Edit_user;
