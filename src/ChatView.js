import React, { useEffect } from "react";
import "./ChatView.css";
import selectedImage from "./features/appSlice";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
function ChatView() {
  const selectedImage = useSelector(selectedImage); // has an  issue
  const history = useHistory();
  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage]);
  const exit = () => {
    history.replace("/chats");
  };
  return (
    <div className="chatview">
      <img src={selectedImage} onClick={exit} alt="" />

      <div className="chatView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[["#004777", 0.33][("#f7b807", 0.33)][("#a30000", 0.33)]]}
        >
          {({ remainingTime }) => {
            if (!remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default ChatView;
