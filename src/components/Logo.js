import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importé depuis IMG sont accessible dans public */}
      <img src="./logo.png" alt="logo " />
      <h3>country games</h3>
    </div>
  );
};

export default Logo;
