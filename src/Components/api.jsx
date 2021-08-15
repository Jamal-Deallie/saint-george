import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { Sneaker_Data } from '../../src/Shared/Sneaker_Data';

const Api = () => {
  let [responseData, setResponseData] = useState("");

  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
      params: {
        limit: "100",
        gender: "men",
        name: 'Air Jordan Retro',
      },
      headers: {
        "x-rapidapi-key": "ffde4fb6fdmshf24068fbc5fc299p1d2c61jsnb935c6c62c83",
        "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
      },
    })
      .then((response) => {
        setResponseData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(responseData);




  return (
    <div>
      <h1>Ayo</h1>
    </div>
  );
};

export default Api;
