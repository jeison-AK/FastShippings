import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));

// //Learn component
// function Learn() {
//   return (
//     <div>
//       <h1>Learn component</h1>
//       <h4>learn to learn</h4>
//       <Link to="/learn/courses" className="btn btn-success">courses</Link>{" "}
//       <Link to="/learn/bundles" className="btn btn-primary">bundle</Link>
//       <Outlet/>
//     </div>
//   )
// }
// function Courses() {
//   const courseList = ["React", "Angula", "Vue", "Nodejs"]
//   const ramdomCourseName = courseList[Math.floor(Math.random()*courseList.length)]
//   return (
//     <div>
//       <h1>Curses list</h1>
//       <h4>Courses card</h4>
//       <hr />
//       <h4>NavLink</h4>
//       <NavLink to={`/learn/courses/${ramdomCourseName}`}
//         style={({ isActive }) => {
//           return {
//           backgroundColor: isActive ? "pink" : ''
//         }
//       }}>
//         {ramdomCourseName}
//       </NavLink>
//       <NavLink to={`/learn/courses/💩`} className="btn btn-light">
//         💩💩
//       </NavLink>
//       <Outlet />
//       {/* autlet a CourseId() */}
//     </div>
//   )
// }
// function Bundles() {
//   return (
//     <div>
//       <h1>Bundle list</h1>
//       <h4>Bundle card</h4>
//     </div>
//   )
// }
// function CourseId() {
//   const navigate =  useNavigate()
//   const {courseId} = useParams() //-courseId porque asi es como se puso en el Route
//   return (
//     <div>
//       <h1>El parametro de la URL es: {courseId}</h1>
//       <button
//         onClick={() => {
//           navigate("/dashboard",{state:"399"})
//         }}
//         className="btn btn-warning">Price
//       </button>
//       <Link to="/dashboard" state={"StateFromLink"}>Test-Link</Link>
//     </div>
//   )
// }
// function Dashboard() {
//   const location = useLocation()
//   return (
//     <div>
//       <h1>La información que me traje es: {location.state} </h1>{/*state sera una string siempre*/}
//     </div>
//   )
// }
