import React from 'react'

const about = () => {
    return <React.Fragment>
        <div className="w3-container w3-padding-32" id="about">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        <div className="w3-row-padding w3-grayscale">
            <div className="w3-col l3 m6 w3-margin-bottom">
                <img src="/images/team2.jpg" alt="John" styles="width:100%" />
                <h3>John Doe</h3>
                <p className="w3-opacity">CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <img src="/images/team1.jpg" alt="Jane" styles="width:100%" />
                <h3>Jane Doe</h3>
                <p className="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <img src="/images/team3.jpg" alt="Mike" styles="width:100%" />
                <h3>Mike Ross</h3>
                <p className="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <img src="/images/team4.jpg" alt="Dan" styles="width:100%" />
                <h3>Dan Star</h3>
                <p className="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
        </div>
    </React.Fragment>;
}

export default about;