import React, { useState, useEffect } from 'react'
import './Logo.css'

export default function Logo() {
  // to show/hide logo
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 30;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        isVisible && setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  })

  return (
    <div className="page-loader">
      {/* <!-- Page-loader --> */}
      <div className="navlogoloader">
        <a href='/' target='_self'>
          <div className='navlogoloader-style-1 panelLoad'>
            <div className='cube-face cube-face-front'>A</div>
            <div className='cube-face cube-face-back'>D</div>
            <div className='cube-face cube-face-left'>I</div>
            <div className='cube-face cube-face-right'>V</div>
            <div className='cube-face cube-face-bottom'>C</div>
            <div className='cube-face cube-face-top'>P</div>
          </div>
        </a>
        {
          isVisible &&
          <span>Vault Chain &ensp;</span>
        }
      </div>
      {/* <!-- /loader --> */}
      {/* <!-- /Page-loader --> */ }
    </div >
  )
}
