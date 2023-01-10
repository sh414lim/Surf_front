import { grid } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { WbSunny, Air, Thunderstorm, Cloud } from "@mui/icons-material";
import axios from "axios";

//getServerSideProps api 통신 변환 예정
// export async function getServerSideProps() {
//   const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=33&lon=126&appid=42ab373a0da8b86322e7d23c198bf55d`
//   );
//   const data = await res.json();

//   return { props: { data } };
// }

//번개
// https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80
//맑음
// https://images.unsplash.com/photo-1562494400-5b335a653209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60
//흐림
// https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60
//비
// https://images.unsplash.com/photo-1496945489086-0f4348ab1004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60

function KakaoMap() {
  const [position, setPosition] = useState({
    lat: 33.5563,
    lng: 126.79581,
  });
  const [weatherInfo, setWeatherInfo] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&appid=42ab373a0da8b86322e7d23c198bf55d`
      )
      .then((res) => {
        console.log(res);
        setWeatherInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [position]);

  console.log(weatherInfo);

  if (!weatherInfo) return;
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", padding: "0px" }}
      >
        <Grid item xs={6}>
          <Map
            center={{ lat: position.lat, lng: position.lng }}
            style={{
              width: "51em",
              height: "54em",
              padding: "0px 0px 0px 10px",
              borderRadius: "20px",
            }}
            onClick={(_t, mouseEvent) =>
              setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              })
            }
          ></Map>
        </Grid>
        <Grid
          sx={{
            boxShadow: "5px 10px 5px 10px rgba(0,0,0,0.3)",
            marginTop: "20px",
            borderRadius: "20px",
            backgroundImage: `url(https://images.unsplash.com/photo-1496945489086-0f4348ab1004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60)`,
          }}
          item
          xs={5}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
              padding: "0px 0px 100px 0px ",
            }}
          >
            <WbSunny
              sx={{
                color: "yellow",
                fontSize: "100px",
                margin: "50px 0px 0px 30px",
              }}
            />
            {console.log(weatherInfo.weather)}
            <Typography sx={{ margin: "70px 70px 0px 20px", fontSize: "30px" }}>
              {weatherInfo.main.temp_min}:c
            </Typography>
            <Typography sx={{ margin: "70px 70px 0px 0px", fontSize: "30px" }}>
              {weatherInfo.main.humidity}.c
            </Typography>
            <Typography sx={{ margin: "70px 90px 0px 0px", fontSize: "50px" }}>
              {weatherInfo.name}
            </Typography>
          </Box>
        </Grid>
        {/* {JSON.stringify(weather)} */}
      </Grid>
    </>
  );
}

export default KakaoMap;
