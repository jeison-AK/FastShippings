import ReviewsDAO from "../dao/reviewsDAO.js";

//-min 47
// we get some info from the body of the request
export default class ReviewsController {
  static async apiPostReview(req, res, next) {
    try {
      //antes reciviamos info desde el "query parameter" ahora lo haremos desde el body del request
      const restaurantId = req.body.restaurant_id; //obtenemos el restaurant_id
      const review = req.body.text; //obtenemos el text del review
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id,
      };
      const date = new Date();

      const ReviewResponse = await ReviewsDAO.addReview(
        restaurantId,
        userInfo,
        review,
        date
      ); //ReviewsDAO.addReview enviará la data recogida a la base de datos
      res.json({ status: "success" }); //retornara success si funciona
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateReview(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const text = req.body.text;
      const date = new Date();

      const reviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        req.body.user_id, //para verificar que quien intenta hacer el update de la review sea el mismo usuario
        text,
        date
      );

      var { error } = reviewResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (reviewResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update review - user may not be original poster"
        );
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.query.id;
      const userId = req.body.user_id; //aqui estamos obteniendo el id del usuario en el body q no es lo recomendado para un delete request
      console.log(reviewId);
      const reviewResponse = await ReviewsDAO.deleteReview(reviewId, userId);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
