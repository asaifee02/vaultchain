import React from "react";
import './PageLoader.css'

export const PageLoader = () => {

  return (
      <>

<div className='PgLoadParent'>
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
                {/* <!-- Page-loader --> */}

      <div className="page-loader">
          <div className="loader">
              <div className='loader-style-1 panelLoad'>
                  <div className='cube-face cube-face-front'>A</div>
                  <div className='cube-face cube-face-back'>D</div>
                  <div className='cube-face cube-face-left'>I</div>
                  <div className='cube-face cube-face-right'>V</div>
                  <div className='cube-face cube-face-bottom'>C</div>
                  <div className='cube-face cube-face-top'>P</div>
              </div>
              <hr/>
              
              {/* <!-- /Cube panelload --> */}
              <span><h1>Vault Chain &ensp;</h1></span>
          </div>
          {/* <!-- /loader --> */}
      </div>
      {/* <!-- /Page-loader --> */}
        </section>

      </div>
    </div>
      </>
      );
};
