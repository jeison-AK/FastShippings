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
import AxiosInstance from "./Components/CreateAxiosInstance";
import AsyncAwait from "./Components/Async-Await";

//!IMPORTANT: ver CreateAxiosInstance.js, Async-Await.js
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetReq />} />
          <Route path="post" element={<PostReq />} />
          <Route path="put" element={<PutReq />} />
          <Route path="delete" element={<DeleteReq />} />
          <Route path="/error" element={<Error />} />
          {/* escribe codigo más limpio usando esto: */}
          <Route path="/instance" element={<AxiosInstance />} />
          <Route path="/AA" element={<AsyncAwait />} />
          {/* --------------------------------------- */}
        </Route>
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
