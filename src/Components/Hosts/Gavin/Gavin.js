import React, {useState} from 'react';
import GavinLogo from '../../../images/Gavin1.png'
import {gavin} from '../../Bios/Bios';
import Tea from '../../../images/Tea.jpg';
import {ExternalLink} from 'react-external-link';
import {Grid, CardMedia, CardActionArea, Typography, Fade, Modal, Backdrop} from '@material-ui/core';
import { faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import './Gavin.css';

const useStyles = makeStyles((theme) => ({
  root: {
      height: '100%',
      padding: 5,
     
  },
    media: {
      height: 117,
      paddingTop: '56.25%',
      marginRight: 8, 
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
      
    },
    name: {
        fontSize: '3vw',
        textAlign: 'center',
        marginTop: 115,
        color: '#F7D755',
        textShadow: '2px 2px 3px #000000;',
        fontFamily:  'Spartan, sans-serif',
        fontWeight: 600,
        '@media(max-width: 800px)' : {
          marginTop: 100,
        }
        
      
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
        
        
        
      },
      paper: {
        backgroundColor: '#0A0A2A',
        border: '2px solid #FF69B4',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    bio:{
      fontSize: 15,
      textAlign: 'center',
      width: 400,
      color: 'white'
    },
    social: {
      textAlign: 'center',
      
    }
  }));

const Gavin = ({clicked, id}) => {
const classes = useStyles();


const [open, setOpen] = useState(false);

const handleOpen = () => {
setOpen(true)
    
};

const handleClose = () => {
    setOpen(false);
};

 return (
    <Grid container className={classes.root}>
        <Grid item sm={4} style={{borderRight: '2px solid #FF69B4', height: '100%'}}>
            <CardActionArea>
                <CardMedia 
                image={GavinLogo}
                title="Gavin Stephens"
                className={classes.media}
                onClick={handleOpen}
                key={id}
                
                >
               
                </CardMedia>
            </CardActionArea>
        </Grid>
        <Grid item sm={8}>
            <Typography 
            variant="body2" 
            component="h1"
            className={classes.name}
            >
                GAVIN STEPHENS
            </Typography>
        </Grid>
    
        <div>
     <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
    <Fade in={open}>
       <div className={classes.paper}>
       <h2 
       id="simple-modal-title"
       style={{
        textAlign: 'center', 
        color: 'white',
        fontSize: 40
       }}
       >
         {gavin.name}
      </h2>
       <ExternalLink href="http://gavinstephens.ca" target="_blank" title="Gavin's Home page">
       <CardMedia
       image={Tea}
       className={classes.media}
       >

       </CardMedia>
       </ExternalLink>
   
      <p className={classes.bio} id="transition-modal-description">{gavin.bio}</p>
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
    </Fade>
      </Modal>
    </div>

    </Grid>
);
}

export default Gavin;