import React, { useEffect, useState } from "react";
import axios from "axios";
import KakaoMap from "../../components/common/KakaoMap";

export default function weatherInfo() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const lat: number = 58.7984;
    const lng: number = 17.8081;
    const params: string = "swellHeight";
    fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
      {
        headers: {
          Authorization:
            "6c3d6262-8667-11ed-bce5-0242ac130002-6c3d62da-8667-11ed-bce5-0242ac130002",
        },
      }
    )
      .then((response) => response.json())
      .then((jsonData) => {
        setWeather(jsonData);
      });
  }, []);
  console.log(weather);

  return (
    <>
      <KakaoMap />
    </>
  );
}
