import React from 'react'
import './Thankyou.css';

function Thankyou(){
  return (
    <div>
      <div className='gradient-background'>
        <div className='thankyou-info'>
          <h1>Thank you</h1>
          <p className='p1'>Your form was submitted successfully,</p>
          <p className='p2'>a licensed agent will be in touch shortly.</p>
        </div>
      </div>
      <div style={{height:'1000px'}}/>
      <div className='sectiona'>
        <div className='questions sectiona'>
          <p>Have questions?</p>
          <p>Speak with a licensed insurance agent</p>
        </div>
        <p className='number'>1-800-555-5555</p>
      </div>
      <div style={{height:'75px'}}/>
    </div>
  );
}

export default Thankyou;