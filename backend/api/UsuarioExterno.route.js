import express from "express";
import Estados from "./estados.controller.js"; //el archivo route usara el archivo controllers
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();
//FIXME la ruta / no esta haciendo nada, solo funciona la ruta /estados/status y /estados sola esta configurada para traerse unos
//datos por defecto, ver server.js, axios en el fron también se conecta por default en la ruta /Estados
router.route("/").get(Estados.apiGetRoutes); //lo q se retornara en este route vendra de RestaurantsCtrl.apiGetRestaurants
router.route("/status").get(Estados.apiGetEstados); //list of cuisines resason: we want the user to be able to select a cuisine from a dropdown menu

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview);
//en el router /review vamos a poder hacer uso de las request post put delete si es post usara ReviewsCtrl.apiPostReview etc
export default router;
