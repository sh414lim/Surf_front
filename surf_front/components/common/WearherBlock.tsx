import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import ShopListItem from "../../components/shop/ShopListItem";
import { WbSunny, Air, Thunderstorm, Cloud } from "@mui/icons-material";

export default function WearherBlock() {
  return (
    <>
      <Box
        sx={{
          padding: "10px 20px 20px 20px",
          margin: "10px 10px 10px 20px",
          boxShadow: "1px 2px 1px 2px rgba(0,0,0,0.3)",
          backgroundColor: "rgba( 255, 255, 255, 0.2 )",
          borderRadius: "10px",
          "&:hover": {
            boxShadow: "2px 3px 2px 3px rgba(0, 0, 0, .6)",
            transition: "0.2s",
          },
        }}
      >
        <Box
          sx={{
            padding: "20px 50px 20px 50px",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ margin: "0px 0px 10px 0px", fontSize: "20px" }}>
            79.F
          </Typography>
          <WbSunny
            sx={{
              color: "yellow",
              margin: "0px 10px 0px 20px",
              fontSize: "50px",
            }}
          />
          <Typography sx={{ margin: "10px 0px 0px 0px", fontSize: "20px" }}>
            Mon
          </Typography>
        </Box>
      </Box>
    </>
  );
}
