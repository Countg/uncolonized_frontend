import React from 'react';
import ContactInput from '../ContactInput/ContactInput';
import Header from '../../Header/Header';


import './smallContact.css';

const SmallContact = () => {
   return (
        <div className="small-container" >
              <Header/>
         <div className="small-words">
          
         <p>CONTACT US</p>
         </div>
            <ContactInput/>
            <div>
                
            </div>
            
        </div>

    );
};

export default SmallContact;