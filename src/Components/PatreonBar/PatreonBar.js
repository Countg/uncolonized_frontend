import React from 'react';
import  {ExternalLink} from 'react-external-link';
import './PatreonBar.css'



const PatreonBar = () => {
return (
     <ExternalLink href="http://patreon.com/theuncolonized" target="_blank">
         <div className='grid-container'>
        
          <div className='Words'>SHOW YOUR SUPPORT BY JOINING OUR PATREON!</div>
         </div>

     </ExternalLink>
      
    
        

    );
};

export default PatreonBar;