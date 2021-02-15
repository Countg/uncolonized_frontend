import React, {Component} from 'react';
import {Grid,  Button, LinearProgress, CircularProgress} from '@material-ui/core';
import Episodes from '../Episodes/Episodes';


// eslint-disable-next-line

import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player';
import axios from 'axios';
import Background from '../../../images/jakayla-toney--JqkIot9kd4-unsplash.jpg';
import './LatestEpisode.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItunes, faSpotify, faGooglePlay, faPatreon } from '@fortawesome/free-brands-svg-icons';
import { ExternalLink } from 'react-external-link';




const API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spreaker.com%2Fshow%2F4245532%2Fepisodes%2Ffeed';



class MainEpisode extends Component{
    state = {
        podcasts: [],
        info: [],
        isLoading: false
    };

    componentDidMount(){
        axios.get(API_URL)
        .then(res => {
        this.setState({
            podcasts: res.data.items,
            info: res.data.feed,
            isLoading: false,
           })
          
        })
        .catch((err) => {
         this.setState({isLoading: true})
          console.log(err)
        })
    
      };


    
    



    render() {
   const {podcasts, isLoading} = this.state;
   let episode;
   if(isLoading) {
    episode = <LinearProgress/>
   } else {
    episode =  
    
    <Grid 
       className="Main" 
       container  
       justify='center'
       alignItems="center"
       style={{
        backgroundImage: `url(${Background})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
     }}
      
       
       >

{podcasts.slice(0, 1).map(item => (
<Grid 
   container  
   key={item.guid}  
   justify='center' 
   alignItems="center"
  
  
   >

      
       <Grid item>
       <Grid container justify='center' alignItems="center">
       <Grid item sm={12}>

       <h1 className="latestTitle"> LATEST EPISODE </h1>

   </Grid>
       <Grid item sm={8}>
        <ExternalLink href={item.link} title={item.title} style={{textDecoration: 'none'}}>
        <h2>{item.title}</h2>
        </ExternalLink>
      
       </Grid>
       <Grid item sm={6}>
   {!this.state.isLoading ? <AudioPlayer
           src={item.enclosure.link}
           autoPlay={false}
           customAdditionalControls={[]}
           layout="stacked-reverse"
           style={{width: '100%'}}
          
           /> : <CircularProgress/>}
       </Grid>
       <Grid item sm={12} className="Button">
       <Button 
       style={{
           fontSize: 30,
           margin: 5,
           padding: 10
           }}>
            <ExternalLink href="https://patreon.com/theuncolonized" target="_blank">
            <FontAwesomeIcon size="lg" className='patreon' icon={faPatreon}/> 
            </ExternalLink>
        </Button>
       
       <Button 
       style={{
           fontSize: 30,
           margin: 5,
           padding: 10
           }}>
        <ExternalLink href="https://open.spotify.com/show/4VXk56ZMQABGFxlu6aBuUv?si=Rlh5_xqVSumOdVFNb2TZeg" target="_blank">
        <FontAwesomeIcon size="lg" className='spotify' icon={faSpotify}/> 
        </ExternalLink>
         
       </Button>

       <Button 
       style={{
           fontSize: 30,
           margin: 5,
           padding: 10,
       }}> 
       <ExternalLink href="https://podcasts.apple.com/ca/podcast/uncolonized/id698940847" target="_blank">
       <FontAwesomeIcon size="lg" className='itunes' icon={faItunes}/>
       </ExternalLink>
    </Button>

     <Button 
      style={{
           margin: 5,
           padding: 10,
           fontSize: 30,
       }}>
           <ExternalLink href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDI0NTUzMi9lcGlzb2Rlcy9mZWVk?ved=0CAUQrrcFahcKEwjYq-PR2sXqAhUAAAAAHQAAAAAQBA" target="_blank">
           <FontAwesomeIcon icon={faGooglePlay} className='google' size="lg"/> 
           </ExternalLink>
           
       </Button>

       </Grid>
       
          
          

       </Grid>
        

       </Grid>
  </Grid>))}
   {podcasts.slice(1,5).map(eps => (
   
       <Episodes
         key={eps.guid}
         title={eps.title}
         image={eps.thumbnail}
         url={eps.link}
         content={eps.content}
         audio={eps.enclosure.link}
         isLoading={this.state.isLoading}
        
        />

      
       

    
      

   
      



          ))}
        
   </Grid>
 
    }
   
return (
    <div>
  {episode}
    </div>
 
    )
  }
}
export default MainEpisode;