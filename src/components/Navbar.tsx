import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <React.Fragment>
        <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <a href="/" className="w3-bar-item w3-button"><b>Barister</b> Online</a>
                <div className="w3-right w3-hide-small">
                    <Link to={'about'} className="w3-bar-item w3-button">About us</Link> 
                    <Link to={'project'} className="w3-bar-item w3-button">Projects</Link> 
                    <Link to={'contact'} className="w3-bar-item w3-button">Contact</Link> 
                </div>
            </div>
        </div>
    </React.Fragment>;
}
export default Navbar;