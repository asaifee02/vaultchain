import React,{useState} from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import ProfilePersonal from './ProfilePersonal';
import './DashboardBG.css'
import copy from "copy-to-clipboard";
import Files from './Files'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Dashboard(props) {
  const copyText = "Hello world!" 
  // + {props.name};

	const cpyToClip= () => {
	copy(copyText);
	alert(`You have copied "${copyText}"`);
	}

  const goToFiles=()=>{
    <Files/>
  }

  return (
  <div className='DashParent'>

    <div class="area" >
            <ul class="circles">
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
    
    <div class="context">
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
            <MDBCol lg="4">
              <MDBCard className="mb-4 bg-dark"> {/* bg change */}
                <MDBCardBody className="text-center">
                  <div className='nicknameShow'>
                  <p style={{fontSize:"20px",textAlign:"left"}}>Welcome, Darshan{props.nickname} </p>
                  </div>
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  {/* <p className="text-muted mb-1">{props.name}hello</p> */}
                  <p className='uid my-3' style={{fontSize:"20px",float:"center",margin:"0px"}} onClick={cpyToClip}>ID:{props.id} 23580987390  <ContentCopyIcon/> </p>
                  <div className="d-flex justify-content-center mb-2">
                    {/* <MDBBtn>Follow</MDBBtn>
                    <MDBBtn>My Files</MDBBtn> */}
                    <a href="/myfiles">
                    <button type="button" class="btn btn-primary mx-3">My Files</button>
                    </a>
                    <a href="https://vaultchain.asaifee.ml/logout">
                    <button type="button" class="btn btn-outline-danger">Logout</button>
                    </a>
                    <input type="text" value="HIens"/>
                  </div>
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4 bg-dark mb-lg-0"> {/* bg change */}
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    {/* Email */}
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 bg-dark"> {/*bg change*/}
                      <MDBIcon fas icon="envelope fa-lg" className='bg-blue' />
                      <MDBCardText className="text-cyan mx-3">{props.email}email</MDBCardText>
                    </MDBListGroupItem>
                    {/* Github */}
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 bg-dark"> {/*bg change*/}
                      <MDBIcon fab icon="github fa-lg" className='bg-blue'/>
                      <MDBCardText className="text-cyan mx-3">{props.git}github</MDBCardText>
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
            <MDBCol lg="8">
              <MDBCard className="mb-4 bg-dark"> {/* bg change */} 
                <MDBCardBody>
                  <ProfilePersonal parameter="Name" value="Darshan Rayala"/>
                  <hr/>
                  <ProfilePersonal parameter="DOB" value="23-Apr-01"/>
                  <hr />
                  <ProfilePersonal parameter="Email" value="darsh@gmail.com"/>
  
  
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