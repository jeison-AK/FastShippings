import React from "react";
import "../../LandingPage/Login/SLogin.css";
import Opciones from "../Login/Label/Label";
import NavBar_CC from "../../Comun/NavBar/NavBar_CC";
import Footer from "../../Comun/footer/footer";

function Login (){
    return (
        <main className="principal">
            <NavBar_CC />
            <div>
                <section className="contenedor-principal">                    
                    <h1 className="titulo">INICIA SESIÓN</h1>
                    <Opciones />
                    <Footer/>
                </section>           
            </div>

        </main>    
    )
};

export default Login;