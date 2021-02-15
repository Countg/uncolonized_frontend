import React from 'react';
import Curtain from '../Curtain/Curtain';
import TinyNavigation from '../TinyNavigation/TinyNaviagation';
import './SideDrawer.css';

const SideDrawer = (props) => {

    let attachedClasses = ['SideDrawer', 'Close'];
    if(props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    };

    return(
    <div>
        <Curtain show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <TinyNavigation/>
            </div>
    </div>
    
    );
}

export default SideDrawer;