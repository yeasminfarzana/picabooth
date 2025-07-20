import "./Customize.css";
import { getCapturedImages } from "../utilities/ImageStore";
import { frame_images } from "../utilities/Assets";
import { frame_stickers } from "../utilities/Assets";
import { useState } from "react";
import { FilteredImage } from "../utilities/FilteredImage";
import { filter_options } from "../utilities/Assets";

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

  const [selectedFilter, setSelectedFilter] = useState(null);
  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="container3">
      <div className="polaroid">
        <img src={selectedFrame.image} className="frame"></img>
        <div className="pictures">
          {imageList.map((image) => (
            <div className="picture">
              <FilteredImage
                imageUrl={image}
                filter={selectedFilter}
              ></FilteredImage>
            </div>
          ))}
        </div>
        {selectedSticker ? (
          <img src={selectedSticker.image} className="sticker"></img>
        ) : null}
      </div>
      <div className="scroll_menus">
        <p>Filter</p>
        <div className="scrollfilter">
          {filter_options.map((filter) => (
            <a
              className="filterButton"
              onClick={() => handleFilter(filter.value)}
            >
              {filter.title}
            </a>
          ))}
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
