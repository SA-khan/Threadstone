import React from 'react';

const project = () => {
    return <React.Fragment>
        <div className="w3-container w3-padding-32" id="projects">
            <br />
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
        </div>

        <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
                    <img src="/images/house5.jpg" alt="House" styles="width:100%" />
                </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
                    <img src="/images/house2.jpg" alt="House" styles="width:100%" />
                </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
                    <img src="/images/house3.jpg" alt="House" styles="width:100%" />
                </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
                    <img src="/images/house4.jpg" alt="House" styles="width:100%" />
                </div>
            </div>
        </div>

        <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
                    <img src="/images/house2.jpg" alt="House" styles="width:99%" />
                </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-display-container">
                    <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
                    <img src="/images/house5.jpg" alt="House" styles="width:99%" />
                </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-display-container">
                    <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
                    <img src="/images/house4.jpg" alt="House" styles="width:99%" />
            </div>
        </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
                    <img src="/images/house3.jpg" alt="House" styles="width:99%" />
                </div>
            </div>
        </div>
    </React.Fragment>;
}

export default project;