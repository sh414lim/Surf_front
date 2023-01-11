import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { WbSunny, Air, Thunderstorm, Cloud } from "@mui/icons-material";

export default function PlaceInfo() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "end",
          margin: "20px 0px 0px 150px",
        }}
      >
        <Typography
          sx={{
            fontSize: "100px",
          }}
        >
          7:20
        </Typography>
        <Typography
          sx={{
            margin: "0px 0px 30px 0px",
          }}
        >
          <WbSunny
            sx={{
              color: "yellow",
              margin: "0px 10px 0px 20px",
            }}
          />
          80.F
        </Typography>
      </Box>
      <Typography sx={{ margin: "0px 0px 0px 200px" }}>
        Extra cool people meeting 10AM
      </Typography>
    </>
  );
}
