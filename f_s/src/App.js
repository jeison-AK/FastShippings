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
