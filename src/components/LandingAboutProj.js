import React from 'react'

export default function LandingInfo() {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="info info-horizontal info-hover-primary">
            <div className="description pl-4">
              <h5 className="title">Message For Users</h5>
              <p>The time has come when users can store and share contents with highest level of safety. This is a user friendly decentralised platform ensuring confidentiality and integrity.</p>
              {/* <!--<a href="#" className="text-info">Learn more</a>--> */}
            </div>
          </div>
          <div className="info info-horizontal info-hover-primary mt-5">
            <div className="description pl-4">
              <h5 className="title">About the Application</h5>
              <p>A hardware accelerated, cryptographically secure, digitally verifiable and distributed Data Storage and Data Sharing system using Hardware Security Module (HSM), Hashicorp Vault and InterPlanetary File System (IPFS).</p>
              <p>This application can be used for user authentication and authorization, securly uploading, sharing and downloading all types of files.</p>
              {/* <!--<a href="#" className="text-info">Learn more</a>--> */}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-10 mx-md-auto">
          <img className="ml-lg-5" src={process.env.PUBLIC_URL + "new logo.png"} width="100%" alt='landing logo' />
        </div>
      </div>
    </>
  )
}
