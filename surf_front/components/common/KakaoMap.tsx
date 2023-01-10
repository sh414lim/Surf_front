import { grid } from "@mui/system";
import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Grid, Box, Typography, Paper } from "@mui/material";

export default function KakaoMap() {
  return (
    <>
      <Grid spacing={2} sx={{ display: "flex" }}>
        <Grid xs={6}>
          <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: "50em", height: "50em" }}
          ></Map>
        </Grid>
        <Grid xs={6}></Grid>
      </Grid>
    </>
  );
}
