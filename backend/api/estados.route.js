import express from "express";
import RestaurantsCtrl from "./estados.controller.js"; //el archivo route usara el archivo controllers
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRoutes); //lo q se retornara en este route vendra de RestaurantsCtrl.apiGetRestaurants
router.route("/status").get(RestaurantsCtrl.apiGetEstados); //list of cuisines resason: we want the user to be able to select a cuisine from a dropdown menu

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview);
//en el router /review vamos a poder hacer uso de las request post put delete si es post usara ReviewsCtrl.apiPostReview etc
export default router;