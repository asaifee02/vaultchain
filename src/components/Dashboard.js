import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import ProfilePersonal from './ProfilePersonal';
import './DashboardBG.css'
import copy from "copy-to-clipboard";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { LogoutButton } from './Buttons'
import { callApi, createConfig } from "../services/vaultchain-api";
import Logo from "./Logo";

export default function Dashboard() {
  const { user, loginWithPopup, isAuthenticated, getAccessTokenSilently } = useAuth0();
  
  if (!user) {
    return null;
  }
  
  const keysCreated = async () => {
    const config = await createConfig("/api/user/setup", "GET", await getAccessTokenSilently())
    const { data, error } = await callApi({config})
    if (data) console.log('Data: ' + data.error || data.msg)
    if (error) console.log('Error: ' + error.message)
  }

  keysCreated()
  const uid = user.sub.replace(/.*\|/, '')

  const cpyToClip = async () => {
    await loginWithPopup({
      prompt: "login",
      max_age: 30,
      timeoutInSeconds: 30,
      display: 'popup',
      login_hint: user.email
    })
    .then(() => {
      if (isAuthenticated) {
        copy(uid, {
          debug: true,
          message: 'Press #{key} to copy UID:',
          format: 'text/plain'
        })
      } else {
        console.log('Not authenticated.')
      }
    }, err => alert(err))
	}

  return (
    <div className='DashParent'>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >

      <div className="context">
        <div className="dashlogo">
          <Logo/>
        </div>
        <section>
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol lg="5">
                <MDBCard className="mb-4 bg-dark" style={{zIndex:100000000}}> {/* bg change */}
                  <MDBCardBody className="text-center">
                    <div className='nicknameShow'>
                      <p style={{ fontSize: "20px", textAlign: "left" }}>Welcome, {user.nickname} </p>
                    </div>
                    {/* src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" */}
                    <MDBCardImage src={user.picture} alt="avatar" className="rounded-circle" style={{ width: '150px' }} fluid />
                        {/* <p className="text-muted mb-1">{user.name}hello</p> */}
                        <p className='uid blur my-3' id="blurId" style={{ fontSize: "14px", float: "center", margin: "0px", cursor:"no-drop" }} onClick={cpyToClip}> ID: {uid}  &nbsp; <ContentCopyIcon style={{ height: '15px', width: '15px' }} /></p>
                        {/* temp id :634533525615e6albdb5228523580987390 */}
                        <div className="d-flex justify-content-center mb-2">
                          <a href="/myfiles">
                            <button className="btn btn-primary mx-3">My Files</button>
                          </a>
                          <LogoutButton />
                        </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 bg-dark mb-lg-0"> {/* bg change */}
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush="true" className="rounded-3">
                      {/* Email */}
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 bg-dark"> {/*bg change*/}
                        <MDBIcon fas icon="envelope fa-lg " className='bg-blue' />
                        <a href = {'mailto:'+user.email} >
                        <MDBCardText className="text-cyan" style={{ fontSize: "14px", textAlign:"left", paddingRight:"130px", offset:"0px", margin: "10px" }}>Email &ensp; : &ensp; {user.email}</MDBCardText>
                        </a>
                      </MDBListGroupItem>
                      {/* Github */}
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 bg-dark">
                        <MDBIcon fab icon="github fa-lg" className='bg-blue' />
                        <a href = "https://github.com/rayaladarshan/ipfs-react-frontend" target="_blank" rel="noreferrer" >
                        <MDBCardText className="text-cyan" style={{ fontSize: "14px", textAlign:"left", paddingRight:"160px", offset:"0px", margin: "10px" }}>Github &ensp; : &ensp; @VaultChain</MDBCardText>
                        </a>
                      </MDBListGroupItem>

                      {/* Twitter */}
                      {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 bg-gradient-dark">
                      <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                      <MDBCardText>@mdbootstrap</MDBCardText>
                    </MDBListGroupItem> */}
                      {/* Instagram */}
                      {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 bg-gradient-dark">
                      <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem> */}
                      {/* Facebook */}
                      {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 bg-gradient-dark">
                      <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem> */}

                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="6">
                <MDBCard className="mb-4 bg-dark"> {/* bg change */}
                  <MDBCardBody>
                    <ProfilePersonal parameter="Name" value={user.name} />
                    <hr />
                    <ProfilePersonal parameter="DOB" value="23-Apr-01" />
                    <hr />
                    <ProfilePersonal parameter="Email" value={user.email} />


                  </MDBCardBody>
                </MDBCard>

                <MDBRow>

                  {/* Files Card */}
                  {/* <MDBCol md="12">
                    <MDBCard className="mb-4 bg-dark mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                        </MDBProgress>

                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                        </MDBProgress>

                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                        </MDBProgress>

                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                        </MDBProgress>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol> */}


                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

      </div>
    </div>
  );
}