import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="conatctSection">
        <div className="Contactheading">
          <p
            className="contactPara"
            style={{ color: "#000", fontSize: "4rem", fontWeight: "800" }}>
            Feel Free To Contact Us
          </p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.981687052139!2d84.40539037597121!3d25.03469553826238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d0f51714284bd%3A0x41155eb184bd8730!2sCity%20Janch%20Ghar!5e0!3m2!1sen!2sin!4v1698918370630!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
            title="This is My Address"
          />
        </div>
        <div className="formbox">
          <form action="https://formspree.io/f/xzblwdyn" method="POST">
            <input
              type="text"
              name="USERNAME"
              id="textInput"
              placeholder="USERNAME"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="EMAIL"
              id="emailInput"
              placeholder="EMAIL"
              autoComplete="off"
              required
            />
            <textarea
              id="textarea"
              name="Message"
              cols="30"
              rows="4"
              placeholder="ENTER YOUR MESSAGE"
              autoComplete="off"
              required></textarea>
            <input type="submit" value="Send" className="formBtn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
