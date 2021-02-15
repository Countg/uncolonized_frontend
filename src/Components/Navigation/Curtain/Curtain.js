import React from 'react';
import './Curtain.css';

const Curtain = (props) => (
 props.show ? <div className="curtain" onClick={props.clicked}></div> : null

);

export default Curtain;