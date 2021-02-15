
import React from 'react';
import Hero from '../../images/NewHero.png';
import logo from '../../images/whiteLogo.png'
import {Link} from 'react-router-dom';

import LazyHero from 'react-lazy-hero';




import './Header.css';


const Header = () => {
  

    return (
  <div >
    <LazyHero 
    imageSrc={Hero}
    opacity={0.3}
    color='#0A0A2A'
    parallaxOffset={150}
    className="hero-image"
    children={<Link to="/"><img src={logo} alt="Uncolonized Logo" style={{width: '100%', height: '100%'}}/></Link>}
   
    >
      
     
    
    </LazyHero>
   
   
       

     
  </div>
      
          

    

    );
}
export default Header;