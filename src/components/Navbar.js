import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { LoginButton, LogoutButton, SignupButton } from './Buttons'

export default function Navbar() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light py-2">
        <div className="container">
          <a className="navbar-brand mr-lg-5" href="/">
            <img src={process.env.PUBLIC_URL + "white.png"} alt="app logo" />
          </a>
          <div className="navbar-collapse collapse" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
              {!isAuthenticated && (
                <>
                  <SignupButton />
                  <LoginButton />
                </>
              )}
              {isAuthenticated && (
                <>
                  <LogoutButton />
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
