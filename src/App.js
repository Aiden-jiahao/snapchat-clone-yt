import React, { useEffect } from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { login, logout, selectUser } from "./features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.user.displayName,
            profilePic: authUser.user.photoURL,
            id: authUser.user.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app__logo"
              src="https://www.al.com/resizer/kiOENKzSGBie9je1nfC1r8lcyPM=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/business_impact/photo/snapchat-logojpg-31d1793aa97f130a.jpg"
              alt=""
            />
            <div className="app__body">
              <div className="app__bodyBackground">
                <Switch>
                  <Route path="/chats">
                    <Chats />
                  </Route>
                  <Route path="/chats/view">
                    <ChatView />
                  </Route>
                  <Route exact path="/">
                    <WebcamCapture />
                  </Route>
                  <Route path="/preview">
                    <Preview />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
