import express from "express";
import Estados from "./usuarios.controller.js"; //el archivo route usara el archivo controllers
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();
//la ruta / es nuetro root q en server.js le indicamos q sea /rutas
//datos por defecto, ver server.js, axios en el fron también se conecta por default en la ruta /rutas
router.route("/").get(Estados.apiGetUserEstados); //lo q se retornara en este route vendra de RestaurantsCtrl.apiGetRestaurants
router.route("/status").get(Estados.apiGetEstados); //list of cuisines resason: we want the user to be able to select a cuisine from a dropdown menu
router.route("/rut").get(Estados.apiGetRoutes);
router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview);
//en el router /review vamos a poder hacer uso de las request post put delete si es post usara ReviewsCtrl.apiPostReview etc
export default router;
