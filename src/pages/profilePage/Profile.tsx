import { Avatar, Button, ImageList, ImageListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./profile.css";
import avatar from "../../imgs/WhatsApp Image 2022-02-05 at 1.28.24 AM.jpeg";
import { Box } from "@mui/system";
import image1 from "../../imgs/trees.jpg";
import Container from "@mui/material/Container";

import useWindowDimensions from "../../useWindowDimensions";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { height, width } = useWindowDimensions();
  const [columns, setColumns] = useState(3);

  useEffect(() => {}, [width]);

  const handleWidthChange = (width: number) => {
    if (width < 1000) {
      setColumns(1);
    } else {
      setColumns(3);
    }
  };
  return (
    <div className="profile">
      <Box className="profileInfo">
        <div className="avatar">
          <Avatar alt="amr" src={avatar} sx={{ width: 150, height: 150 }} />
        </div>
        <div>
          <div className="editProfile">
            <h2>Amr Atallah</h2>
            <Link to="/profile/editprofile/EditProfilePage">
              <Button
                sx={{
                  color: "black",
                  height: "40px",
                  margin: "10px",
                }}
                variant="outlined"
              >
                Edit profile
              </Button>
            </Link>
          </div>
          <div className="friendslinks">
            <h5> 500 friends</h5>
            <h5> 500 friend requests</h5>
          </div>
        </div>
      </Box>
      <Container maxWidth="lg">
        <ImageList variant="masonry" cols={columns} gap={8}>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={image1}></img>
          </ImageListItem>
        </ImageList>
      </Container>
    </div>
  );
};
