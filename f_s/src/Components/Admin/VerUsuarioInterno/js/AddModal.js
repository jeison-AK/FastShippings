import Add_user from "../../AgregarUsuarioInterno/add_user";

function EditModal() {
  const style = {
    margin: "0.5em",
    listStyle: "none",
  };

  return (
    <div>
      {/* ---------------------------------------------- */}
      <button
        style={style}
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#AddModal"
      >
        Agregar usuario
      </button>
      {/* modal */}
      <div
        class="modal fade"
        id="AddModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-primary">
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">
                Agregando un usuario
              </h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Add_user />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success">
                Guardar Cambios
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------- */}
    </div>
  );
}

export default EditModal;
