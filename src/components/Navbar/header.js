import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import { useHistory } from "react-router-dom";
import './header.css'
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Apps,
  CameraAltOutlined,
  HelpOutline,
  Menu,
  PersonAddOutlined,
  Search,
  Settings,
} from "@material-ui/icons";
import { Avatar, Badge, Button, makeStyles, Popover } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = () => {
  const {user}=useContext(AuthContext)
  const history = useHistory();
  const context=useContext(AuthContext);
  const classes = useStyles();


  const [anchorEl, setAnchorEl] = useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
 
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;


  function logoutUser(){
    context.logout(null)
    history.push('/')
  }


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
      <div className="home__right">
        <HelpOutline />
        <Settings />
        <Apps />
        <div>
          <Avatar onClick={handleClick} />
          <Popover
            open={open}
            id={id}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
            }}
          >
            <div className="home__popoverContainer">
              <div className="home__popover__top">
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  badgeContent={
                    <div className="home__badge">
                      <CameraAltOutlined className="home__camera" />
                    </div>
                  }
                >
                  <Avatar className={classes.large} />
                </Badge>
                
                <div className="home__text">
                  <div className="home__displayName">
                    {user.username}
                  </div>
                  <div className="home__mail">
                    {user.email}
                    </div>
                </div>

                <div className="home__btn">Manage your google account</div>
              </div>

              <div className="home__popover__btm">
                <div className="home__addBtn">
                  <PersonAddOutlined className="home__addIcon" />
                  <p>Add another account</p>
                </div>

                <Button
                  variant="outlined"
                  className="home__signOut"
                  onClick={logoutUser}
                >
                  Sign Out
                </Button>

                <div className="home__popover__footer">
                  <p>Privacy Policy</p>
                  <span>•</span>
                  <p>Terms of service</p>
                </div>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;