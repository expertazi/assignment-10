import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../contexts/useAuth";

const Login = () => {
  const { signinWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log("Come From", location.state?.from);

  const handleGoogleLogin = () => {
    signinWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={handleGoogleLogin} className="btn btn-warning">
        Google SignIn
      </button>
    </div>
  );
};

export default Login;
