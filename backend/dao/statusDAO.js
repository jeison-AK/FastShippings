import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;

let statuses; // para guardar una referencia a nuestra base de datos

export default class StatusDAO {
  static async injectDB(conn) {
    //es como inicialmente conectamos a la base de datoss
    //llamaremos este metodo tan pronto como nuestro servidor de se corra, es decir tomaremos una referencia a nuestra base de datos
    if (statuses) {
      return; //si ya hay una referencia return
    }
    try {
      statuses = await conn.db(process.env.DATABASE_NS).collection("status"); //intentamos obtener una conexion a la "collection resturants" de la base de datos
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in restaurantsDAO: ${e}`
      );
    }
  }

  //es lo que llamamos cuando queremos obtener una lista de todos los restaurantes
  static async getStatuses({
    filters = null, //filtrar por nombre,  zipcode, cuisine  (son fields q existen en la db)
    page = 0, //q pagina quieres ver
    statusesPerPage = 20, //default ver solo 20 resultados por pagina
  } = {}) {
    let query;
    if (filters) {
      //este filtro puede estar vacio hasta q se escoja uno de ellos
      //esta es la logica de los filtros:

      if ("status" in filters) {
        query = { status: { $eq: filters["status"] } }; //si la "cuisine" de la base de datos es equal a la cosina que se le paso (filters["cuisine"])
      }
    }

    let cursor;

    try {
      //ejecutara la query que se tomo del filtro
      cursor = await statuses.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { statusesList: [], totalNumStatuses: 0 }; //returns an empty list and 0 for total number of restaurants
    }

    //si no hay error intentará limitar los resultados dependiendo de lo que se especifique en restaurantsPerPage
    const displayCursor = cursor
      .limit(statusesPerPage)
      .skip(statusesPerPage * page);
    try {
      const statusesList = await displayCursor.toArray(); //sele hace un set a tipo array
      const totalNumStatuses = await statuses.countDocuments(query); //cuenta el numero de documentos que existen

      return { statusesList, totalNumStatuses }; //aqui seretorna la erray
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { statusesList: [], totalNumStatuses: 0 };
    }
  }

  static async getStatus() {
    let statuses = [];
    try {
      statuses = await statuses.distinct("cuisine");
      return statuses;
    } catch (e) {
      console.error(`Unable to get statuses, ${e}`);
      return statuses;
    }
  }
}
