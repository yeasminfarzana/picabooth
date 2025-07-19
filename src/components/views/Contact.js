import "./Contact.css";

function Contact() {
  return (
    <div className="container5">
      <h2 id="contact_us">Contact Us</h2>
      <div className="support">
        <div className="textbox">
          <p>
            If you have any issues, concerns or suggestions, please feel free to
            use the contact form. Alternatively, you can reach us via email at:{" "}
            <br></br>
            <strong>picabooth_support@gmail.com</strong>
          </p>
        </div>
        <div className="group">
          <form action="action_page.php">
            <label for="name">Your Name</label>
            <input type="text" id="name"></input>
            <label for="email">Your Email</label>
            <input type="email" id="email"></input>
            <label for="message_lab">Your Message</label>
            <textarea id="input_message" name="message"></textarea>
            <div className="sub_button">
              <input type="submit" value="Submit" id="submit_button"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
