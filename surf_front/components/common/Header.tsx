import React from "react";
import { Box, Tab, Tabs, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles({
  headNav: {
    padding: "1px 3px 0px 5px",
  },
});

const Header = () => {
  const customStyle = useStyles();

  return (
    <Grid
      sx={{
        color: "black",
        padding: "15px",
        // borderBottom: "1px solid rgba(0,0,0,0.2)",
      }}
    >
      <Grid xs={4} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "20px", "&:hover": { opacity: "0.6" } }}>
          <Link href="/">S U R F</Link>
        </Typography>
        <Typography
          sx={{
            fontSize: "19px",
            margin: "0px 0px 0px 0px",
            "&:hover": { opacity: "0.6" },
          }}
        >
          <Link href="/Shop/ShopList"> Where is Best Place?</Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Typography sx={{ padding: "1px 3px 0px 5px" }}>
            <Link href="/Shop/PlaceList">Shop</Link>
          </Typography>
          <Typography sx={{ padding: "1px 3px 0px 5px" }}>
            <Link href="/weather/weatherInfo">Bitch</Link>
          </Typography>
          <Link href="/auth/LoginPage">
            <Typography
              sx={{ padding: "1px 3px 0px 5px", "&:hover": { opacity: "0.6" } }}
            >
              Login{" "}
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
