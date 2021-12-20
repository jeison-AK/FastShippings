import { React } from "react";
import { useParams } from "react-router-dom";

function DeleteModal() {
  const { courseId } = useParams();
  const params = { courseId };
  const test = params.courseId.split(",");
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
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Eliminando usuario {test[0]}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Estas a punto de eliminar a este usuario, estás seguro?
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
