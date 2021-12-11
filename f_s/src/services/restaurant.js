import http from "../http-common";

//desde aqui retornaremos las llamadas a las api que hangan las funciones

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`); //https://localhost:5000/api/v1/restaurants
  }
  get(id) {
    return http.get(`/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    //buscaremos ya sea por nombre, cuisine o zipcode
    return http.get(`?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return http.post("/review", data);
  }

  deleteReview(id) {
    return http.delete(`/review?id=${id}`);
  }

  getCuisines(id) {
    return http.get(`/cuisines`);
  }
}

export default new RestaurantDataService();
