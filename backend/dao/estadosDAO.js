import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;

let usuarios; // para guardar una referencia a nuestra base de datos
let status; // para guardar una referencia a nuestra base de datos

export default class StatusDAO {
  static async injectDB(conn, collection) {
    //es como inicialmente conectamos a la base de datoss
    //llamaremos este metodo tan pronto como nuestro servidor de se corra, es decir tomaremos una referencia a nuestra base de datos
    if (usuarios) {
      return; //si ya hay una referencia return
    }
    try {
      if (collection === "users") {
        usuarios = await conn
          .db(process.env.DATABASE_NS)
          .collection(collection);
      } else if (collection === "status") {
        status = await conn.db(process.env.DATABASE_NS).collection(collection);
      }
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in statusDAO: ${e}`
      );
    }
  }

  //TODO no se esta implementando aún:
  //es lo que llamamos cuando queremos obtener una lista de algun tipo de status todos los pendientes o completados etc
  //!se puede implementar un filtro similar para obtener usuarios por id etc
  static async getAllData({
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
      } else if ("rutas" in filters) {
        query = { rutas: { $eq: filters["rutas"] } };
      }
    }

    let cursor;

    try {
      //ejecutara la query que se tomo del filtro
      cursor = await usuarios.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { dataList: [], totalNumRestaurants: 0 }; //returns an empty list and 0 for total number of restaurants
    }

    //si no hay error intentará limitar los resultados dependiendo de lo que se especifique en restaurantsPerPage
    const displayCursor = cursor
      .limit(restaurantsPerPage)
      .skip(restaurantsPerPage * page);
    try {
      const dataList = await displayCursor.toArray(); //sele hace un set a tipo array
      const totalNumRestaurants = await usuarios.countDocuments(query); //cuenta el numero de documentos que existen

      return { dataList, totalNumRestaurants }; //aqui seretorna la erray
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { dataList: [], totalNumRestaurants: 0 };
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
      return await usuarios.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getRestaurantByID: ${e}`);
      throw e;
    }
  }

  static async getEstados() {
    //drompdown en home
    let dropdown = [];
    try {
      dropdown = await status.distinct("status");
      return dropdown;
    } catch (e) {
      console.error(`Unable to get cuisines, ${e}`);
      return dropdown;
    }
  }
}
