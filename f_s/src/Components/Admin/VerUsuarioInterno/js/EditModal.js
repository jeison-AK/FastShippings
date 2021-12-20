import { React } from "react";
import { useParams } from "react-router-dom";
import Edit_user from "../../EditarUsuarioInterno/editUI";

function EditModal() {
  const { paramsID } = useParams();
  const params = { paramsID };
  const test = params.paramsID.split(",");
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
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#EditModal"
      >
        Editar
      </button>
      {/* modal */}
      <div
        class="modal fade"
        id="EditModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-success">
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">
                Editar {test[0]}
              </h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Edit_user />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
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
