import React from "react";
import "../Solicitudes/Principal/S1.css";
import Despliejesolicitudes from "./Principal/S1";
import NavBar_CC from "../../Comun/NavBar/NavBar_CC";
import Footer from "../../Comun/footer/footer";


function Solicitud() {
    return(
        <main className="solicitud-principal">
            <NavBar_CC />
            <div>
                <Despliejesolicitudes/>
                
            </div>
            <Footer/>
        </main>
                            

    ) 
    
}
export default Solicitud;