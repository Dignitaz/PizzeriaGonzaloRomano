import React from "react";

const Contact = (props) => {
  const contactinfo = props.contact_info;

  return (
    <>
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
    </>
  );
};

export default Contact;
