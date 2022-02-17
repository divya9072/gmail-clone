import React from "react";
import "./sentpage.css";
import { FETCH_MAILS_QUERY } from "../../GraphQl/query";
import { useQuery } from "@apollo/react-hooks";


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
  import "../EmailList/emaillist.css";
//   import EmailRow from "./sendpagecomponent";
  import SendPageComponent from "./sendpagecomponent"
//   import Section from "../EmailList/section";

const SentPage = () => {
  const {loading,error,data} = useQuery(FETCH_MAILS_QUERY);
  if (loading) return "Loading"
  if (error) return "error"
  if (data) console.log(data)

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
  {data.getMails.map(data=>(
  <div className="emaillist__list">
    <SendPageComponent to={data.to}
    subject={data.subject} 
    message={data.message} 
    time="10pm"/>
  </div>
    ))}
  
</div>
);
};

export default SentPage;
