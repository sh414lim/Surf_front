import * as React from "react";
import Tabs from "@mui/material/Tabs";
import { Tab, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PlaceListInfo from "../../components/common/PlaceListInfo";

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <Tabs
            value={value}
            sx={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="강릉"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="제주"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="양양"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="부산"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="울산"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="동해"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="속초"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="호주"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="남해"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="동해"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="영덕"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="서귀포"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="김해"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="진주"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="애월"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="일본"
            />
            <Tab
              sx={{
                "&:hover": {
                  color: "pink",
                  transition: "0.5s",
                },
              }}
              icon={<FavoriteIcon />}
              label="서귀포"
            />
          </Tabs>
        </Grid>
        <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <PlaceListInfo />
        </Grid>
      </Grid>
    </>
  );
}
