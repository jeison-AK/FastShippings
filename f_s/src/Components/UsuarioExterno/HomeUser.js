import React, { useState, useEffect } from "react";
import RestaurantDataService from "../../services/requests.http";
import { Link } from "react-router-dom";
//! ver services/restaurant.js
const RestaurantsList = (props) => {
  //necesitamos tener variables para los items que las personas esten buscando
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchZip, setSearchZip] = useState("");
  const [searchCuisine, setSearchCuisine] = useState("");
  const [estados, setEstado] = useState(["Estados"]);

  //useEffect es como le indicas a react que tu componente necesita hacer algo despues de renderizar
  useEffect(() => {
    retrieveRestaurants(); //traerse los restaurantes
    retrieveCuisines(); //traerse las cocinas
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value; // .value se refiere al valor q el usuario tipee
    setSearchName(searchName);
  };

  const onChangeSearchZip = (e) => {
    const searchZip = e.target.value;
    setSearchZip(searchZip);
  };

  const onChangeSearchCuisine = (e) => {
    const searchCuisine = e.target.value;
    setSearchCuisine(searchCuisine);
  };

  const retrieveRestaurants = () => {
    RestaurantDataService.getUserRutas()
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveCuisines = () => {
    RestaurantDataService.getCuisines()
      .then((response) => {
        console.log(response.data);
        setEstado(["Estados"].concat(response.data)); //Dropdown menu
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrieveRestaurants();
  };

  const find = (query, by) => {
    // find es llamada dentro de otras funciones
    RestaurantDataService.find(query, by)
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data.restaurants); //setRestauramt sera lo q recibamos del servidor backend
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name");
  };

  const findByZip = () => {
    find(searchZip, "zipcode");
  };

  const findByCuisine = () => {
    if (searchCuisine === "Estados") {
      refreshList();
    } else {
      find(searchCuisine, "status");
    }
  };

  return (
    <div>
      <div className="row pb-1">
        <div className="input-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by zip"
            value={searchZip}
            onChange={onChangeSearchZip}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByZip}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4">
          <select onChange={onChangeSearchCuisine}>
            {estados.map((status) => {
              return (
                <option value={status}> {status.substring(0, 20)} </option>
              );
            })}
          </select>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByCuisine}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="row">
        {restaurants.map((estadoX) => {
          const address = `${estadoX.origen} / ${estadoX.destino}`;

          return (
            <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{estadoX.name}</h5>
                  <p className="card-text">
                    <strong>Ruta: </strong>
                    {address}
                    <br />
                    <strong>Estado: </strong>
                    {"📝"}
                    {estadoX.status}
                    <br />
                    <strong>Valor por envio:</strong>
                    {estadoX.valorRuta}💲
                  </p>
                  <div className="row">
                    {/* <Link
                      to={"/restaurants/" + estadoX._id}
                      className="btn btn-primary col-lg-5 mx-1 mb-1"
                    >
                      View Reviews
                    </Link> */}
                    <a
                      target="_blank"
                      href={"https://www.google.com/maps/dir/" + address}
                      className="btn btn-primary col-lg-5 mx-1 mb-1"
                    >
                      View Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantsList;
