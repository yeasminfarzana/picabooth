import Webcam from "react-webcam";
import { useRef, useState, useCallback, useEffect } from "react"; // import useRef
import { setCapturedImages } from "./ImageStore";

const CustomWebcam = ({ captureRequest }) => {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgList, setImgList] = useState([]); // initialize image

  const capture = useCallback(() => {
    const newImgSrc = webcamRef.current.getScreenshot();
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
      <Webcam ref={webcamRef} />
    </div>
  );
};

export default CustomWebcam;
