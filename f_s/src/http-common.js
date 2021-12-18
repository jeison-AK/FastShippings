import axios from "axios";
//! ver services/restaurant.js
export default axios.create({
  baseURL: "http://localhost:5000/api/v1/users", //url de nuestro servidor backend,la url root
  headers: {
    "Content-type": "application/json",
  },
});
