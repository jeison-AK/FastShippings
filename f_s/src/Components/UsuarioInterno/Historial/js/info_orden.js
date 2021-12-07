import React from "react";
import "../css/info_user.css";
import Button_delete from "./btn_edit_del";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { getAccounts, deleteAccounts } from "./data";

function Info_orden() {
  let navigate = useNavigate();
  let params = useParams();
  let searchURL = useSearchParams();
  let acounts = getAccounts(params.userID);
  let accounts = getAccounts();
  return (
    <div class="card container h-80 p-3 bg-white rounded-3">
      <img
        src="https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          <strong>Información Orden de Despacho</strong>
        </h5>
        <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <strong>Status: </strong> {acounts.status}
        </li>
        <li class="list-group-item">
          <strong>Punto de origen: </strong> {acounts.puntoo}
        </li>
        <li class="list-group-item">
          <strong>Punto de destino: </strong> {acounts.puntod}
        </li>
        <li class="list-group-item">
          <strong>Valor por kilometro: </strong> {acounts.valor_km}
        </li>
        <li class="list-group-item">
          <strong>Distancia: </strong> {acounts.distancia}
        </li>
      </ul>
      <div class="card-body">
        <Button_delete />
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            deleteAccounts(acounts.cc);
            navigate("/Add_User");
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Info_orden;
