import React from 'react';

import {Divider, Button, Avatar, ListItem} from '@material-ui/core';
import { faFacebook, faPatreon, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {ExternalLink} from 'react-external-link';
import { Email } from '@material-ui/icons';

import Gavin from '../../../images/Gavin2.png';

import { makeStyles } from '@material-ui/core/styles';

import Daniel from '../../../images/Daniel2.png'
import {Link} from 'react-router-dom';
import './TinyNaviagation.css';

const useStyles = makeStyles((theme) => ({
large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
hostButton: {
        fontSize: '0.8em',
        color: '#09f7ea',
        padding: 5,
        width: 200,
        zIndex: 100,
        fontFamily: 'Spartan, sans-serif',
        fontWeight: 600,
        marginBottom: 15,
        textShadow: '1px 1px #FF59B7',
        backgroundImage: 'linear-gradient(to bottom, #000C1A , #0A0A2A)',

},
patreonButton: {
    fontSize: '0.8em',
    textTransform: 'scale(1.5)',
    color: '#09f7ea',
    padding: 10,
    marginTop: 20,
    width: 200,
    fontFamily: 'Spartan, sans-serif',
    fontWeight: 600,
    marginBottom: 5,
    textShadow: '1px 1px #FF59B7',
    backgroundImage: 'linear-gradient(to bottom, #000C1A , #0A0A2A)',

},

contactButton: {
    fontSize: '0.5em',
        color: '#09f7ea',
        padding: 5,
        width: 200,
        fontFamily: 'Spartan, sans-serif',
        fontWeight: 600,
        marginTop: 10,
        textShadow: '1px 1px #FF59B7',
        backgroundImage: 'linear-gradient(to bottom, #000C1A , #0A0A2A)',

}
  }));



const TinyNavigation = () => {
const classes = useStyles();
    return(
        <div className="navbar">
         <Link to='/'>
            <div className="podLogo"></div>
         </Link>
            
             <ul>
               <li><h3>THE HOSTS</h3></li>
       
                <ListItem>
                    <Link to='/gavin' style={{textDecoration: 'none'}}>
                    <Button 
                    variant="contained"
                    className={classes.hostButton}
                    startIcon={<Avatar 
                    src={Gavin} 
                    style={{fontSize: '1.2em'}}/>}>
                        GAVIN
                    </Button>
                    </Link>
                    
                </ListItem>
            
                
                    <ListItem>
                    <Link to='/daniel' style={{textDecoration: 'none'}}>
                    <Button
                        variant="contained"
                        className={classes.hostButton}
                        startIcon={<Avatar 
                        src={Daniel} 
                        style={{fontSize: '1.2em'}}/>}>
                            DANIEL
                        </Button>
                    </Link>
                   
                    </ListItem>
              
                <Divider/>
                <ExternalLink 
                href="http://patreon.com/theuncolonized" 
                target="_blank" 
                title="Patreon" 
                style={{textDecoration: 'none'}}>
                    <Button
                    variant="contained"
                    className={classes.patreonButton}
                    startIcon={<FontAwesomeIcon 
                    icon={faPatreon}
                    
                    />}
                    >
                    PATREON EPISODES
                    </Button>

                </ExternalLink>
             
                <ListItem>
                <Link to="/contact" style={{textDecoration: 'none'}}>
                    <Button
                    variant="contained"
                    className={classes.contactButton}
                    startIcon={<Email style={{fontSize: '2em'}}/>}
                    >
                        CONTACT
                    </Button>
                    </Link>
                </ListItem>

                {/* social media */}
     
              
             


                <ExternalLink href="https://www.youtube.com/channel/UCNnqsoNrRBTlZi9JbuLHBiw" title="Youtube" target="_blank">
                <FontAwesomeIcon icon={faYoutube}  className="smallYoutube"/>
                </ExternalLink>

            
               
         

           
                <ExternalLink href="https://www.facebook.com/UncolonizedPod" target="_blank" title="Facebook">
                <FontAwesomeIcon icon={faFacebook}  className="smallFacebook" />
                </ExternalLink>
           

        
            <ExternalLink href="https://twitter.com/UncolonizedPod" target="_blank" title="twitter">
            <FontAwesomeIcon icon={faTwitter}   className="smallTwitter"/>
            </ExternalLink>
        

 
          <ExternalLink href="https://www.instagram.com/uncolonizedpodcast/" target="_blank" title="Instagram">
          <FontAwesomeIcon icon={faInstagram}  className="smallInstagram"/>
          </ExternalLink>
     

       
           
                
             

            </ul>
        </div>

    );
};

export default TinyNavigation;