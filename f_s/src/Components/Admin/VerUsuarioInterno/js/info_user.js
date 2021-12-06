import React from "react";
import "../css/info_user.css";
import Button_delete from "./btn_edit_del";
import { useParams, useNavigate } from "react-router-dom";
import { getAccounts, deleteAccounts } from "./data";

function Info_user() {
  let navigate = useNavigate();
  let params = useParams();
  let acounts = getAccounts(parseInt(params.userID, 10));
  return (
    <div class="card container h-80 p-3 bg-white rounded-3">
      <img
        src="https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          <strong>Información Usuario</strong>
        </h5>
        <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <strong>Name: </strong> {acounts.name}
        </li>
        <li class="list-group-item">
          <strong>CC: </strong> {acounts.cc}
        </li>
        <li class="list-group-item">
          <strong>Contact: </strong> {acounts.contact}
        </li>
        <li class="list-group-item">
          <strong>Fecha de nacimiento: </strong> {acounts.due}
        </li>
        <li class="list-group-item">
          <strong>Descripción: </strong> {acounts.description}
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

export default Info_user;
