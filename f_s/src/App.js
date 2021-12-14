import React from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";

import GetReq from "./Components/testConAxios";
import PostReq from "./Components/postRequestAxios";
import PutReq from "./Components/putReqAxios";
import DeleteReq from "./Components/deleteReqAxios";
import Error from "./Components/handleErrors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetReq />} />
          <Route path="post" element={<PostReq />} />
          <Route path="put" element={<PutReq />} />
          <Route path="delete" element={<DeleteReq />} />
        </Route>
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
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
