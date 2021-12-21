import { React } from "react";
import { useParams } from "react-router-dom";

function DeleteModal() {
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
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#DeleteModal"
      >
        Eliminar
      </button>
      {/* modal */}
      <div
        class="modal fade"
        id="DeleteModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-warning">
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">
                Eliminar {test[0]}
              </h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Estas a punto de eliminar al usuario <strong>{test[0]}</strong>,
              ¿Estás seguro de lo que hace?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger">
                Confirmar eliminación
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

export default DeleteModal;
