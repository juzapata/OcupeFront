import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import SignIn from '../../containers/SignIn';

const Login = () => {

  return (    
    <>
      <div className="container">
        <SignIn/>
      </div>
    </>
  )
}

export default Login;