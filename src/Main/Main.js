import React from 'react';

import Hosts from '../Components/Hosts/Hosts';
import LatestEpisode from '../Components/AllEpisodes/LatestEpisode/LatestEpisode';
import Chonilla from '../Components/Chonnilla/chonilla';
import ContactScreen from '../Components/Contact/ContactScreen';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

import './Main.css';


const Main = () => {
    return (
        <div>
        <Header/>
        <Hosts id="Hosts"/>
        <LatestEpisode/>
        <Chonilla/>
        <div className='Contact-input'>
        <ContactScreen/>
        </div>
        <Footer/>

    </div>
       
    );

}

export default Main;