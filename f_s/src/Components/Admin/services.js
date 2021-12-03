import React from "react";
import "./services.css"
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import { deleteAccounts, getAccount } from "./data";

function Services_Cards () {
    let [searchParams, setSearchParams] = useSearchParams();
    let account = getAccount(parseInt(params.accounDoc, 1995));
    let navigate = useNavigate();
    let params = useParams();
    return (
        <section id="services" class="services">
            <div class="container h-100 p-5 text-white bg-dark rounded-3">

                <div class="section-title " data-aos="fade-in" data-aos-delay="100">
                    <h2 class="pb-3 border-bottom" >Usuarios</h2>

                        <input
                            placeholder="Introduzca documento"
                            value={searchParams.get("accounts") || ""}
                            onChange={event => {
                            let filter = event.target.value;
                            if (filter) {
                                setSearchParams({ filter });
                            } else {
                                setSearchParams({});
                        }}}/>
                        

                    <p> Esta sección está dedicada para la búsqueda de usuarios internos por su documento de identidad (ID). <br></br>Pruebe libremente, por favor, con alguno de los documentos relacionados en la base de datos que se le proporcionó anteriormente.
                    </p>
                </div>

                <div class="row">

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h4 class="title"><a href=""> { getAccount.name} </a></h4>
                            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div class="icon"><i class="bx bx-file"></i></div>
                            <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                            <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div class="icon"><i class="bx bx-tachometer"></i></div>
                            <h4 class="title"><a href="">Magni Dolores</a></h4>
                            <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div class="icon"><i class="bx bx-world"></i></div>
                            <h4 class="title"><a href="">Nemo Enim</a></h4>
                            <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>
                        
                    <button
                        onClick={() => {
                            deleteAccounts(account.cc);
                            navigate("/Account");
                        }   }
                        >
                        Delete
                    </button>
                    
                </div>

            </div>
        </section>

    );
}

export default Services_Cards;