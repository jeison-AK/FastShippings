import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Component imports
import Home from "./Components/UsuarioExterno/Home/homeComp";
import AboutUSmain from "./Components/Comun/AboutUs/about_us";
import Registro from "./Components/LandingPage/Registro/registro";
import OrdenDespacho from "../src/Components/UsuarioExterno/OrdenDespacho/ordenDespacho";

// Section admin
import ViewUserAdm from "./Components/Admin/VerUsuarioInterno/js/ViewUserAdm";
import Add_user from "./Components/Admin/AgregarUsuarioInterno/add_user";
import Edit_user from "./Components/Admin/EditarUsuarioInterno/editUI";
import Info_user from "./Components/Admin/VerUsuarioInterno/js/info_user";

// Sectión Inter User
import Rutas from "./Components/UsuarioInterno/Rutas/rutas";
import ViewHisUI from "./Components/UsuarioInterno/Historial/js/ViewHisUI";
import Info_orden from "./Components/UsuarioInterno/Historial/js/info_orden";

// Section Landing Page
import HomeP from "./Components/LandingPage/Principal/home";
import Login from "./Components/LandingPage/Login/Login";
import Solicitud from "./Components/UsuarioInterno/Solicitudes/Solicitud";
import NotFound from "./Components/Comun/404NotFound/NotFound";
import { NavBar_Adm } from "./Components/Comun/NavBar/NavBar_Adm";
import Footer from "./Components/Comun/footer/footer";
import Separador from "./Components/Comun/Separador/separador";

function App() {
  return (
    <Router>
      <NavBar_Adm />
      <Separador />
      <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/HomeUsExt" element={<Home />} />
        <Route path="/OrdenarDespacho" element={<OrdenDespacho />} />

        <Route path="/Admin-user-int" element={<ViewUserAdm />}>
          <Route index element={<main style={{ padding: "1rem" }}></main>} />
          <Route path=":userID" element={<Info_user />} />
        </Route>
        <Route path="/Edit_User" element={<Edit_user />} />
        <Route path="/Add_User" element={<Add_user />} />

        <Route path="/rutas" element={<Rutas />} />
        <Route path="/historialui" element={<ViewHisUI />}>
          <Route index element={<main style={{ padding: "1rem" }}></main>} />
          <Route path=":userID" element={<Info_orden />} />
        </Route>
        <Route path="/about" element={<AboutUSmain />} />

        {/* ruta login*/}
        <Route path="/Login" element={<Login />} />
        {/* ruta solicudes rno*/}
        <Route path="/Solicitud" element={<Solicitud />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

//Navigate replace redirecciona
// no usamos <a> tags porque recarga toda la pagina en su lugar usamos Link
//outlet indica en qué parte de la pagina cargar algún componente
//useParams para hacer uso de :id parametros que se pasen en la url
//element={<>} lo que va aquí son los componentes que injectamos
//TEST ve al link courses/TuNombre   pon tu nombre allí, observa Courses() y CourseId()
//NavLink similar a useParams también te redirecciona
//useNavigate te puedes traer información de alguna pagina pasando el valor en el 2do argumento {state:"value"}, ver CourseId(), Dashboard()
//no tiene que ser un string {state: value} siempre
//Podemos usar Link en lugar de useNavigate, aqui el state siempre sera un string
