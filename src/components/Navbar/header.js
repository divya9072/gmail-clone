import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar,IconButton,Button } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppIcon from '@mui/icons-material/Apps';
import NotificationIcon from '@mui/icons-material/Notifications';
import './header.css'
import { AuthContext } from "../../context/auth";
import { useHistory } from "react-router-dom";

import { Badge, makeStyles, Popover } from "@material-ui/core";
import {
  Apps,
  CameraAltOutlined,
  Menu,
  Notifications,
  PersonAddOutlined,
  Search,
  VideoCall,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = () => {
  const history = useHistory();
  const context=useContext(AuthContext);

  function logoutUser(){
    context.logout(null)
    history.push('/')
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <Button variant="contained" color="grey" onClick={logoutUser}>logout</Button>
        <IconButton>
          <AppIcon/>
        </IconButton>
        <IconButton>
          <NotificationIcon/>
        </IconButton>
        {/* <Avatar/> */}
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

              {/* <div className="home__text">
                <div className="home__displayName">
                  {currentUser?.displayName}
                </div>
                <div className="home__mail">{currentUser?.email}</div>
              </div> */}
              <div className="home__btn">Manage your google account</div>
            </div>

            <div className="home__popover__btm">
              <div className="home__addBtn">
                <PersonAddOutlined className="home__addIcon" />
                <p>Add another account</p>
              </div>

              {/* <Button
                onClick={() => auth.signOut()}
                variant="outlined"
                className="home__signOut"
              >
                Sign Out
              </Button> */}

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
  );
};

export default Header;











































