import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { TopContainer, TopLink, ImageStyle } from "./TopBar.style";

const TopBar = () => (
  <div>
    <TopContainer>
      <TopLink>
        <Link style={{
          textDecoration: "none",
          color: "white",
        }}
        to="/">
          Trở về trang chủ
        </Link>
      </TopLink>
      <ImageStyle>
        <img src={logo} alt="logo" width="36px" height="36px"/>
      </ImageStyle>
    </TopContainer>
  </div>
);

export default TopBar;
