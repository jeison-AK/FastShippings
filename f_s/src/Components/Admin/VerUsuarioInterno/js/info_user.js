import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/info_user.css";
import Button_delete from "./btn_edit_del";
import { getAccount } from "./data";

function Info_user() {
  const { paramID } = useParams(); //-paramID porque asi es como se puso en el Route
  console.log(paramID);
  // let accounts = getAccount(parseInt(params.userID, 10));
  const [users, setCardsUsers] = useState([]);
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
          <strong>Nombre: </strong> {paramID}
        </li>
        <li className="list-group-item">
          {/* <strong>Correo: </strong> {users.email} */}
        </li>
      </ul>
      <div class="card-body">
        <Button_delete />
      </div>
    </section>
  );
}

export default Info_user;
