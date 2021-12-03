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
import Home from "./Components/UsuarioExterno/Home/homeComp";
import NewNavBar from "./Components/Comun/NavBar/NavBar_JM";
import AboutUSmain from "./Components/Comun/AboutUs/about_us";

// Section admin
import ViewUserAdm from "./Components/Admin/VerUsuarioInterno/ViewUserAdm";
import Services_Cards from "./Components/Admin/services";
import Info_user from "./Components/Admin/VerUsuarioInterno/info_user";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomeUsExt" element={<Home />}>
          <Route index element={<NewNavBar />} />
          <Route index element={<AboutUSmain />} />
        </Route>
        <Route path="/Admin-user-int" element={<ViewUserAdm />}>
          <Route index element={<NewNavBar />} />
          <Route index element={<AboutUSmain />} />
          <Route index element={<Services_Cards />} />  
          <Route index element={<Info_user />} />  
        </Route>
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
