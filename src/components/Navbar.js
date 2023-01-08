import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { LoginButton, LogoutButton, SignupButton } from './Buttons'
import Logo from './Logo'

export default function Navbar() {
// authentication
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light py-2">
        <div className="container">
          <div className="navbar-collapse collapse" id="navbar_global">
            <div>
          {/* <a className="navbar-brand mr-lg-5" href="/"> */}
              <Logo/>
          {/* </a> */}
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
                  <li className="nav-item"><a href="/dashboard">
                    <button type="button" className="btn btn-neutral">Dashboard</button> {/* original className="btn btn-info me-2" */}
                  </a></li>
                  <li className="nav-item">
                    <LogoutButton />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
