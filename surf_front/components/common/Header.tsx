import React from "react";
import { Box, Tab, Tabs, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headNav: {
    padding: "1px 3px 0px 3px",
  },
});

const Header = () => {
  const customStyle = useStyles();

  return (
    <Grid sx={{ color: "black" }}>
      <Grid xs={4} sx={{ display: "flex" }}>
        <Typography sx={{ fontSize: "20px" }}>S U R F</Typography>
      </Grid>
      <Grid xs={4} sx={{ margin: "0px 0px 0px 0px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontSize: "19px",
                margin: "0px 0px 0px 0px",
                "&:hover": { color: "blue" },
              }}
            >
              Where is Best Place?
            </Typography>
          </Typography>
        </Box>
      </Grid>

      <Grid xs={4}>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Typography className={customStyle.headNav}>SHOP</Typography>
          <Typography className={customStyle.headNav}>BITCH</Typography>
          <Typography className={customStyle.headNav}> </Typography>
          <Typography className={customStyle.headNav}>SIGN UP</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
