import { Avatar } from "@mui/material";
import React from "react";
import { PostsContainer } from "../../components/PostsContainer";
import avatar from "../../imgs/WhatsApp Image 2022-02-05 at 1.28.24 AM.jpeg";
import "./homePage.css";

export const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="info">
        <Avatar src={avatar} alt="avatar" />
        <h5 className="h5name">Amr atallah</h5>
      </div>
      <PostsContainer />
    </div>
  );
};
