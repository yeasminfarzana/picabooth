import "./CountdownWebcam.css";
import { useState, useRef } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";

const CountdownWebcam = ({ onCycle, onComplete }) => {
  const [date, setDate] = useState(Date.now() + 3000);
  const [key, setKey] = useState(0);
  const [showClick, setShowClick] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const countRef = useRef(0); // useRef to persist value

  const handleComplete = () => {
    setShowClick(true);
    onCycle();
    setTimeout(() => {
      countRef.current += 1;
      if (countRef.current < 4) {
        setDate(Date.now() + 3000);
        setKey((prev) => prev + 1);
        setShowClick(false);
      } else {
        setShowClick(false);
        setIsDone(true);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 1000);
  };

  const renderer = ({ seconds, completed }) => {
    if (completed && showClick) {
      return <span>Click!</span>;
    } else if (completed && isDone) {
      return <span>Done!</span>;
    }
    return <span className="text">{seconds}</span>;
  };

  return (
    <div className="countdown">
      <Countdown
        key={key}
        date={date}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default CountdownWebcam;
