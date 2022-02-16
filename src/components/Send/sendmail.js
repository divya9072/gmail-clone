import React from 'react'
import './sendmail.css'
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@mui/material";
import{useHistory} from "react-router-dom";

const SendMail = () => {
  const history = useHistory()
  return (
    <div className='sendmail'>
      <div className='sendmail__header'>
        <h3>New Message</h3>
        <CloseIcon className='sendmail__close' onClick={()=> history.push('/main')}/>
      </div>
      <form>
        <input placeholder='To' type='text'/>
        <input placeholder='Subject' type='text'/>
        <input placeholder='Message...' type='text' className='sendmail__message'/>
        <div className='sendmail__options'>
          <Button className='sendmail__send' color='primary' type='submit'>Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail