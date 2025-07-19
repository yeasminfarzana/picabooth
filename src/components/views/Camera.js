import "./Camera.css";
import camerapic from "../assets/camerapic.png";
import React, { useState } from "react";
import CustomWebcam from "../utilities/CustomWebcam.js";
import CountdownWebcam from "../utilities/CountdownWebcam.js";
import { useNavigate } from "react-router-dom";

function Camera() {
  const [triggerCapture, setTriggerCapture] = useState(null);
  const [showCountdown, isShowCountdown] = useState(false);

  const navigate = useNavigate();
  const handleCapture = () => {
    setTriggerCapture(true);
    setTimeout(() => setTriggerCapture(false), 100);
  };
  const handleCountdown = () => {
    isShowCountdown(true);
  };
  const handleComplete = () => {
    navigate("/customize");
  };

  return (
    <div className="container_camera">
      <div className="border">
        <div className="camera">
          <CustomWebcam captureRequest={triggerCapture} />
          <div className="camclick">
            <button onClick={handleCountdown}>
              {showCountdown ? (
                <CountdownWebcam
                  onCycle={handleCapture}
                  onComplete={handleComplete}
                />
              ) : (
                <img src={camerapic} alt="Camera" id="camerapic" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camera;
