import "../AgregarUsuarioInterno/add_user.css";

function Add_user() {
  return (
    <section className="addUserBody">
      <div className="container-md ">
        <main className="editUser">
          <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-14">
              <label for="validationCustom01" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Ingresa el nombre..."
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-14">
              <label for="validationCustomUsername" className="form-label">
                Email
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Ingresa el correo..."
                  required
                />
                <div className="invalid-feedback">Please choose a Email.</div>
              </div>
            </div>
            <div className="col-md-7">
              <label for="validationCustom02" className="form-label">
                Documento
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="Digita un documento..."
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-5">
              <label for="validationCustom04" className="form-label">
                Rol
              </label>
              <select className="form-select" id="validationCustom04" required>
                <option selected disabled value="">
                  ...
                </option>
                <option>Admin</option>
                <option>Externo</option>
                <option>Interno</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            {/* <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div> */}
          </form>
        </main>
      </div>
    </section>
  );
}
export default Add_user;
