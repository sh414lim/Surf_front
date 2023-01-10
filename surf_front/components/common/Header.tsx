import React from "react";
import { Box, Tab, Tabs, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles({
  headNav: {
    padding: "1px 3px 0px 3px",
  },
});

const Header = () => {
  const customStyle = useStyles();

  return (
    <Grid
      sx={{
        color: "black",
        padding: "15px",
        width: "90%",
        margin: "0px 0px 0px 50px",
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
          <Typography className={customStyle.headNav}>
            <Link href="/Shop/ShopList">Shop</Link>
          </Typography>
          <Typography className={customStyle.headNav}>Bitch</Typography>
          <Link href="/auth/LoginPage">
            <Typography
              sx={{ "&:hover": { opacity: "0.6" } }}
              className={customStyle.headNav}
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
