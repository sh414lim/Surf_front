import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";

interface ShopItemContainer {
  originalTitle: string;
  voteCount: number;
  posterPath?: string;
}

const ShopListItem = ({
  originalTitle,
  voteCount,
  posterPath,
}: ShopItemContainer) => {
  // type test = (parrams: String, paramstWO: Number) => void;

  return (
    <>
      <Grid
        xs={6}
        sx={{
          padding: "10px",
          width: "80%",
        }}
      >
        {/* <Paper> */}
        <Typography sx={{ fontSize: "20px" }}>{originalTitle}</Typography>
        <Box sx={{ width: "90%" }}>
          <Typography>{voteCount}</Typography>
          <Box sx={{ justifyContent: "end", display: "flex" }}>
            <img src={`https://image.tmdb.org/t/p/w200/${posterPath}`} />
          </Box>
        </Box>
        {/* </Paper> */}
      </Grid>
    </>
  );
};

export default ShopListItem;
