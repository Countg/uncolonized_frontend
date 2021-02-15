import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';



import axios from 'axios';
import * as Yup from 'yup';

import './ContactInput.css'

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


const ContactInput = () => {
const [success, setSuccess] = useState(false);
const [fail, setFail] = useState(false)
// eslint-disable-next-line
const [set, setSent] = useState(false);


    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
        .required('Your First Name is required'),
        lastName: Yup.string()
        .required('Your Last Name is required '),
        email: Yup.string()
        .required('Your email is required')
        .email()
    });
    

   
    
    const { register, handleSubmit, reset, errors, clearErrors } = useForm({
        resolver: yupResolver(validationSchema)
    });
    
  
    
    
const onSubmitHandler = (data, e) => {
 e.preventDefault();  
axios.post('https://uncolonized-site.herokuapp.com/send', data)
        .then(res => {
          setSent(true)
          setSuccess(true)
    })
    .catch(err => {
        console.log(err)
        setFail(true)
    })
       e.target.reset() 
       
    };





    const handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSuccess(false);
        setFail(false)
      };


return (
    
    <div className="contact">
    <form onSubmit={handleSubmit(onSubmitHandler)} onReset={reset}>
        <div>
        <p>FIRST NAME</p>
        <input name="firstName" ref={register} type="text"/>
        <span style={{color: 'red'}}>{errors.firstName?.message}</span>
      
        </div>
        <div >
        <p>LAST NAME</p>
        <input name="lastName" ref={register} type="text" />
        <span style={{color: 'red'}}>{errors.lastName?.message}</span>
      
        </div>
        <div>
            <p>EMAIL</p>
            <input type="email" name="email" ref={register} />
            <span style={{color: 'red'}}>{errors.email?.message}</span>
        </div>
        <div>
            <p>MESSAGE</p>
            <textarea type="textArea" name="message" ref={register}/>
        </div>
        <button 
        type='submit'
        onClick={() => clearErrors(["name", "email"])}
        >
            SUBMIT
        </button>

        <Snackbar 
        open={success} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            
        }}

        >
        <Alert  severity="success">
          Your Message Was Sent Successfully!
        </Alert>
      </Snackbar>

      <Snackbar 
        open={fail} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            
        }}

        >
        <Alert  severity="error">
          An Error Has Occurred
        </Alert>
      </Snackbar>
       

    </form>
    
      

    </div>
 
    );
}

export default ContactInput;