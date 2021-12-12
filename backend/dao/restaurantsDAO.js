let restaurants; // para guardar una referencia a nuestra base de datos

export default class RestaurantsDAO {
  static async injectDB(conn) {
    //es como inicialmente conectamos a la base de datoss
    //llamaremos este metodo tan pronto como nuestro servidor de se corra, es decir tomaremos una referencia a nuestra base de datos
    if (restaurants) {
      return; //si ya hay una referencia return
    }
    try {
      restaurants = await conn
        .db(process.env.RESTREVIEWS_NS)
        .collection("restaurants"); //intentamos obtener una conexion a la "collection resturants" de la base de datos
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in restaurantsDAO: ${e}`
      );
    }
  }

  //es lo que llamamos cuando queremos obtener una lista de todos los restaurantes
  static async getRestaurants({
    filters = null, //filtrar por nombre,  zipcode, cuisine  (son fields q existen en la db)
    page = 0, //q pagina quieres ver
    restaurantsPerPage = 20, //default ver solo 20 resultados por pagina
  } = {}) {
    let query;
    if (filters) {
      //este filtro puede estar vacio hasta q se escoja uno de ellos
      //esta es la logica de los filtros:
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      } else if ("cuisine" in filters) {
        query = { cuisine: { $eq: filters["cuisine"] } }; //si la "cuisine" de la base de datos es equal a la cosina que se le paso (filters["cuisine"])
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } };
      }
    }

    let cursor;

    try {
      //ejecutara la query que se tomo del filtro
      cursor = await restaurants.find(query);
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
      const totalNumRestaurants = await restaurants.countDocuments(query); //cuenta el numero de documentos que existen

      return { restaurantsList, totalNumRestaurants }; //aqui seretorna la erray
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { restaurantsList: [], totalNumRestaurants: 0 };
    }
  }
}
