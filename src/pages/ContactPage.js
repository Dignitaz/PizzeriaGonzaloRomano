import React, { useEffect } from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { Loading, Contact } from "../components/index";

const ContactPage = () => {
  const { fetchContactData, contact_info } = useProductsContext();

  useEffect(() => {
    fetchContactData();
  }, []);

  return (
    <Wrapper>
      <div className="contact-maindiv">
        <h2>Feel comfortable to contact with us</h2>
        <div className="underline"></div>
        {contact_info ? <Contact contact_info={contact_info} /> : <Loading />}
      </div>
      <div className="contact-iframe">
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
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 95vw;
  margin: 0 auto;
  /* max-width: var(--max-width); */
  .contact-maindiv {
    h2 {
      margin: 20px 0px 20px;
      text-align: center;
    }
    .underline {
      border-top: 3px solid var(--clr-primary-3);
    }
    &__icons {
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      &--section {
        text-align: center;
        margin: 20px 0px;
        padding: 20px 30px 10px 30px;
        i {
          font-size: 55px;
          padding: 10px 0px 20px;
        }
        p {
          font-size: 20px;
        }
      }
    }
  }
  .contact-iframe {
    display: flex;
    justify-content: center;
    align-content: center;
    border: 3px solid var(--clr-primary-4);
    border-radius: 10px;
    box-shadow: 0px 0px 10px var(--clr-primary-4);
    overflow: hidden;
    margin-top: 40px;
    margin-bottom: 30px;
    width: 85vw;
    align-self: center;
  }

  @media (max-width: 768px) {
    .contact-maindiv {
      &__icons {
        flex-direction: column;
        &--section {
          border: none;

          i {
            font-size: 55px;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .contact-maindiv {
      &__icons {
        &--section {
          border: none;
          max-width: 300px;
          text-align: center;
          padding: 20px 10px 10px 10px;
          margin: 0 20px;
          i {
            font-size: 55px;
            padding-bottom: 10px;
          }
          p {
            max-width: 300px;
          }
        }
      }
    }
  }
`;
export default ContactPage;
