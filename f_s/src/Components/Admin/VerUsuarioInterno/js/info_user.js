import React from "react";
import "../css/info_user.css";
import Button_delete from "./btn_edit_del";


function Info_user () {
    return (
        <div class="card container h-80 p-3 bg-white rounded-3" >
            <img src="https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title"><strong>Santiago (Ejemplo)</strong></h5>
                <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Name: </strong>Santiago Urrego</li>
                <li class="list-group-item"><strong>CC: </strong>1995</li>
                <li class="list-group-item"><strong>Contact: </strong>+57 300 333 0000</li>
                <li class="list-group-item"><strong>Fecha de nacimiento: </strong>12/05/1995</li>
            </ul>
            <div class="card-body">
                <Button_delete />
            </div>
            
        </div>

    )
}

export default Info_user;