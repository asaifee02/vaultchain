import React from 'react';
import './Landing.css';
import Developer from './Developer';
import LandingAboutProj from './LandingAboutProj';
import Navbar from './Navbar';
import Footer from './Footer';
import LandingHeadBg from './LandingHeadBg'

export default function Landing() {  
  return (
      <>
        <Navbar />
        <div className="wrapper" style={{zIndex:100000000}}>
          <LandingHeadBg />

          <div className="section features-6" style={{zIndex:100000000}}>
            <div className="container">
              <LandingAboutProj />
            </div>
          </div>
          <div className="section features-1" style={{zIndex:100000000}}>
            <div className="container">
              <div className="row">
                <div className="col-md-4 ">
                  <h3 className="display-3">ABOUT DEVELOPERS</h3>
                </div>
              </div>

              <div className="row">
                <Developer name="Adnan Saifee" email="saifeeas@rknec.edu" img="AdnanS.png"/>
                <Developer name="Darshan Rayala" email="rayaladr@rknec.edu" img="DarshanR.png"/>
                <Developer name="Varija Gupte" email="guptevv@rknec.edu" img="VarijaG.png"/>
                <Developer name="Isha Kushwah" email="kushwahib@rknec.edu" img="IshaK.png" />
              </div>
            </div>
          </div>
          <br /><br />
          <Footer />
        </div>
      </>
    )
}
