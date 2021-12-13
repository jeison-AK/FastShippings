import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:5000/api/v1/restaurants", //url de nuestro servidor backend
  headers: {
    "Content-type": "application/json",
  },
});
