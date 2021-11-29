import React from 'react';
import "./navBar.css"

// import "./navBar.css"
function NewNavBar () {
    return (
        
        // Contener principal del navbar
        <div class="container-fluid fixed-top bg-white">
            <header class="d-flex flex-wrap  justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            
            {/* <-- icono--> */}
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src="https://i.ibb.co/2FSrXtq/LOGO-82x64.jpg" />
            </a>

            {/* <-- Redireccionamientos--> */}
            <ul class="nav col-12 col-md-auto mb-2 p-2  ">
                <li><a href="#" class="nav-link px-2 link-darkd-flex p-2 flex-fill bd-highlight">Servicios</a></li>
                <li><a href="#" class="nav-link px-2 link-dark d-flex p-2 flex-fill bd-highlight">Cotizar servicio</a></li>
                <li><a href="#" class="nav-link px-2 link-dark d-flex p-2 flex-fill bd-highlight">Nosotros</a></li>
                <li><a href="#" class="nav-link px-2 link-dark d-flex p-2 flex-fill bd-highlight">Contactenos</a></li>
                
            </ul>

            {/* <-- Botones--> */}
            <div class="col-md-auto mb-2 p-2 text-end p-2 ">
                <button type="button" class="btn btn-outline-primary me-2 p-2 flex-fill bd-highlight">Iniciar sesión</button>
                <button type="button" class="btn btn-primary p-2 flex-fill bd-highlight">Registrarse</button>
            </div>
            </header>

        </div>
    );
}

export default NewNavBar;

