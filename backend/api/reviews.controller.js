import ReviewsDAO from "../dao/reviewsDAO.js";
export default class ReviewsController {
  static async apiPostReview(req, res, next) {
    try {
      const origen = req.body.origen;
      const destino = req.body.destino;
      const distanciaKm = req.body.deistanciaKm;
      const valorRuta = req.body.valorRuta;
      const status = req.body.status;
      const date = new Date();

      const ReviewResponse = await ReviewsDAO.addReview(
        origen,
        destino,
        distanciaKm,
        valorRuta,
        status,
        date
      );
      res.json({ status: "success" });
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
        req.body.user_id,
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
      const userId = req.body.user_id;
      console.log(reviewId);
      const reviewResponse = await ReviewsDAO.deleteReview(reviewId, userId);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
