import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import { login } from "./features/appSlice";
function Login() {
  const dispatch = useDispatch();
  const signIN = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.al.com/resizer/kiOENKzSGBie9je1nfC1r8lcyPM=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/business_impact/photo/snapchat-logojpg-31d1793aa97f130a.jpg"
          alt=""
        />
        <Button variant="outlined" onClick={signIN}>
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
