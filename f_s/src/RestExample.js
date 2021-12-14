import { useEffect, useState } from "react";
import axios from "axios";

const RestExample = () => {
  const url = "http://localhost:5000/api/v1/restaurants";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setCountries(res.data.countries);
    });
  }, []);

  return (
    <div className="App">
      <h1>List of Countries</h1>
      <div>
        <ul>
          {countries.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestExample;
