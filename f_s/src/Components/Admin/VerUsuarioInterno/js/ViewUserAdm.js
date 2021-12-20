// import React, { useState, useEffect } from "react";
// import { useParams, Outlet } from "react-router";
// import { NavLink } from "react-router-dom";

// import RequestsData from "../../../../services/requests.http";
// import Section_cards from "./cards";

// function ViewUserAdm() {
//   // const [users, setCardsUsers] = useState([]);

//   // useEffect(() => {
//   //   retrieveCardsUsers(); //traerse los usuarios
//   // }, []);

//   // const retrieveCardsUsers = () => {
//   //   RequestsData.getAll()
//   //     .then((response) => {
//   //       console.log(response.data.resultados, "🔥");
//   //       setCardsUsers(
//   //         response.data.resultados.find((o) => o.name === "Robert Baratheon")
//   //       );
//   //       console.log(
//   //         response.data.resultados.find((o) => o.name === "Robert Baratheon"),
//   //         "👻👻👻👻"
//   //       );
//   //     })
//   //     .catch((e) => {
//   //       console.log(e);
//   //     });
//   // };
//   // // const navigate = useNavigate();
//   // const { courseId } = useParams(); //-courseId porque asi es como se puso en el Route
//   // const USERINF = `${users.name}, ${users.email}`; //!

//   return (
//     <section class="addUserBody container-fluid">
//       <div class="grid">
//         <main>
//           <br></br>
//           <section
//             id="mid"
//             class="container-fluid d-flex justify-content-center"
//           >
//             <div class="row">
//               <div class="col-md-9">
//                 <section class="addUserBody container-fluid">
//                   <section id="services" className="services">
//                     <div className="container h-100 p-5 text-white bg-dark rounded-3 ">
//                       <div
//                         className="section-title"
//                         data-aos="fade-in"
//                         data-aos-delay="100"
//                       >
//                         <h2 className="pb-3 border-bottom">Usuarios</h2>
//                         <div className="input-add_user">
//                           <input
//                             placeholder="Introduzca documento"
//                             value={searchParams.get("filter") || ""}
//                             onChange={(event) => {
//                               let filter = event.target.value;
//                               if (filter) {
//                                 setSearchParams({ filter });
//                               } else {
//                                 setSearchParams({});
//                               }
//                             }}
//                           />
//                           <button
//                             style={style}
//                             className="btn btn-primary"
//                             onClick={() => {
//                               navigate("/Add_User");
//                             }}
//                           >
//                             Agregar
//                           </button>
//                         </div>
//                         <div className="cotainer">
//                           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-2">
//                             {users
//                               .filter((nombre) => {
//                                 let filter = searchParams.get("filter");
//                                 if (!filter) return true;
//                                 let documento = nombre.name.toLowerCase();
//                                 return documento.startsWith(
//                                   filter.toLowerCase()
//                                 );
//                               })
//                               .map((users) => (
//                                 // Esto lo que hace es aplicar el "mapeo" en la consulta y lo erroja como link
//                                 <NavLink
//                                   style={({ isActive }) => ({
//                                     display: "flex",
//                                     alignItems: "between",
//                                     margin: "10px 0px",
//                                     color: isActive ? "#0064fa" : "white",
//                                   })}
//                                   to={`/Admin-user-int/${users.name},${users.email}`}
//                                   key={users.name}
//                                 >
//                                   <div className="icon-box" data-aos="fade-up">
//                                     <h4 className="title">{users.name}</h4>
//                                     <p className="description">
//                                       <b>Nombre:</b> {users.name} <br></br>
//                                       <b>Correo:</b> {users.email}
//                                     </p>
//                                     <span Id="Contenido" Style="Display:none;">
//                                       {`${JSON.stringify(
//                                         retriveOneCard(users.name),
//                                         null,
//                                         4
//                                       )}`}
//                                     </span>
//                                   </div>
//                                 </NavLink>
//                               ))}
//                           </div>
//                         </div>
//                       </div>
//                       <p>
//                         <br></br>
//                         Esta sección está dedicada para la búsqueda de usuarios
//                         internos por su documento de identidad (ID). <br></br>
//                         Pruebe libremente, por favor, con alguno de los
//                         documentos relacionados en la base de datos que se le
//                         proporcionó anteriormente.
//                       </p>
//                     </div>
//                     <Outlet />
//                   </section>
//                 </section>
//               </div>
//               <div class="col-md-3"></div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </section>
//   );
// }

// export default ViewUserAdm;
