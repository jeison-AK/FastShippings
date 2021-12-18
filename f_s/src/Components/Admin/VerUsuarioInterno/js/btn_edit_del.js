import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAccounts, deleteAccounts } from "./data";

function Button_delete() {
  const style = {
    margin: "0.5em",
    listStyle: "none",
  };
  let params = useParams();
  let navigate = useNavigate();
  let account = getAccounts(parseInt(params.userID, 10));
  return (
    <div>
      <button
        style={style}
        className="btn btn-success"
        onClick={() => {
          navigate("/Admin-user-int/Edit_User");
        }}
        to={``} // Esto para redireccionar a la edición del usuario
      >
        Editar
      </button>

      <button
        style={style}
        className="btn btn-danger"
        onClick={() => {
          deleteAccounts(account.cc);
          navigate("Admin-user-int");
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default Button_delete;
