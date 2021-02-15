import React from 'react';
import ContactInput from './ContactInput/ContactInput';



import './ContactScreen.css';

const ContactScreen = () => {
return(
        <div className="Contact_item">
            <div className="title">
                <h1> CONTACT US </h1>
        </div>
           
            <div className="writing">
               <p>We love to hear from our listeners. Why not drop us a line, send us a question, comment or suggest an episode? </p>
            </div>
            <div className="input">
                <ContactInput/>
            </div>
         

        
        </div>

    )
};

export default ContactScreen

