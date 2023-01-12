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
import PlaceName from "../../components/common/PlaceName";

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
  const [demoLength, setDemoLength] = useState([1, 23, 4, 5, 5, 7]);
  const [demo2Length, setDemo2Length] = useState([1, 23, 4, 5, 3, 7]);
  const [demo3Length, setDemo3Length] = useState([1, 23, 4, 5]);
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
            "url(https://images.unsplash.com/photo-1578263373471-fb70bf7cc624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUyfHxzdXJmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=3000&q=60)",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          height: "1800px",
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
            <PlaceName />
            {/* <Link href="/">HOME</Link> */}
          </Grid>

          <Grid xs={12} sx={{ display: "flex", margin: "150px 0px 50px 20px" }}>
            {demoLength.map((item, i) => (
              <WearherBlock />
            ))}
          </Grid>

          <Grid xs={12} sx={{ margin: "60px 0px 0px 0px" }}>
            <Box sx={{ display: "flex" }}>
              {demo2Length.map((item, i) => (
                <CityInfoBlock />
              ))}
            </Box>
          </Grid>
          <Grid
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "90px 0px 0px 0px",
            }}
          >
            {demo3Length.map((item, i) => (
              <Grid xs={4} sx={{}}>
                <Box
                  sx={{
                    boxShadow: "1px 2px 1px 2px rgba(0,0,0,0.3)",
                    backgroundImage: `url(https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=250&q=60?w=100&fit=crop&auto=format&dpr=2)`,
                    borderRadius: "10px",
                    height: "600px",
                    width: "90%",
                    opacity: 0.85,
                    margin: "30px 0px 0px 50px  ",
                    "&:hover": {
                      transform: "rotateY( 180deg )",
                      // boxShadow: "2px 3px 2px 3px rgba(0, 0, 0, .6)",
                      transition: "1.9s",
                      opacity: 1,
                    },
                  }}
                >
                  <Box>
                    <Typography sx={{}}>서핑샵</Typography>
                    {/* <Typography>he best burger</Typography> */}
                  </Box>
                </Box>
              </Grid>
            ))}
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
