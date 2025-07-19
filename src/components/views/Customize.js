import "./Customize.css";
import frame_default from "../assets/frame_default.png";
import { getCapturedImages } from "../utilities/ImageStore";

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
          <a className="colour" href="#black">
            Black
          </a>
          <a className="colour" href="#white">
            White
          </a>
          <a className="colour" href="#red">
            Red
          </a>
          <a className="colour" href="#orange">
            Orange
          </a>
          <a className="colour" href="#yellow">
            Yellow
          </a>
          <a className="colour" href="#green">
            Green
          </a>
          <a className="colour" href="#blue">
            Blue
          </a>
          <a className="colour" href="#violet">
            Violet
          </a>
          <a className="colour" href="#pink">
            Pink
          </a>
        </div>
        <p>Stickers</p>
        <div className="scrollfilter">
          <a className="sticker" href="#red">
            Red Heart
          </a>
          <a className="sticker" href="#purple">
            Purple Heart
          </a>
          <a className="sticker" href="#moon">
            Moon
          </a>
          <a className="sticker" href="#skull">
            Skull
          </a>
          <a className="sticker" href="#ghost">
            Ghost
          </a>
          <a className="sticker" href="#hat">
            Witch Hat
          </a>
          <a className="sticker" href="#blue">
            Blue
          </a>
          <a className="sticker" href="#rose">
            Rose
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
