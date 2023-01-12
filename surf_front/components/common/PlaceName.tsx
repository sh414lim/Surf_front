import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { WbSunny, Air, Thunderstorm, Cloud } from "@mui/icons-material";

export default function PlaceName() {
  return (
    <>
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
    </>
  );
}
