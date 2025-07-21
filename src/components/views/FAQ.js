import "./FAQ.css";

function FAQ() {
  return (
    <div className="container4">
      <div className="QA">
        <h2 class="faq_title">FAQs</h2>
        <ul>
          <li>
            <div className="questions">What is PicABooth?</div>
            <br></br>PicABooth is a photo booth app that gives you the thrill to
            take pictures like in a real old style photo booth. <br></br>Start
            the countdown from the comfort of your home!
          </li>
          <li>
            <div className="questions">How does it work?</div>
            <br></br>Simply click on the camera icon and a countdown of 3
            seconds will start for each picture. Next, choose any filter, frame
            or stickers to customize your pictures. Download to save memories of
            a lifetime in your device!
          </li>
          <li>
            <div className="questions">Can I customize my photos?</div>
            <br></br>Of course! Choose a filter, frame or any stickers you like.
          </li>
          <li>
            <div className="questions">How much does it cost?</div>
            <br></br>Nothing! PicABooth is free.
          </li>
          <li>
            <div className="questions">What happens to my data?</div>
            <br></br>PicABooth does not collect, store, or share any personal
            data or images. All content remains on your device.<br></br>{" "}
            PicABooth does not use cookies or tracking technologies. Your
            privacy is fully respected.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FAQ;
