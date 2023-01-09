import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { fetchList, getUser } from "../api/api";
import { Grid, Box, Typography, Paper } from "@mui/material";
import ShopListItem from "../../components/shop/ShopListItem";

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
      <Grid
        container
        spacing={2}
        sx={{ width: "80%", margin: "30px 0px 0px 230px" }}
      >
        {list &&
          list.map(
            (
              {
                id,
                original_title,
                overview,
                poster_path,
                vote_count,
              }: ListInterface,
              index: number
            ) => (
              <>
                <ShopListItem
                  originalTitle={original_title}
                  voteCount={vote_count}
                  posterPath={poster_path}
                />
              </>
            )
          )}
      </Grid>
    </>
  );
}

// popular:()=>api.get("/3/movie/popular"),
// toprated:()=>api.get("/3/movie/top_rated"),
// upcoming:()=>api.get("/3/movie/upcoming"),
// nowplaying:()=>api.get("/3/movie/now_playing"),

export default ShopList;
