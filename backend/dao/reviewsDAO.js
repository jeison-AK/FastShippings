import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId; // porque vamos a tener q comvertir una string a un tipo de Id en mongodb

let reviews; //una variable que llenaremos con una referencia a la "review collections"

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (reviews) {
      return;
    }
    try {
      reviews = await conn.db(process.env.RESTREVIEWS_NS).collection("rutas"); //creara esta colleccion automaticamente si no existe
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async addReview(
    origen,
    destino,
    distanciaKm,
    valorRuta,
    status,
    date
  ) {
    try {
      const reviewDoc = {
        origen: origen,
        destino: destino,
        distanciaKm: distanciaKm,
        valorRuta: valorRuta,
        status: status,
        date: date,
      };

      return await reviews.insertOne(reviewDoc); //hacemos un insert a la base de datos
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      return { error: e };
    }
  }

  static async updateReview(reviewId, userId, text, date) {
    //text es el texto de la review
    try {
      //buscamos una review que tenga  la id de usuario y la reviewId correcta
      const updateResponse = await reviews.updateOne(
        { user_id: userId, _id: ObjectId(reviewId) },
        { $set: { text: text, date: date } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update review: ${e}`);
      return { error: e };
    }
  }

  static async deleteReview(reviewId, userId) {
    try {
      const deleteResponse = await reviews.deleteOne({
        _id: ObjectId(reviewId),
        user_id: userId,
      });

      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete review: ${e}`);
      return { error: e };
    }
  }
}
