import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

function LandingSection() {

   const { push } = useHistory();

   return (
      <div className='landing-container'>
         <video src='/videos/video.mp4' autoPlay loop muted playsInline='true' disablePictureInPicture='true' />
         <h1>Application Tracker</h1>
         <p>We're here to help!</p>
         <div className='landing-buttons'>
            <Button 
               className='btns'
               buttonstyle='btn--outline'
               buttonsize='btn--large'
               onClick={() => push('/')}
            >
               Wuddup!
            </Button>
         </div>
      </div>
   )
};

export default LandingSection;