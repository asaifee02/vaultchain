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
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import ProfilePersonal from './ProfilePersonal';
import './DashboardBG.css'
import copy from "copy-to-clipboard";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { LogoutButton } from './Buttons'

export default function Dashboard() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  const uid = user.sub.replace('auth0|', '')
  const cpyToClip = () => {
    copy(uid, { message: `Copied: ${uid}` });
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
        <section>
          {/* style={ { position: 'relative'} }> */}
          {/* <div class="backdrop-blur-sm"> */}
          <MDBContainer className="py-5">
            {/* Navbar */}
            {/* <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href='#'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow> */}
            {/* End Navbar */}
            <MDBRow>
              <MDBCol lg="5">
                <MDBCard className="mb-4 bg-dark"> {/* bg change */}
                  <MDBCardBody className="text-center">
                    <div className='nicknameShow'>
                      <p style={{ fontSize: "20px", textAlign: "left" }}>Welcome, {user.nickname} </p>
                    </div>
                    {/* src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" */}
                    <MDBCardImage
                      src={user.picture}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: '150px' }}
                      fluid />
                    {/* <p className="text-muted mb-1">{user.name}hello</p> */}
                    <p className='uid my-3' style={{ fontSize: "14px", float: "center", margin: "0px" }} onClick={cpyToClip}>ID: {uid} &nbsp; <ContentCopyIcon style={{ height: '15px', width: '15px' }} /> </p>
                    {/* temp id :634533525615e6albdb5228523580987390 */}
                    <div className="d-flex justify-content-center mb-2">
                      {/* <MDBBtn>Follow</MDBBtn>
                    <MDBBtn>My Files</MDBBtn> */}
                      <a href="/myfiles">
                        <button type="button" className="btn btn-primary mx-3">My Files</button>
                      </a>
                      {/* <a href="https://vaultchain.asaifee.ml/logout">
                        <button type="button" className="btn btn-outline-danger">Logout</button>
                      </a> */}
                      <LogoutButton />
                    </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 bg-dark mb-lg-0"> {/* bg change */}
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush="true" className="rounded-3">
                      {/* Email */}
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 bg-dark"> {/*bg change*/}
                        <MDBIcon fas icon="envelope fa-lg" className='bg-blue' />
                        <MDBCardText className="text-cyan mx-3">Email: {user.email}</MDBCardText>
                      </MDBListGroupItem>
                      {/* Github */}
                      {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 bg-dark">
                        <MDBIcon fab icon="github fa-lg" className='bg-blue' />
                        <MDBCardText className="text-cyan mx-3">{user.git}github</MDBCardText>
                      </MDBListGroupItem> */}

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
                  <MDBCol md="12">
                    <MDBCard className="mb-4 bg-dark mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                        </MDBProgress>

                        {/* <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                      </MDBProgress> */}

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
                  </MDBCol>


                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          {/* </div> */}
        </section>

      </div>
    </div>
  );
}