import StatusDAO from "../dao/statusDAO.js";

export default class StatusController {
  //esta api se llama por medio de una url que puede ser una query string que es una forma en la q podemos especificar parametros
  //restaurantsPerPage será igual a lo que se le pase atravez de la url (query string), despues la convierte a un int y si no existe el default es 20
  static async apiGetStatuses(req, res, next) {
    const statusPerPage = req.query.statusPerPage
      ? parseInt(req.query.statusPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {}; //iniciará como un objecto vacio, si en la url esta el filtro de status, filters.status será igual al query q se pase
    if (req.query.status) {
      filters.status = req.query.status;
    }

    //ahora q ya tenemos los filtros (si es q se escogieron filtros) podemos pasarlos aquí
    //esto va a retornar una lista de restaurantes (restaurantList) y el numero total de restaurantes(totalNumRestaurants)
    const { statusList, totalNumStatus } = await StatusDAO.getStatuses({
      filters,
      page,
      statusPerPage,
    });

    //creamos una respuesta para enviar a la persona cuando esta api url se llame
    let response = {
      statuses: statusList, //le enviamos la lista de restaurantes, pagina, filtros etc
      page: page,
      filters: filters,
      entries_per_page: statusPerPage,
      total_results: totalNumStatus,
    };

    res.json(response); //aqui es donde enviamos la respuesta en un formato json
  }
  static async apiGetStatusById(req, res, next) {
    //una query es lo que sigue luego de ? un param es lo que va luego de un /
    try {
      let id = req.params.id || {};
      let status = await StatusDAO.getStatusByID(id);
      if (!status) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(status);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }

  static async apiGetOneStatus(req, res, next) {
    try {
      let cuisines = await StatusDAO.getStatus();
      res.json(cuisines);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
