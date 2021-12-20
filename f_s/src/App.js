import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

//Component imports
import HomeP from "./Components/LandingPage/Principal/home";
import Home from "./Components/UsuarioExterno/Home/homeComp";
import AboutUSmain from "./Components/Comun/AboutUs/about_us";
import Registro from "./Components/LandingPage/Registro/registro";
import OrdenDespacho from "../src/Components/UsuarioExterno/OrdenDespacho/ordenDespacho";

// Section admin
import ViewUserAdm from "./Components/Admin/VerUsuarioInterno/js/ViewUserAdm";
import Add_user from "./Components/Admin/AgregarUsuarioInterno/add_user";
import Info_user from "./Components/Admin/VerUsuarioInterno/js/info_user";
import Rutas from "./Components/UsuarioInterno/Rutas/rutas";
import ViewHisUI from "./Components/UsuarioInterno/Historial/js/ViewHisUI";
import Info_orden from "./Components/UsuarioInterno/Historial/js/info_orden";
import Login from "./Components/LandingPage/Login/Login";
import Solicitud from "./Components/UsuarioInterno/Solicitudes/Solicitud";
import { NavBar_Adm } from "./Components/Comun/NavBar/NavBar_Adm";
import Separador from "./Components/Comun/Separador/separador";
import Footer from "./Components/Comun/footer/footer";
import PrivateAmin from "./Components/Admin/Authentication/Auth";

function App() {
  return (
    <Router>
      <NavBar_Adm />
      <Separador />
      <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/about" element={<AboutUSmain />} />

        {/* 🔏🔏🔏🔏 */}
        <Route path="/HomeUsExt" element={<PrivateOutletHome />}>
          <Route path="" element={<Home />} />
          <Route path="OrdenarDespacho" element={<OrdenDespacho />} />
        </Route>
        {/* 🔏🔏🔏🔏 */}

        <Route path="rutas" element={<Rutas />} />
        <Route path="historialui" element={<ViewHisUI />}>
          <Route index element={<main style={{ padding: "1rem" }}></main>} />
          <Route path=":userID" element={<Info_orden />} />
        </Route>
        <Route path="/Solicitud" element={<Solicitud />} />

        {/* 🔏🔏🔏🔏 */}
        <Route path="/Admin-user-int" element={<PrivateAmin />}>
          <Route path="" element={<ViewUserAdm />}>
            <Route index element={<main style={{ padding: "1rem" }}></main>} />
            <Route path=":userID" element={<Info_user />} />
          </Route>
        </Route>
        <Route path="Add_User" element={<Add_user />} />
        {/* 🔏🔏🔏🔏 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// const Private = () => <div>private</div>;  No se está usando, es un div de prueba solamente.

//🏠
const PrivateHome = () => <div>private HOME el auth es true</div>;

function PrivateOutletHome() {
  const auth = useAuthHome();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function useAuthHome() {
  return true;
}
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
