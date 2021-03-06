import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/info_user.css";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

function Info_user() {
  const { paramsID } = useParams(); //-paramsID porque asi es como se puso en el Route
  const params = { paramsID };
  const test = params.paramsID.split(",");
  return (
    <section class="card container h-80 p-3 bg-white rounded-4">
      <img
        src="https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          <strong>Info user</strong>
        </h5>
        <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
        <li className="list-group-item name_UI">
          <strong>Nombre: </strong> {test[0]}
        </li>
        <li className="list-group-item">
          <strong>Correo: </strong> {test[1]}
        </li>
      </ul>
      <div class="card-body">
        <div class="btn-group" role="group" aria-label="Basic example">
          <EditModal />
          <DeleteModal />
        </div>
      </div>
    </section>
  );
}

export default Info_user;
