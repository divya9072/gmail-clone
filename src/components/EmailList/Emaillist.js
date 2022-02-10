import {
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Inbox from "@mui/icons-material/Inbox";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./emaillist.css";
import EmailRow from "./emailrow";
import Section from "./section";

const Emaillist = () => {
  return (
    <div className="emaillist">
      <div className="emaillist__settings">
        <div className="emaillist__settingsleft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emaillist__settingsright">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emaillist__sections">
        <Section Icon={Inbox} title="primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8"  />
        <Section Icon={LocalOffer} title="Promotions" color="green"  />
      </div>
      <div className="emaillist__list">
        <EmailRow title="Twitched" subject="Hey fellow streamer!!!" 
        description="This is a test" time="10pm"/>
        <EmailRow title="Twitched" subject="Hey fellow streamer!!!" 
        description="This is a DOPE" time="10pm"/>
      
      </div>
      
    </div>
  );
};

export default Emaillist;
