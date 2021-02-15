import React from 'react';
import ChoLogo from '../../images/ChonillaNetwork.png';


import {ExternalLink} from 'react-external-link';


import './chonilla.css';





const Chonilla = () => {



    return (
        <div className="call-container">
        <div className="call-to-action">
            <p>UNCOLONIZED IS PART OF THE CHONILLA NETWORK. A PODCAST COLLECTIVE WITH CONTENT TO MAKE YOU LAUGH, THINK, AND LEARN</p>
           
        
        </div>
        <div className="chonilla">
        <ExternalLink href="https://chonillanetwork.com/" target="_blank" title="Chonilla Network" style={{textDecoration: 'none'}}>
        <img src={ChoLogo} alt="Chonilla"/>

           </ExternalLink>
            
            </div>
      </div>


    );

}

export default Chonilla;