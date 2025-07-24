import Webcam from "react-webcam";
import { useRef, useState, useCallback, useEffect } from "react"; // import useRef
import { setCapturedImages } from "./ImageStore";
import { isMobile } from "react-device-detect";

const CustomWebcam = ({ captureRequest }) => {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgList, setImgList] = useState([]); // initialize image
  const videoConstraints = isMobile
    ? { width: 700, height: 1028, facingMode: "user" }
    : { width: 1028, height: 700, facingMode: "user" };

  const capture = useCallback(() => {
    const newImgSrc = webcamRef.current.getScreenshot({
      mimeType: "image/png",
    });
    setImgList((prevList) => [...prevList, newImgSrc]);
  }, [webcamRef]);

  useEffect(() => {
    captureRequest ? capture() : console.log("failed");
    if (imgList.length === 4) {
      setCapturedImages(imgList);
    }
  }, [captureRequest, capture]);

  return (
    <div className="container">
      <Webcam ref={webcamRef} videoConstraints={videoConstraints} />
    </div>
  );
};

export default CustomWebcam;
