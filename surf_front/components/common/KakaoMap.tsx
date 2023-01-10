import { grid } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { WbSunny } from "@mui/icons-material";
import axios from "axios";

//getServerSideProps api 통신 변환 예정
// export async function getServerSideProps() {
//   const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=33&lon=126&appid=42ab373a0da8b86322e7d23c198bf55d`
//   );
//   const data = await res.json();

//   return { props: { data } };
// }

function KakaoMap() {
  const [position, setPosition] = useState({
    lat: 33.5563,
    lng: 126.79581,
  });
  const [weather, setWeather] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&appid=42ab373a0da8b86322e7d23c198bf55d`
      )
      .then((res) => {
        console.log(res);
        setWeather(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [position]);

  console.log(weather);

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
              width: "50em",
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
            boxShadow: "10px 10px 10px 10px black",
            marginTop: "20px",
            borderRadius: "20px",
            background: "#74b9ff",
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
            <Typography sx={{ margin: "70px 70px 0px 0px", fontSize: "30px" }}>
              기온
            </Typography>
            <Typography sx={{ margin: "70px 70px 0px 0px", fontSize: "30px" }}>
              습도
            </Typography>
            <Typography sx={{ margin: "70px 90px 0px 0px", fontSize: "50px" }}>
              도시이름
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "8px 8px 8px 8px",
              border: "1px solid black",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "15px 10px 15px 0px",
            }}
          >
            <Typography>
              <WbSunny
                sx={{
                  color: "yellow",
                  fontSize: "50px",
                }}
              />
            </Typography>
            <Typography>기온:10 </Typography>
            <Typography>습도:10 </Typography>
            <Typography>파도높이:10 </Typography>
            <Typography>강수량:10</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "8px 8px 8px 8px",
              border: "1px solid black",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "15px 10px 15px 0px",
            }}
          >
            <Typography>
              <WbSunny
                sx={{
                  color: "yellow",
                  fontSize: "50px",
                }}
              />
            </Typography>
            <Typography>기온:10 </Typography>
            <Typography>습도:10 </Typography>
            <Typography>파도높이:10 </Typography>
            <Typography>강수량:10</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "8px 8px 8px 8px",
              border: "1px solid black",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "15px 10px 15px 0px",
            }}
          >
            <Typography>
              <WbSunny
                sx={{
                  color: "yellow",
                  fontSize: "50px",
                }}
              />
            </Typography>
            <Typography>기온:10 </Typography>
            <Typography>습도:10 </Typography>
            <Typography>파도높이:10 </Typography>
            <Typography>강수량:10</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "8px 8px 8px 8px",
              border: "1px solid black",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "15px 10px 15px 0px",
            }}
          >
            <Typography>
              <WbSunny
                sx={{
                  color: "yellow",
                  fontSize: "50px",
                }}
              />
            </Typography>
            <Typography>기온:10 </Typography>
            <Typography>습도:10 </Typography>
            <Typography>파도높이:10 </Typography>
            <Typography>강수량:10</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "8px 8px 8px 8px",
              border: "1px solid black",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "15px 10px 15px 0px",
            }}
          >
            <Typography>
              <WbSunny
                sx={{
                  color: "yellow",
                  fontSize: "50px",
                }}
              />
            </Typography>
            <Typography>기온:10 </Typography>
            <Typography>습도:10 </Typography>
            <Typography>파도높이:10 </Typography>
            <Typography>강수량:10</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "8px 8px 8px 8px",
              border: "1px solid black",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "15px 10px 15px 0px",
            }}
          >
            <Typography>
              <WbSunny
                sx={{
                  color: "yellow",
                  fontSize: "50px",
                }}
              />
            </Typography>
            <Typography>기온:10 </Typography>
            <Typography>습도:10 </Typography>
            <Typography>파도높이:10 </Typography>
            <Typography>강수량:10</Typography>
          </Box>
        </Grid>
        {/* {JSON.stringify(weather)} */}
      </Grid>
    </>
  );
}

export default KakaoMap;
