import React from 'react'

export default function Developer(props) {
  return (
    <>
        <div className="col-md-3 my-3">
            <div className="info">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                <i className="ni ni-atom"></i>
              </div>
              <h6 className="info-title text-uppercase text-success">{props.name}</h6>
              <p className="description opacity-8">{props.email}</p>
            </div>
          </div>
    </>
  )
}
