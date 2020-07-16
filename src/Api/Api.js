import React, { useState, useEffect } from "react";
import degToCompass from "./Helper";

const Api = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&mode=json&units=metric,uk&APPID=86cf7b40142a1bc1aca8a976db7133ce`;
    fetch(api)
      .then((res) => res.json())
      .then(
        (result) => setData(result),
        (error) => setError(error)
      )
      .finally(() => setIsLoaded(true));
  }, []);
  return error ? (
    <div>Error: {error.message}</div>
  ) : !isLoaded ? (
    <div>Loading...</div>
  ) : (
    <>
      <section>
        <h1 className="cityName">{data.name}</h1>
        <h1 className="temperature">
          {Math.round(data.main.temp - 273.15)}&#8451;
        </h1>
        <p className="icon">
          <img
            src={require(`../icons/${data.weather[0].icon}.png`)}
            alt={data.weather[0].icon}
          />
        </p>
        <h2 className="description">{data.weather[0].description}</h2>
        <p className="sunrise">
          Sunrise{" "}
          {`${new Date(data.sys.sunrise * 1000).getHours()}:${
            (new Date(data.sys.sunrise * 1000).getMinutes() < 10 ? "0" : "") +
            new Date(data.sys.sunrise * 1000).getMinutes()
          }am `}
          Sunset{" "}
          {`${new Date(data.sys.sunset * 1000).getHours()}:${
            (new Date(data.sys.sunset * 1000).getMinutes() < 10 ? "0" : "") +
            new Date(data.sys.sunset * 1000).getMinutes()
          }pm`}
        </p>
        <p className="humidity">
          Humidity {data.main.humidity}% Wind {degToCompass(data.wind.deg)}{" "}
          {data.wind.speed * 2} mph
        </p>
        <p className="pressure">Pressure {data.main.pressure} hPa</p>
      </section>
    </>
  );
};

export default Api;
