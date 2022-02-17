import {React,useState} from "react";
import "./sendmail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/react-hooks';
import { CREATE_POST } from "../../GraphQl/mutation";

const SendMail = () => {
  const history = useHistory();

    const[inputField,setInputField]=useState({
        to:'',
        subject:'',
        message:''
        
    })
const [createPost,{error}]=useMutation(CREATE_POST)

const inputHandler=(event)=>{
    setInputField({
        ...inputField,[event.target.name]:event.target.value
    });
}
    const addMail=()=>{
        console.log(inputField);
        createPost({
            variables:inputField
        })
    };

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (formData) => {
    addMail()
    history.push('/main')
    // alert('Mail Send')
    
  };
  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendmail__close"
          onClick={() => history.push("/main")}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          name="to"
          type="text"
          ref={register({ required: true })}
          onChange={(e)=>inputHandler(e)} 
          value={inputField.to}
        />
        {errors.to && <span className="send__errors">To is Required!</span>}
        <input
          placeholder="Subject"
          name="subject"
          type="text"
          ref={register({ required: true})}
          onChange={(e)=>inputHandler(e)} 
          value={inputField.subject}
        />
        {errors.subject && <span className="send__errors">Subject is Required!</span>}
        <input
          placeholder="Message..."
          name="message"
          type="text"
          className="sendmail__message"
          ref={register({ required: true })}
          onChange={(e)=>inputHandler(e)} 
          value={inputField.message}
        />
        {errors.message && <span className="send__errors">Message is Required!</span>}
        <div className="sendmail__options">
          <Button className="sendmail__send" color="primary" type="submit"  >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
