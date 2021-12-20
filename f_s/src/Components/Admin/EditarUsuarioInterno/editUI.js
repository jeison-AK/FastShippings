import { useParams } from "react-router-dom";

function Edit_user() {
  const { paramsID } = useParams();
  const params = { paramsID };
  const test = params.paramsID.split(",");
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
                placeholder={test[0]}
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
                  placeholder={test[1]}
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
                placeholder="Ingrese documento..."
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
export default Edit_user;
