import "./Customize.css";
import { getCapturedImages } from "../utilities/ImageStore";
import { frame_images } from "../utilities/Assets";
import { frame_stickers } from "../utilities/Assets";
import { useState } from "react";

function Customize() {
  const imageList = getCapturedImages();

  const [selectedFrame, setSelectedFrame] = useState(frame_images[0]);
  const handleFrame = (frame) => {
    setSelectedFrame(frame);
  };

  const [selectedSticker, setSelectedSticker] = useState(null);
  const handleSticker = (sticker) => {
    setSelectedSticker(sticker);
  };

  return (
    <div className="container3">
      <div className="polaroid">
        <img src={selectedFrame.image} className="frame"></img>
        <div className="pictures">
          {imageList.map((image) => (
            <img src={image} className="picture"></img>
          ))}
        </div>
        {selectedSticker ? (
          <img src={selectedSticker.image} className="sticker"></img>
        ) : null}
      </div>
      <div className="scroll_menus">
        <p>Filter</p>
        <div className="scrollfilter">
          <a className="filter" href="#normal">
            Normal
          </a>
          <a className="filter" href="#blackwhite">
            Black & White
          </a>
          <a className="filter" href="#seppia">
            Seppia
          </a>
          <a className="filter" href="#polar">
            Polarizing
          </a>
          <a className="filter" href="#uv">
            UV
          </a>
          <a className="filter" href="#vivo">
            None
          </a>
        </div>
        <p>Frame</p>
        <div className="scrollfilter">
          {frame_images.map((frame) => (
            <a className="colour" onClick={() => handleFrame(frame)}>
              {frame.title}
            </a>
          ))}
        </div>

        <p>Sticker</p>
        <div className="scrollfilter">
          {frame_stickers.map((sticker) => (
            <a className="stickerButton" onClick={() => handleSticker(sticker)}>
              {sticker.title}
            </a>
          ))}
          <a className="stickerButton" onClick={() => handleSticker(null)}>
            None
          </a>
        </div>
        <a className="Download" href="#download" id="download">
          Download
        </a>
      </div>
    </div>
  );
}

export default Customize;
