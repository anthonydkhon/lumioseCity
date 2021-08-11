import React from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import Background from '../imgs/lumiosecity.png';


function Banner () {
    return (
      <div className="bannerImg" style={{ backgroundImage: `url(${Background})` }}>
      <h1>Welcome to Lumiose City!</h1>
      <p>Welcome trainer to the new social hub for Pokemon</p>
      <Button className="futureBtn">Future Updates</Button>{' '}
    </div>
    )}

export default Banner;