import React from 'react'
import {
    MDBCol,
    MDBRow,
    MDBCardText
} from 'mdb-react-ui-kit';

export default function ProfilePersonal(props) {
    return (
        <>
            <MDBRow>
                <MDBCol sm="3">
                    <MDBCardText className="text-blue">{props.parameter}</MDBCardText> {/* bg change */} 
                </MDBCol>
                <MDBCol sm="9">
                    <MDBCardText className="text-muted text-cyan">{props.value}</MDBCardText>{/* bg change */} 
                </MDBCol>
                </MDBRow>
        </>
    )
}
