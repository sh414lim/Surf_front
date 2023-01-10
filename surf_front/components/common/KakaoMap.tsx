import { grid } from "@mui/system";
import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Grid, Box, Typography, Paper } from "@mui/material";

export default function KakaoMap() {
  const [position, setPosition] = useState({
    lat: 33.5563,
    lng: 126.79581,
  });

  return (
    <>
      <Grid spacing={2} sx={{ display: "flex" }}>
        <Grid xs={6}>
          <Map
            center={{ lat: position.lat, lng: position.lng }}
            style={{ width: "50em", height: "50em" }}
            onClick={(_t, mouseEvent) =>
              setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              })
            }
          ></Map>
        </Grid>
        {JSON.stringify(position)}
      </Grid>
    </>
  );
}
