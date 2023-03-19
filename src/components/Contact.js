import React from "react";

const Contact = (props) => {
  const contactinfo = props.contact_info;

  return (
    <>
      {/* <div className="contact-maindiv">
        <h2>Feel comfortable to contact with us</h2>
        <div className="underline"></div> */}
      <div className="contact-maindiv__icons">
        {contactinfo.map((link) => {
          return (
            <div key={link.id} className="contact-maindiv__icons--section">
              <i className={link.icon} aria-hidden="true"></i>
              <h3>{link.text}</h3>
              <p>{link.extrainfo}</p>
            </div>
          );
        })}
      </div>

      {/* <div className="contact-iframe">
        <iframe
          title="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1066.3013177986118!2d23.158188122307553!3d53.13235576234675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc04ce552fd7%3A0xd47c38a0e38cda85!2sRatusz!5e0!3m2!1spl!2spl!4v1678379923355!5m2!1spl!2spl"
          width="2000"
          height="400"
          style={{ border: 0 }}
          allowfullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </>
  );
};

export default Contact;
