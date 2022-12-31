import React from 'react';
import Buttons from './Buttons'

export default function Navbar() {
    return (
    <>
        <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light py-2">
            <div className="container">
                <a className="navbar-brand mr-lg-5" href="/">
                    <img src={process.env.PUBLIC_URL+"white.png"}/>
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
                        <Buttons name="Sign In" link="https://vaultchain.asaifee.ml/login"/>
                        <Buttons name="Sign Up" link="https://vaultchain.asaifee.ml/login"/>
                    </ul>
                </div>
            </div>
        </nav>
    </>
)
}
