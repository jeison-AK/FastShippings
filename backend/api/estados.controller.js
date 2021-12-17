import estadosDAO from "../dao/estadosDAO.js";
import RutasDAO from "../dao/rutasDAO.js";

export default class StatusController {
  //esta api se llama por medio de una url que puede ser una query string que es una forma en la q podemos especificar parametros
  //resultsPerPage será igual a lo que se le pase atravez de la url (query string), despues la convierte a un int y si no existe el default es 20
  static async apiGetUserEstados(req, res, next) {
    var { filters, page, resultsPerPage } = filtros(req);

    //ahora q ya tenemos los filtros (si es q se escogieron filtros) podemos pasarlos aquí
    //esto va a retornar una lista de restaurantes (restaurantList) y el numero total de restaurantes(totalNumRestaurants)
    const { dataList, totalNumRestaurants } = await estadosDAO.getAllData({
      filters,
      page,
      resultsPerPage,
    });

    //creamos una respuesta para enviar a la persona cuando esta api url se llame
    let response = {
      restaurants: dataList, //le enviamos la lista de restaurantes, pagina, filtros etc
      page: page,
      filters: filters,
      entries_per_page: resultsPerPage,
      total_results: totalNumRestaurants,
    };
    res.json(response); //aqui es donde enviamos la respuesta en un formato json
  }

  static async apiGetRoutes(req, res, next) {
    var { filters, page, resultsPerPage } = filtros(req);

    //ahora q ya tenemos los filtros (si es q se escogieron filtros) podemos pasarlos aquí
    //esto va a retornar una lista de restaurantes (restaurantList) y el numero total de restaurantes(totalNumRestaurants)
    const { dataList, totalNumRestaurants } = await RutasDAO.getAllData({
      filters,
      page,
      resultsPerPage,
    });

    //creamos una respuesta para enviar a la persona cuando esta api url se llame
    let response = {
      restaurants: dataList, //le enviamos la lista de restaurantes, pagina, filtros etc
      page: page,
      filters: filters,
      entries_per_page: resultsPerPage,
      total_results: totalNumRestaurants,
    };
    res.json(response); //aqui es donde enviamos la respuesta en un formato json
  }

  static async apiGetEstados(req, res, next) {
    try {
      let status = await estadosDAO.getEstados();
      res.json(status);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }
}

function filtros(req) {
  const resultsPerPage = req.query.resultsPerPage
    ? parseInt(req.query.resultsPerPage, 10)
    : 20;
  const page = req.query.page ? parseInt(req.query.page, 10) : 0;

  let filters = {}; //iniciará como un objecto vacio, si en la url esta el filtro de cuisine, filters.cuisine será igual al query q se pase
  if (req.query.status) {
    filters.status = req.query.status;
  } else if (req.query.zipcode) {
    filters.zipcode = req.query.zipcode;
  } else if (req.query.name) {
    filters.name = req.query.name;
  }
  return { filters, page, resultsPerPage };
}
