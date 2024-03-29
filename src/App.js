import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Main from './Main/Main';
import Media from 'react-media';

import MetaDecoration from './Components/Util/MetaData';
import home from './pages/home.json';
import metaThumbnail from './pages/metaImages/uncolonizedNew.png'



import SideDrawer from './Components/Navigation/SideDrawer/SideDrawer';
import SmallContact from './Components/Contact/SmallContact/SmallContact';
import DanielSmall from './Components/Hosts/Daniel/DanielSmall/DanielSmall'
import GavinSmall from './Components/Hosts/Gavin/GavinSmall/GavinSmall';
import Page404 from '../src/Components/404./404';


import {Switch, Route, Redirect} from 'react-router-dom';
import PatreonBar from './Components/PatreonBar/PatreonBar';

import Burger from './Components/Navigation/Burger/Burger';
import './App.css';





class App extends Component{

  state ={
    showDrawer: false,
    windowQuery: window.matchMedia('(max-width: 500px)')
  }

showDrawerToggle = () => {
  this.setState({ showDrawer: true})

};

closeDrawerToggle = () => {
  this.setState((prevState) => {
    return { showDrawer: !prevState.showDrawer };
  } );
};

render() {
   
  return (
    <>
     <MetaDecoration
        description={home.pageDescription}
        title={home.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={home.metaImageAlt}
      />
        <div className="App">
       <PatreonBar/>
       <Burger clicked={this.showDrawerToggle}/>
       <SideDrawer  open={this.state.showDrawer} closed={this.closeDrawerToggle}/>
       <Navigation/>
      
     
    
      {/* media query routes */}
      
      <Media query="(max-width: 600px)">
        {matches =>  
        matches ? (
          <Switch>
          <Route exact path="/contact" component={SmallContact}/> 
          <Route path="/daniel" component={DanielSmall}/>
          <Route path="/gavin" component={GavinSmall}/> 
          <Route path="/" component={Main}/>

        
          </Switch>
        ) : (
          <Switch>
            <Route path="/" component={Main}/>

            <Redirect from="/contact" to="/"  />
            <Redirect from="/daniel" to="/" />
            <Redirect from="/gavin" to="/" />
          </Switch>
        ) 
        }
   
       

      </Media>
    
    
</div>
</>

  
    
    );

  }
}

export default App;
