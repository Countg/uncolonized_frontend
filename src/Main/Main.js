import React from 'react';

import Hosts from '../Components/Hosts/Hosts';
import LatestEpisode from '../Components/AllEpisodes/LatestEpisode/LatestEpisode';
import Chonilla from '../Components/Chonnilla/chonilla';
import ContactScreen from '../Components/Contact/ContactScreen';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import MetaDecoration from '../Components/Util/MetaData';
import home from '../pages/home.json';
import metaThumbnail from '../pages/metaImages/uncolonizedNew.png';

import './Main.css';


const Main = () => {
    return (
        <>
    <MetaDecoration
        description={home.pageDescription}
        title={home.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={home.metaImageAlt}
      />

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
    </>
       
    );

}

export default Main;