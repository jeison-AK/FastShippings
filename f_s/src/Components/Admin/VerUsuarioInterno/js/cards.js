import React from "react";
import "../css/services.css"
import { useLocation, useSearchParams, NavLink } from "react-router-dom";
import { deleteAccounts, getAccount, getAccounts } from "./data";

function Section_cards () {
    let [searchParams, setSearchParams] = useSearchParams();
    let acounts = getAccounts();

    function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
    }
    return (
        <section id="services" class="services">
            <div class="container h-100 p-5 text-white bg-dark rounded-3 ">

                <div class="section-title " data-aos="fade-in" data-aos-delay="100">
                    <h2 class="pb-3 border-bottom" >Usuarios</h2>

                        {/* <input
                            placeholder="Introduzca documento"
                            value={searchParams.get("filter") || ""}
                            onChange={event => {
                            let filter = event.target.value;
                            if (filter) {
                                setSearchParams({ filter });
                            } else {
                                setSearchParams({});
                        }}}/> */}

                        <input
                            placeholder="Introduzca documento"
                            value={searchParams.get("filter") || ""}
                            onChange={event => {
                                let filter = event.target.value;
                                if (filter) {
                                setSearchParams({ filter });
                                } else {
                                setSearchParams({});
                                }
                            }}
                            />
                            {acounts
                            .filter(acount => {
                                let filter = searchParams.get("filter");
                                if (!filter) return true;
                                let name = acount.name.toLowerCase();
                                return name.startsWith(filter.toLowerCase());
                            })
                            .map(acount => ( 
                                // Esto lo que hace es aplicar el "mapeo" en la consulta y lo erroja como link
                                <NavLink
                                style={({ isActive }) => ({
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : ""
                                })}
                                to={`/acount/${acount.cc}`}
                                key={acount.cc}
                                >
                                {acount.name}
                                </NavLink>
                            ))}

                    <p> Esta sección está dedicada para la búsqueda de usuarios internos por su documento de identidad (ID). <br></br>Pruebe libremente, por favor, con alguno de los documentos relacionados en la base de datos que se le proporcionó anteriormente.
                    </p>
                </div>

                <div class="row">

                    <div class="col-md-6 col-lg-3 d-flex align-items-between mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h4 class="title"><a href="tarjet blank"> Santiago Urrego </a></h4>
                            <p class="description"><b>Datos breves</b><br></br>
                            <b>Job:</b> Front-end newbie<br></br>
                            <b>Document:</b> 1995<br></br>
                            <b>Rol:</b> Usuario Interno<br></br>
                            <b>Descripción:</b> Breve descripción del rol del usuario o lo que sea a lo que se le quiera hacer referencia del mismo</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-between mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div class="icon"><i class="bx bx-file"></i></div>
                            <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                            <p class="description"><b>Datos breves</b><br></br>
                            <b>Job:</b> Front-end newbie<br></br>
                            <b>Document:</b> 1995<br></br>
                            <b>Rol:</b> Usuario Interno<br></br>
                            <b>Descripción:</b> Breve descripción del rol del usuario o lo que sea a lo que se le quiera hacer referencia del mismo</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div class="icon"><i class="bx bx-tachometer"></i></div>
                            <h4 class="title"><a href="">Magni Dolores</a></h4>
                            <p class="description"><b>Datos breves</b><br></br>
                            <b>Job:</b> Front-end newbie<br></br>
                            <b>Document:</b> 1995<br></br>
                            <b>Rol:</b> Usuario Interno<br></br>
                            <b>Descripción:</b> Breve descripción del rol del usuario o lo que sea a lo que se le quiera hacer referencia del mismo</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div class="icon"><i class="bx bx-world"></i></div>
                            <h4 class="title"><a href="">Nemo Enim</a></h4>
                            <p class="description"><b>Datos breves</b><br></br>
                            <b>Job:</b> Front-end newbie<br></br>
                            <b>Document:</b> 1995<br></br>
                            <b>Rol:</b> Usuario Interno<br></br>
                            <b>Descripción:</b> Breve descripción del rol del usuario o lo que sea a lo que se le quiera hacer referencia del mismo</p>
                        </div>
                    </div>

                </div>
                
            </div>

        </section>

    );
}

export default Section_cards;