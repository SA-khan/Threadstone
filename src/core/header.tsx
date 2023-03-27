import React from "react";

const header = (props) => {
  const style = {
    'max-width': 1500
  };
  return <React.Fragment>
    <header className="w3-display-container w3-content w3-wide" id="home">
      <img className="w3-image" src="/images/architect.jpg" alt="Architecture" width="1500" height="800" />
    </header>
  </React.Fragment>;
}

export default header;
