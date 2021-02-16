import React, {useState} from 'react';
import {Grid, CardMedia, CardActionArea, Typography, Fade, Modal, Backdrop, Button} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {daniel} from '../../Bios/Bios';
import {ExternalLink} from 'react-external-link';
import { makeStyles } from '@material-ui/core/styles';
import DanielLogo from '../../../images/NormieDaniel.JPG';
import DanielRap from '../../../images/DanielRap.JPG';
import LazyLoad from 'react-lazyload';
import './Daniel.css';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: 5,
       
    },
      media: {
        height: 117,
        paddingTop: '56.25%',
        marginLeft: 8, 
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
      },
      name: {
          fontSize: '3vw',
          marginTop: 115,
          color: '#F7D755',
          textShadow: '2px 2px 3px #000000;',
          fontFamily:  'Spartan, sans-serif',
          fontWeight: 600,
          cursor: 'pointer',
          '&:hover': {
            color: '#09f7ea'
          },
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
          
        },
        closeButton: {
          color: 'white',
          float: 'right',
          
        }
      
    }));

const Daniel = () => {
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
         <Grid item sm={8}>
            <Typography 
            onClick={handleOpen}
            variant="body2" 
            component="h1"
            className={classes.name}
            >
                DANIEL GRANT
            </Typography>
        </Grid>
        <Grid item sm={4} style={{borderLeft: '2px solid #FF69B4', height: '100%'}}>
            <CardActionArea>
            <LazyLoad once>
            <CardMedia 
                image={DanielLogo}
                title="Daniel Grant"
                className={classes.media}
                onClick={handleOpen}
                >

                </CardMedia>

            </LazyLoad>
              
            </CardActionArea>
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
       <h2 id="simple-modal-title" style={{
         textAlign: 'center', 
         color: 'white',
         fontSize: 40
         }}>
           {daniel.name}
          </h2>
      <LazyLoad once>
      <ExternalLink href="http://TDFeverything.com" target="_blank" title="TDF Everything home page">
      <CardMedia
       image={DanielRap}
       className={classes.media}
       >

       </CardMedia>
      </ExternalLink>

      </LazyLoad>
    
     
    
      <p className={classes.bio} id="transition-modal-description">{daniel.bio}</p>
      <Grid className={classes.social}>

      <ExternalLink href="http://twitter.com/theyungguard" target="_blank">
      <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter" />
      </ExternalLink>
      
      <ExternalLink href="http://Instagram.com/yungguard" target="_blaank">
      <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram" />
      </ExternalLink>
      
      </Grid>
      <Button 
        variant='outlined'
        className={classes.closeButton}  
        onClick={handleClose}>
          <CancelIcon/>
      </Button>
     </div>
    </Fade>
      </Modal>
    </div>
</Grid>
);
}

export default Daniel;