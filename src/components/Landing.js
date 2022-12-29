import React from 'react'
import './Landing.css';
import Person from './Person'
import LandingAboutProj from './LandingAboutProj'
import Navbar from './Navbar'
import Footer from './Footer'
import LandingHeadBg from './LandingHeadBg'

export default function landing() {
    return (
        <>
            <Navbar/>
            <div className="wrapper">
                <LandingHeadBg/>
                <div className="section features-6">
                    <div className="container">
                        <LandingAboutProj/>
                    </div>
                </div>
                <div className="section features-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 ">
                                <h3 className="display-3">ABOUT DEVELOPERS</h3>
                            </div>
                        </div>
                        <div className="row my-5">
                            <Person name="Adnan Saifee" email="Adnan Email" />
                            <Person name="Darshan Rayala" email="Darshan Email" />
                            <Person name="Isha Kushwah" email="Isha Email" />
                            <Person name="Varija Gupte" email="Varija Email" />
                        </div>
                    </div>
                </div>
                <br /><br />
                <Footer/>
            </div>
        </>
    )
}
