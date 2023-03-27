import React from "react";
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <div>
      <footer className="w3-center w3-black w3-padding-16">
        <div className="container container-fluid">
          <div className="row no-gutters">
            <div className="col-md-4">
                <br />
                <br />
                <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>Lawyer's Online</b></span> <span className="w3-hide-small w3-text-light-grey"></span></h1>
                <p>We gather to bring change!</p>
                <div className="container container-fluid">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-2">
                      <img className="d-inline p-1" src="../../images/fb_transparent2.png" width={50} height={50} />
                    </div>
                    <div className="col-md-2">
                      <img className="d-inline p-1" src="../../images/twitter_transparent.png" width={50} height={50} />
                    </div>
                    <div className="col-md-2">
                      <img className="d-inline p-1" src="../../images/youtube_transparent.png" width={50} height={50} />
                    </div>
                    <div className="col-md-3">
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-4">
                <br />
                <br />
                <br />
                <br />
                <Link to={'about'} className="text-decoration-none text-white"><u>About us</u></Link>
                <br />
                <Link to={'about'} className="text-white"><u>Our Mission</u></Link>
                <br />
                <Link to={'about'} className="text-white"><u>Our Vision</u></Link>
                <br />
                <Link to={'about'} className="text-white"><u>Our Team</u></Link>
            </div>
            <div className="col-md-4">
                <br />
                <br />
                <br />
                <br />
                <Link to={'contact'} className="text-decoration-none text-white"><u>Contact us</u></Link>
                <br />
                <Link to={'about'} className="text-white"><u>Our Mission</u></Link>
                <br />
                <Link to={'about'} className="text-white"><u>Our Vision</u></Link>
                <br />
                <Link to={'about'} className="text-white"><u>Our Team</u></Link>
            </div>
          </div>
        </div>
        <br />
        <br />
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">Astech</a></p>
      </footer>
    </div>
  );
};

export default footer;
