import React from 'react';
import {Grid, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { HeadsetSharp } from '@material-ui/icons';
import {ExternalLink} from 'react-external-link';
import Gavin from './Gavin/Gavin';
import Daniel from './Daniel/Daniel';






const useStyles = makeStyles((theme) => ({
    root: {
          width: '100%',
          height: '115vh',
          paddingBottom: 30,
          backgroundColor: 'transparent',
          '@media(max-width: 1024px)' : {
            height: '70vh',
            
      
          },
          '@media(max-width: 800px)' : {
            height: '80vh',
            paddingTop: 10
          },
          '@media(max-width: 600px)' : {
            height: '30vh',
          },
          '@media(max-width: 360px)' : {
            marginTop: 20,
          },
         
        },
        Gavin: {
        width: '60%',
        height: '5vm',
        marginBottom: 5,
        border: '2px solid #FF69B4',
        '@media(max-width: 600px)' : {
           display: 'none',
        }
         
         
        },
        Daniel: {
            marginTop: 5,
            width: '60%',
            height: '5vm',
            border: '2px solid #FF69B4',
            '@media(max-width: 600px)' : {
              display: 'none',
            }
         

        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
          },
          bio: {
            color: 'white',
            fontFamily: 'Spartan, sans-serif',
            marginBottom: 10,
            '@media(max-width: 600px)' : {
            fontSize: '0.5em',
            textAlign: 'center',
            }

          },
          bioButton: {
            fontSize: 15,
            marginBottom: 25,
            padding: 10,
            fontWeight: 800,
            fontFamily: 'Spartan, sans-serif',
            backgroundColor: '#F9EF09',
            color: '#4743A4',
            '@media(max-width: 600px)' : {
              width: 200,
              fontSize: '1em',
              marginTop: 10,
              marginBottom: 0,
              marginLeft: 2,
            }
           
          },
          headphoneIcon: {
            color: '4743A4',
            fontSize: 40,
            '@media(max-width: 600px)' : {
              display: 'none'
            }

          }
  
    
}));

const Hosts = () => {
const classes = useStyles();



    return (
        
    <Grid 
    className={classes.root}
    container
    justify="center"
    alignContent="center"
    
     >
       <Grid item xs={8} md={8} className={classes.bio}>
       <h2>UNCOLONIZED IS A FUNNY AND BLUNT PODCAST ABOUT RACE, POLITICS, AND CULTURE, FROM A CANADIAN PERSPECTIVE. HOSTED BY COMEDIAN GAVIN STEPHENS, AND WRITER/MUSICIAN DANIEL GRANT.</h2>
          <ExternalLink href="https://www.spreaker.com/show/mrduncolonized" target="_blank" style={{textDecoration: 'none'}}>
        <Button
         className={classes.bioButton} 
         variant="contained" 
         startIcon={<HeadsetSharp className={classes.headphoneIcon}/>}>EPISODES DROP EVERY MONDAY</Button>
        </ExternalLink>
      </Grid>
      
    
        <Grid item sm={9} className={classes.Gavin}>
      
         <Gavin/>
        </Grid>
        <Grid item sm={9} className={classes.Daniel}>
            <Daniel/>
        </Grid>
   </Grid>
  

    );
}

export default Hosts;