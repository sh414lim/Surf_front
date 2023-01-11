import React from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Link from "next/link";
const IntroPage = () => {
  return (
    <Box
      sx={{
        width: "98%",
        height: "auto",
        overflowY: "scroll",
        margin: "0px 0px 0px 20px",
      }}
    >
      <ImageList variant="masonry" cols={6} gap={17}>
        <Link href="Shop/ShopList">
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                boxShadow: "5px 5px 15px 1px rgba(0, 0, 0, .3)",
                "&:hover": {
                  boxShadow: "10px 10px 20px 3px rgba(0, 0, 0, .9)",
                  transition: "0.5s",
                },
              }}
            >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                // alt={item.title}
              />
            </ImageListItem>
          ))}
        </Link>
      </ImageList>
    </Box>
  );
};

export default IntroPage;

export const itemData = [
  {
    img: "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1571690584414-fa2a1127a2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1502933691298-84fc14542831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1520443240718-fce21901db79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "Kitchen",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1666253649209-aa2115007413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1513737567531-bc431c8e5e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1583897167431-9d7b49f590e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1495819427834-1954f20ebb97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1580250864656-cd501faa9c76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1475706997440-9f2a24435b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "text",
  },
  {
    img: " https://images.unsplash.com/photo-1506797220058-533e019ac7fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "text",
  },
  {
    img: "https://images.unsplash.com/photo-1608880619984-49d0ad6e70a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "123",
  },
  {
    img: "https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1571690584414-fa2a1127a2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1502933691298-84fc14542831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1520443240718-fce21901db79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Sink",
  },
  {
    img: " https://images.unsplash.com/photo-1506797220058-533e019ac7fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "text",
  },
  {
    img: "https://images.unsplash.com/photo-1608880619984-49d0ad6e70a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHN1cmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "123",
  },
  {
    img: "https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Bed",
  },
];
