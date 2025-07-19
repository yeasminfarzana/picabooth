import "./Customize.css";
import frame_default from "../assets/frame_default.png";
import { getCapturedImages } from "../utilities/ImageStore";
import { frame_images } from "../utilities/Assets";
import { frame_stickers } from "../utilities/Assets";

function Customize() {
  const imageList = getCapturedImages();
  return (
    <div className="container3">
      <div className="framedefault">
        <a>
          <img src={frame_default} alt="Frame" id="frame_d" />
        </a>
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
            Vivo
          </a>
        </div>
        <p>Colour</p>
        <div className="scrollfilter">
          {frame_images.map((image) => (
            <a className="colour">{image.title}</a>
          ))}
        </div>
        <p>Stickers</p>
        <div className="scrollfilter">
          {frame_stickers.map((image) => (
            <a className="sticker">{image.title}</a>
          ))}
        </div>
        <a className="Download" href="#download" id="download">
          Download
        </a>
      </div>
    </div>
  );
}

export default Customize;
