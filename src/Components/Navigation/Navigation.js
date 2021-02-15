import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {ExternalLink} from 'react-external-link';

import { faFacebook,  faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './Navigation.css'

const Navigation = () => {
const [navBar, setNavBar] = useState(false)
const [showScroll, setShowScroll] = useState(false);

 
const navScroll = () => {
if(window.scrollY >= 293){
    setNavBar(true);
    
 
  } else {
    setNavBar(false)

   
  }
 
};

window.addEventListener('scroll', navScroll);

const checkScrollTop = () => {
  if (!showScroll && window.pageYOffset > 400){
    setShowScroll(true)
  } else if (showScroll && window.pageYOffset <= 400){
    setShowScroll(false)
  }
};

const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};

window.addEventListener('scroll', checkScrollTop)

return(
  
    <div className={navBar ? 'nav active' : 'nav'}>
    <div className={navBar ? 'logo active' : 'logo'} onClick={scrollTop}></div>
   
    <ul>

    

   <li><ExternalLink href="https://www.youtube.com/channel/UCNnqsoNrRBTlZi9JbuLHBiw" title="Youtube" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="lg" className={navBar ? 'pat active' : 'pat'}/>
      </ExternalLink></li>

      <li><ExternalLink href="https://www.facebook.com/UncolonizedPod" target="_blank" title="Facebook">
        <FontAwesomeIcon icon={faFacebook} size="lg" className={navBar ? 'face active' : 'face'}/>
      </ExternalLink>
    </li>

      <li><ExternalLink href="https://twitter.com/UncolonizedPod" target="_blank" title="twitter">
        <FontAwesomeIcon icon={faTwitter} size="lg" className={navBar ? 'tweet active' : 'tweet'}/>
          </ExternalLink>
    </li>
      <li><ExternalLink href="https://www.instagram.com/uncolonizedpodcast/" target="_blank" title="Instagram">
        <FontAwesomeIcon icon={faInstagram} size="lg" className={navBar ? 'gram active' : 'gram'}/>
        </ExternalLink>
      </li>
   

      



   </ul>
     
    
  </div>

  )
   

}

export default Navigation