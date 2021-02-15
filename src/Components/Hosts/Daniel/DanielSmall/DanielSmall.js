import React from 'react';

import {Grid, CardMedia} from '@material-ui/core';
import {  faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {daniel} from '../../../Bios/Bios';
import {ExternalLink} from 'react-external-link';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import DanielRap from '../../../../images/DanielRap.JPG';

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
          },
        smallBio:{
          fontSize: '1em',
          textAlign: 'center',
          width: '100%',
          color: 'white',
          marginTop: 5,
          
        },
        smallSocial: {
          textAlign: 'center',
          fontSize: 20,
         
       
          
        },
      
    }));


const DanielSmall = () => {
const classes = useStyles();
    return (
        <div className={classes.paper}>
        <Link to="/" style={{textDecoration: 'none'}}>
        <h2 className={classes.title}>
            {daniel.name}
           </h2>
        </Link>
       
       <ExternalLink href="http://TDFeverything.com" target="_blank" title="TDF Everything home page">
       <CardMedia
        image={DanielRap}
        className={classes.media}
        >
 
        </CardMedia>
       </ExternalLink>
      
     
       <p className={classes.smallBio} id="transition-modal-description">{daniel.bio}</p>
       <Grid className={classes.social}>
 
       <ExternalLink href="http://twitter.com/theyungguard" target="_blank">
       <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter" />
       </ExternalLink>
       
       <ExternalLink href="http://Instagram.com/yungguard" target="_blaank">
       <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram" />
       </ExternalLink>
       
       </Grid>
      </div>
    );
}

export default DanielSmall;