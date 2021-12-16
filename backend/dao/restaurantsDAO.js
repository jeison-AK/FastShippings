import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;

let status; // para guardar una referencia a nuestra base de datos

export default class StatusDAO {
  static async injectDB(conn) {
    //es como inicialmente conectamos a la base de datoss
    //llamaremos este metodo tan pronto como nuestro servidor de se corra, es decir tomaremos una referencia a nuestra base de datos
    if (status) {
      return; //si ya hay una referencia return
    }
    try {
      status = await conn.db(process.env.DATABASE_NS).collection("status"); //intentamos obtener una conexion a la "collection resturants" de la base de datos
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in statusDAO: ${e}`
      );
    }
  }

  //es lo que llamamos cuando queremos obtener una lista de algun tipo de status todos los pendientes o completados etc
  static async getRestaurants({
    filters = null, //filtrar por status  (son fields q existen en la db)
    page = 0, //q pagina quieres ver
    restaurantsPerPage = 20, //default ver solo 20 resultados por pagina
  } = {}) {
    let query;
    if (filters) {
      //este filtro puede estar vacio hasta q se escoja uno de ellos
      //esta es la logica de los filtros:
      if ("status" in filters) {
        query = { status: { $eq: filters["status"] } };
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } };
      } else if ("page" in filters) {
        query = { page: { $eq: filters["page"] } };
      }
    }

    let cursor;

    try {
      //ejecutara la query que se tomo del filtro
      cursor = await status.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { restaurantsList: [], totalNumRestaurants: 0 }; //returns an empty list and 0 for total number of restaurants
    }

    //si no hay error intentará limitar los resultados dependiendo de lo que se especifique en restaurantsPerPage
    const displayCursor = cursor
      .limit(restaurantsPerPage)
      .skip(restaurantsPerPage * page);
    try {
      const restaurantsList = await displayCursor.toArray(); //sele hace un set a tipo array
      const totalNumRestaurants = await status.countDocuments(query); //cuenta el numero de documentos que existen

      return { restaurantsList, totalNumRestaurants }; //aqui seretorna la erray
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { restaurantsList: [], totalNumRestaurants: 0 };
    }
  }
  static async getRestaurantByID(id) {
    try {
      const pipeline = [
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
        {
          $lookup: {
            from: "reviews",
            let: {
              id: "$_id",
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$restaurant_id", "$$id"],
                  },
                },
              },
              {
                $sort: {
                  date: -1,
                },
              },
            ],
            as: "reviews",
          },
        },
        {
          $addFields: {
            reviews: "$reviews",
          },
        },
      ];
      return await status.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getRestaurantByID: ${e}`);
      throw e;
    }
  }

  static async getCuisines() {
    let cuisines = [];
    try {
      cuisines = await status.distinct("cuisine");
      return cuisines;
    } catch (e) {
      console.error(`Unable to get cuisines, ${e}`);
      return cuisines;
    }
  }
}
