import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  NavLink,
  useNavigate,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";

//Component imports
// import Home from "./Components/LandingPage/Principal/home"
import Home from "./Components/UsuarioExterno/Home/homeComp";
// import HomeExt from "./Components/UsuarioExterno/Home/homeComp";
/* import NewNavBar from "./Components/Comun/NavBar/NavBar_JM"; */
import AboutUSmain from "./Components/Comun/AboutUs/about_us";
import Registro from "./Components/LandingPage/Registro/registro";
import OrdenDespacho from "../src/Components/UsuarioExterno/OrdenDespacho/ordenDespacho";

// Section admin
import ViewUserAdm from "./Components/Admin/VerUsuarioInterno/js/ViewUserAdm";
import Add_user from "./Components/Admin/AgregarUsuarioInterno/add_user";
import Edit_user from "./Components/Admin/EditarUsuarioInterno/editUI";
import Info_user from "./Components/Admin/VerUsuarioInterno/js/info_user";
import Rutas from "./Components/UsuarioInterno/Rutas/rutas";
import Login from "./Components/LandingPage/Login/Login";
import Solicitud from "./Components/UsuarioInterno/Solicitudes/Solicitud";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        {/* <Route path="/HomeExt" element={<HomeExt />} /> */}
        <Route path="/HomeUsExt" element={<Home />} />
        <Route path="/OrdenarDespacho" element={<OrdenDespacho />} />

        <Route path="/Admin-user-int" element={<ViewUserAdm />}>
          <Route index element={<main style={{ padding: "1rem" }}></main>} />
          <Route path=":userID" element={<Info_user />} />
        </Route>
        <Route path="/Edit_User" element={<Edit_user />} />
        <Route path="/Add_User" element={<Add_user />} />

        <Route path="rutas" element={<Rutas />} />
        <Route path="/about" element={<AboutUSmain />} />

        {/* ruta login*/}
        <Route path="/Login" element={<Login />} />
        {/* ruta solicitudes usuario interno*/}
        <Route path="/Solicitud" element={<Solicitud />} />
      </Routes>
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
