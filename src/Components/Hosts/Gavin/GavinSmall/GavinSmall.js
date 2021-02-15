import React from 'react';
import {Link} from 'react-router-dom';

import {gavin} from '../../../Bios/Bios';
import Tea from '../../../../images/Tea.jpg';
import {ExternalLink} from 'react-external-link';
import {Grid, CardMedia} from '@material-ui/core';
import { faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
      media: {
        height: '50vw',
        paddingTop: '56.25%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
        
      },
      title: {
          fontSize: '30px',
          textAlign: 'center',
          color: '#09f7ea',
          fontWeight: 600,
          textShadow: '2px 2px 3px #FF69B4;',
          fontFamily:  'Spartan, sans-serif',
         
          
},
     
        paper: {
          backgroundColor: '#0A0A2A',
          border: '2px solid #FF69B4',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          height: '100vh'
        },
      gsmallBio:{
        fontSize: '1em',
        textAlign: 'center',
        width: '100%',
        color: 'white',
        marginTop: 10,
        marginBottom: 55
      },
      smallSocial: {
        textAlign: 'center',
        
        
      }
    }));

    const GavinSmall = () => {
    const classes = useStyles();

        return(

    <div className={classes.paper}>
    <Link to="/" style={{textDecoration: 'none'}}>
    <h2 
       id="simple-modal-title"
       className={classes.title}
    >
         {gavin.name}
      </h2>
    </Link>
      
       <ExternalLink href="http://gavinstephens.ca" target="_blank" title="Gavin's Home page">
       <CardMedia
       image={Tea}
       className={classes.media}
       >

       </CardMedia>
       </ExternalLink>
   
      <p className={classes.gsmallBio} id="transition-modal-description">{gavin.bio}</p>
    <Grid className={classes.social}>
      <ExternalLink href="http://twitter.com/GavinbStephens" target="_blank">
      <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter" />
      </ExternalLink>

      <ExternalLink href="http://instagram.com/countgavin" target="_blank">
      <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram"/>
      </ExternalLink>
      
      <ExternalLink href="http://facebook.com/gavinstephens" target="_blank">
      <FontAwesomeIcon icon={faFacebook} size='2x' className="facebook"/>
      </ExternalLink>

      <ExternalLink href="http://youtube.com/gavinstephens" target="_blank">
      <FontAwesomeIcon icon={faYoutube} size='2x' className="youtube"/>
      </ExternalLink>
     
  </Grid>
    </div>

        );
    }

    export default GavinSmall