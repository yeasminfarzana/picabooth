import "./Contact.css";

function Contact() {
  return (
    <div className="containerContact">
      <h2 id="contactUs">Contact Us</h2>
      <div className="support">
        <div className="textbox">
          <p>
            If you have any issues, concerns or suggestions, please feel free to
            use the contact form. Alternatively, you can reach us via email at:{" "}
            <br></br>
            <strong>picabooth.contact@gmail.com</strong>
          </p>
        </div>

        <form
          className="group"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="76d1ce81-675a-4dcd-bd07-3d688ea4f65f"
          />
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Your Email</label>
          <input type="email" id="email" name="email" required />
          <label for="message_lab">Your Message</label>
          <textarea id="inputMessage" name="message" required></textarea>
          <div className="subButton">
            <input type="submit" value="Submit" id="submitButton" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
