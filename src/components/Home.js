import React from 'react'

export default function Home() {
  return (
    <>
        {/* <!-- Navbar --> */}
  <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light py-2">
    <div className="container">
      <a className="navbar-brand mr-lg-5" href="../index.html">
        LOGO
        {/* <!-- <img src="../assets/img/brand/white.png"> --> */}
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbar_global">
        <div className="navbar-collapse-header">
          <div className="row">
            <div className="col-6 collapse-brand">
              <a href="../../../index.html">
                <img src="../assets/img/brand/blue.png"/>
              </a>
            </div>
            <div className="col-6 collapse-close">
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  {/* <!-- End Navbar --> */}
  
  <section className="section section-shaped section-lg">
    <div className="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="container pt-lg-7">
      <div className="row justify-content-center">
        <div className="content">
        </div>
        <div id="results">
        </div>  
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

      </div>
    </div>
  </section>
  
  <footer className="footer">
    <div className="container">
      <div className="row row-grid align-items-center mb-5">
        <div className="col-lg-6">
          <h3 className="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
          <h4 className="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
        </div>
        <div className="col-lg-6 text-lg-center btn-wrapper">
          <button target="_blank" href="https://twitter.com/creativetim" rel="nofollow" className="btn btn-icon-only btn-twitter rounded-circle" data-toggle="tooltip" data-original-title="Follow us">
            <span className="btn-inner--icon"><i className="fa fa-twitter"></i></span>
          </button>
          <button target="_blank" href="https://www.facebook.com/CreativeTim/" rel="nofollow" className="btn-icon-only rounded-circle btn btn-facebook" data-toggle="tooltip" data-original-title="Like us">
            <span className="btn-inner--icon"><i className="fab fa-facebook"></i></span>
          </button>
          <button target="_blank" href="https://dribbble.com/creativetim" rel="nofollow" className="btn btn-icon-only btn-dribbble rounded-circle" data-toggle="tooltip" data-original-title="Follow us">
            <span className="btn-inner--icon"><i className="fa fa-dribbble"></i></span>
          </button>
          <button target="_blank" href="https://github.com/creativetimofficial" rel="nofollow" className="btn btn-icon-only btn-github rounded-circle" data-toggle="tooltip" data-original-title="Star on Github">
            <span className="btn-inner--icon"><i className="fa fa-github"></i></span>
          </button>
        </div>
      </div>
      <hr/>
    </div>
  </footer>
    </>
  )
}
