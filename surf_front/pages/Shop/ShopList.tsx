import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { fetchList, getUser } from "../api/api";
import { Grid, Box, Typography, Paper } from "@mui/material";
import ShopListItem from "../../components/shop/ShopListItem";
import { WbSunny, Air, Thunderstorm, Cloud } from "@mui/icons-material";
import WearherBlock from "../../components/common/WearherBlock";
import CityInfoBlock from "../../components/common/CityInfoBlock";
import PlaceInfo from "../../components/common/PlaceInfo";
import Link from "next/link";
import { fontWeight } from "@mui/system";

interface ListInterface {
  id: number;
  genre_ids: number[];
  original_title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
}

function ShopList<T>() {
  const [list, setList] = useState([]);
  const [demoLength, setDemoLength] = useState([1, 23, 4, 5, 5, 7, 9]);
  const [demo2Length, setDemo2Length] = useState([1, 23, 4, 5, 3, 7]);
  useEffect(() => {
    // https://api.stormglass.io/v2/weather/point
    const text = axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=13dce73d621a57563589d58029a15906"
      )

      .then((res) => {
        setList(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(list);
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1578263373471-fb70bf7cc624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUyfHxzdXJmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60)",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          height: "1000px",
          position: "absolute",
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            // position: "absolute",
            // width: "0%",
            display: "flex",
            justifyContent: "center",
            width: "95%",
            bottom: 0,
            // background: "grey",
            margin: "30px 0px 0px 50px",
            // backgroundSize: "2000px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Grid xs={6}>
            <PlaceInfo />
          </Grid>
          <Grid
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ margin: "50px 0px 0px 0px" }}>
              <Typography
                sx={{ fontSize: "60px", fontWeight: "600", color: "white" }}
              >
                GangnEung
              </Typography>
              <Typography sx={{ fontSize: "30px", color: "black" }}>
                Geumjin Beach
              </Typography>
            </Box>
            {/* <Link href="/">HOME</Link> */}
          </Grid>

          <Grid xs={12} sx={{ display: "flex", margin: "150px 0px 50px 20px" }}>
            {demoLength.map((item, i) => (
              <WearherBlock />
            ))}
          </Grid>

          <Grid xs={12} sx={{}}>
            <Box sx={{ display: "flex" }}>
              {demo2Length.map((item, i) => (
                <CityInfoBlock />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

// popular:()=>api.get("/3/movie/popular"),
// toprated:()=>api.get("/3/movie/top_rated"),
// upcoming:()=>api.get("/3/movie/upcoming"),
// nowplaying:()=>api.get("/3/movie/now_playing"),

export default ShopList;
