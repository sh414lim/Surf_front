import React from "react";
import Header from "../common/Header";
import { Box, ImageList, ImageListItem, Typography, Grid } from "@mui/material";

export default function AppLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Grid sx={{ background: "white" }}>
        <Box>{/* <Header /> */}</Box>
        {props.children}
      </Grid>
    </>
  );
}
