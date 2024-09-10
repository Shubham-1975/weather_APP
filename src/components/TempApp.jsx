import React, { useEffect, useState } from "react";
import { FaStreetView } from "react-icons/fa";

function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("patna");

  useEffect(() => {
    const respons = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f5eac80dfce6b00dff25a79f25ee5385`
      );
      const resjson = await res.json();
      setCity(resjson.main);
    };
    respons();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="input mt-4">
          <input
            type="search"
            className="inputFeild"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        

        {!city ? (
          <p className="errorMessage">no Data found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <FaStreetView />
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                {" "}
                {city.temp_min}°C | {city.temp_max}°C
              </h3>
            </div>
            <div className="wave">
              <div className="wave-one"></div>
              <div className="wave-two"></div>
              <div className="wave-three"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default TempApp;
