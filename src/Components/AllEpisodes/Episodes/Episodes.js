import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AudioPlayer from 'react-h5-audio-player';
import {ExternalLink} from 'react-external-link'

import 'react-h5-audio-player/lib/styles.css';
import {
    Card, 
    CardMedia, 
    CardActionArea, 
    CircularProgress
} from '@material-ui/core';





const useStyles = makeStyles({
    root: {
        width: 345,
        display: 'inline-block',
        margin: '10px',
        height: 540,
        backgroundColor: 'transparent',
        transition: 'ease-in 0.3s',
        '&:hover': {
            transform: 'translateY(-10px)'
        },
       
        '@media(max-width: 1050px)': {
            height: 415,
            margin: 5,
            maxWidth: 230,
            transition: 'none',
            '&hover' : {
                transform: 'translateY(0)'
            },
            
           
        },
        '@media(max-width: 800px)': {
            maxWidth: 180,
            margin: 2,
            height: 350,
            transition: 'none',
            '&hover' : {
                transform: 'translateY(0)'
            },
            '@media(max-width: 500px)': {
                maxWidth: 180,
                margin: 2,
                height: 350,
                transition: 'none',
                '&hover' : {
                    transform: 'translateY(0)'
                },
            },
        },
      
        
        
       
      },
      media: {
        height: 300,
        width: '100%',
        marginBottom: 10,
        border: '1px solid #FF69B4',
        '@media(max-width: 1050px)':{
            height: 180,
            marginBottom: 2,
        },
        '@media(max-width: 800px)': {
            height: 180,
            marginBottom: 2,
        },
        '@media(max-width: 500px)' : {
           height: 200,
           marginBottom: 'none',
        },
      
       
    },
    
      button: {
       backgroundColor: 'rgb(77, 95, 216)',
        '@media(max-width: 800px)': {
           display: 'none',
        }
         
      },

      word_itunes: {
        color: "white",
        fontWeight: "bold",
         marginLeft: 33,
        '&:hover': {
            backgroundColor: '#DD2A7B',
        },
        '@media(max-width: 1050px)':{
            marginLeft: 0,
            fontSize: 15,
        }

      },

      episodeTitle: {
        color: '#f9ff33', 
        overflow: 'hidden', 
        whiteSpace: 'nowrap', 
        fontFamily: 'Spartan, sans-serif',
        fontWeight: 600,
        textAlign: 'center',
        backgroundColor: 'rgb(0,0,0) ',/* Fallback color */
        border: '1px solid #FF69B4',
        padding: 10,
        fontSize: '1em',
        '@media(max-width: 800px)' : {
            fontSize: '1em',
        },
        '@media(max-width: 500px)' : {
           fontSize: '0.5em'
        }
      },
      word_spotify: {
          color: 'white',
          fontWeight: 'bold',
          '&:hover':{
              backgroundColor:'#69BD45',
          },
          '@media(max-width: 1050px)':{
            fontSize: 15,
        }
      },

      word_google :{
          color: 'white',
          fontWeight: 'bold',
          '&:hover': {
              backgroundColor: '#EA4335',
          },
          '@media(max-width: 1050px)' : {
              fontSize: 15,
          }
      },
   
      audio: {
          display: 'block',
          
    }
})
const Episodes = (props) => {
    const classes = useStyles();
   
return (
   
        <Card className={classes.root}>
        <ExternalLink 
        href={props.url}
        target="_blank"
        style={{textDecoration: 'none'}}
        >
        <CardActionArea>
               <CardMedia
               className={classes.media}
               image={props.image}
               title={props.title}
               href={props.url}
               />
               <p className={classes.episodeTitle}>
                       {props.title}
              </p>
                  </CardActionArea>
                  </ExternalLink>
             
    {!props.isLoading ?  <AudioPlayer 
        src={props.audio} 
        autoPlay={false}
        className={classes.audio}
        customAdditionalControls={[]}
        layout="stacked-reverse"
        style={{color: 'white', marginBottom: 5}}
        /> 
        :
         <CircularProgress/>
        }
</Card>

  
       

    );
    
}

export default Episodes;

