import { Button, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import InboxIcon from "@mui/icons-material/Inbox";
import "./sidebar.css";
import SidebarOption from "./sidebaroption";
import { AccessTime, Duo, ExpandMore, LabelImportant, NearMe, Note, Person, Phone } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        style={{ color: "black" }}
      >
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}></SidebarOption>
      <SidebarOption Icon={StarIcon} title="Starred" number={54}></SidebarOption>
      <SidebarOption Icon={AccessTime} title="Snoozed" number={54}></SidebarOption>
      <SidebarOption Icon={LabelImportant} title="Important" number={54}></SidebarOption>
      <SidebarOption Icon={NearMe} title="Sent" number={54}></SidebarOption>
      <SidebarOption Icon={Note} title="Drafts" number={54}></SidebarOption>
      <SidebarOption Icon={ExpandMore} title="More" number={54}></SidebarOption>
    <div className="sidebar__footer">
      <div className="sidebar__footerIcons">
        <IconButton>
          <Person/>
        </IconButton>
        <IconButton>
          <Duo/>
        </IconButton>
        <IconButton>
            <Phone/>
        </IconButton>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
