import React, { useState, useEffect } from "react";
import RequestUserData from "../../../../services/requests.http";
import "../css/info_user.css";
import Button_delete from "./btn_edit_del";
import { useParams } from "react-router-dom";
import { getAccount } from "./data";

function Info_user() {
  let params = useParams();
  const [cardUser, setCardUsers] = useState([]);

  const retrieveCardUser = () => {
    RequestUserData.getAll()
      .then((response) => {
        console.log(response.data.resultados, " 🥶🥶");
        console.log(response.data);
        setCardUsers(response.data.resultados);
        console.log(cardUser[0].name, "🤯🤯🤯");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveCardUser(); //traerse los usuarios
  }, []);

  const refreshList = () => {
    retrieveCardUser();
  };

  // let user = params.userID;
  let user = getUser(params.userID);
  function getUser(nombre) {
    return cardUser.find((info) => info.name === nombre);
  }

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
          <strong>Name: </strong> {user.name}
        </li>
        <li className="list-group-item">
          <strong>Email: </strong> {user.email}
        </li>
        {/* <li className="list-group-item">
          <strong>Job: </strong> {accounts.job}
        </li>
        <li className="list-group-item">
          <strong>Contact: </strong> {accounts.contact}
        </li>
        <li className="list-group-item">
          <strong>Fecha de nacimiento: </strong> {accounts.due}
        </li>
        <li className="list-group-item">
          <strong>Descripción: </strong> {accounts.description}
        </li> */}
      </ul>
      <div class="card-body">
        <Button_delete />
      </div>
    </section>
  );
}

export default Info_user;
