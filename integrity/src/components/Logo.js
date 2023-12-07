import React from 'react';

function Logo() {
  return (
    <div id="logo" className='logo text-center my-5'>
      <img
        src={require("../assets/images/logo.png")}
        alt="Integrity Protection"
        className="img-fluid"
        style={{ maxWidth: '250px' }}
      />
    </div>
  );
}

export default Logo;
