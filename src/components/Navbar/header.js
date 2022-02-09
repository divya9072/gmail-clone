import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar,IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppIcon from '@mui/icons-material/Apps';
import NotificationIcon from '@mui/icons-material/Notifications';
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="logo img"
        />
      </div>
      <div className="header__middle">
        <SearchIcon/>
        <input placeholder="Search mail" type='text'></input>
        <ArrowDropDownIcon/>
      </div>
      <div className="header__right">
        <IconButton>
          <AppIcon/>
        </IconButton>
        <IconButton>
          <NotificationIcon/>
        </IconButton>
        <Avatar/>
      </div>
    </div>
  );
};

export default Header;
