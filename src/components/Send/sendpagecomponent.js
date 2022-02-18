import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "../EmailList/emailrow.css";
import{useHistory} from "react-router-dom"

const SendPageComponent = ({ id, to, subject, message,time }) => {
  const history = useHistory()

  return (
    <div className="emailrow_send">
      <div className="emailrow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
        </div>
        <h3 className="emailrow__title">{to}</h3>

        <div className="emailrow__message">
          <h4>
            {subject}
            <span className="emailrow__description">{message}</span>
          </h4>
        </div>
        <p className="emailrow__time">{time}</p>
      </div>

  );
};

export default SendPageComponent;