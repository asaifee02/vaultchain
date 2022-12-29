import React from 'react'
import Buttons from './Buttons'
import Home from './Home'
export default function Navbar() {
    const signUpClick =()=>{
        <Home/>
    }
  return (
    <>
        <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light py-2">
                <div className="container">
                    <a className="navbar-brand mr-lg-5" href="/">
                        <img src="../../public/white.png"/> Logo here
                    </a>
                    <div className="navbar-collapse collapse" id="navbar_global">
                        <ul className="navbar-nav align-items-lg-center ml-lg-auto" >
                            <Buttons name="Sign In" link= "http://140.238.225.250:3000/login" />
                            <Buttons name="Sign Up" link= "http://140.238.225.250:3000/login" />
                            {/* <Buttons name="Sign Up" link="/home" /> */}
                            {/* <button type="button" onClick={signUpClick} className="btn btn-primary mx-2">Sign Up</button> */}
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  )
}
