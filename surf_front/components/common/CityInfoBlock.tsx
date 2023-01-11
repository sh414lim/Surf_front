import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import ShopListItem from "../../components/shop/ShopListItem";
import { WbSunny, Air, Thunderstorm, Cloud } from "@mui/icons-material";

export default function CityInfoBlock() {
  return (
    <>
      <Box
        sx={{
          margin: "10px 10px 10px 20px",
          padding: "70px 100px 70px 100px ",
          boxShadow: "1px 2px 1px 2px rgba(0,0,0,0.3)",
          borderRadius: "10px",
          backgroundImage: `url(https://images.unsplash.com/photo-1531901379850-580856b336cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fCVFQSVCMCU5NSVFQiVBNiU4OXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=350&q=60)`,
          opacity: 0.85,
          "&:hover": {
            boxShadow: "2px 3px 2px 3px rgba(0, 0, 0, .6)",
            transition: "0.2s",
            opacity: 1,
          },
        }}
      >
        <Box
          sx={
            {
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "end",
              // alignContent: "end",
              // justifyContent: "end",
              // margin: "10px 0px 10px 0px",
              // padding: "30px",
            }
          }
        >
          <Typography
            sx={{
              fontSize: "30px",
              //   fontWeight: "600",
              //   color: "white",
              margin: "0px 0px 0px 20px",
            }}
          >
            서핑샵
          </Typography>
          {/* <Typography>he best burger</Typography> */}
        </Box>
      </Box>
    </>
  );
}
