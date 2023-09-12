import React, { useRef } from "react";
import { useFetch } from "../customHooks/useFetch";

const CountryList = () => {
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all",
    isComponentMounted,
    []
  );
  console.log("country data", data);

  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Common Name</th>
          <th>Official Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Sub-Region</th>
        </tr>
      </thead>
      <tbody>
        <div>
          {loading ? (
            <div>Loading data...</div>
          ) : (
            data.map((country) => (
              <tr>
                <td>{country.name.common}</td>
                <td>{country.name.official}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>{country.subregion}</td>
              </tr>
            ))
          )}
        </div>
      </tbody>
    </table>
  );
};

export default CountryList;
