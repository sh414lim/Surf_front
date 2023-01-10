import React, { useEffect, useState } from "react";
import axios from "axios";
import KakaoMap from "../../components/common/KakaoMap";

export default function weatherInfo() {
  const [weather, setWeather] = useState();
  const [on, off] = useState(false);

  console.log(weather);

  return (
    <>
      <KakaoMap />
    </>
  );
}

// 42ab373a0da8b86322e7d23c198bf55d
