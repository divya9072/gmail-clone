import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./emailrow.css";
import{useHistory} from "react-router-dom"

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory()

  return (
    <div onClick={()=> history.push('/mail')}className="emailrow">
      <div className="emailrow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
        </div>
        <h3 className="emailrow__title">{title}</h3>

        <div className="emailrow__message">
          <h4>
            {subject}
            <span className="emailrow__description">{description}</span>
          </h4>
        </div>
        <p className="emailrow__time">{time}</p>
      </div>

  );
};

export default EmailRow;
