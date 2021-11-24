import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route,
  Navigate, Link, NavLink, useNavigate, useLocation,
  Outlet,
  useParams
} from "react-router-dom";

//Component imports
import Home from "./Components/home-Comp"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/welcome' element={<App />} />
        <Route path="/myapps" element={<Navigate replace to="/learn" />} />
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseId" element={<CourseId />} />
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
