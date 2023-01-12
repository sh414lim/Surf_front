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
            <Tab icon={<PhoneIcon />} label="강릉" />
            <Tab icon={<FavoriteIcon />} label="제주" />
            <Tab icon={<PersonPinIcon />} label="양양" />
            <Tab icon={<PhoneIcon />} label="부산" />
            <Tab icon={<FavoriteIcon />} label="울산" />
            <Tab icon={<PersonPinIcon />} label="동해" />
            <Tab icon={<PhoneIcon />} label="속초" />
            <Tab icon={<FavoriteIcon />} label="호주" />
            <Tab icon={<PersonPinIcon />} label="남해" />
            <Tab icon={<PhoneIcon />} label="동해" />
            <Tab icon={<FavoriteIcon />} label="영덕" />
            <Tab icon={<PersonPinIcon />} label="서귀포" />
            <Tab icon={<PhoneIcon />} label="김해" />
            <Tab icon={<FavoriteIcon />} label="진주" />
            <Tab icon={<PersonPinIcon />} label="애월" />
            <Tab icon={<PhoneIcon />} label="일본" />
            <Tab icon={<PersonPinIcon />} label="서귀포" />
          </Tabs>
        </Grid>
        <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <PlaceListInfo />
        </Grid>
      </Grid>
    </>
  );
}
