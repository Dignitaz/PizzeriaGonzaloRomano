import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import restlower1920 from "../assets/restlower_1920.jpg";
import restlower640 from "../assets/restlower_640.jpg";
import restupper1920 from "../assets/restupper_1920.jpg";
import restupper640 from "../assets/restupper_640.jpg";

const SmartDesctription = () => {
  return (
    <Wrapper className="smartdescription">
      <div className="img-section">
        <div className="img-section__img--lower"></div>
        <div className="img-section__img--upper"></div>
      </div>
      <div className="small-about-section">
        <h3>Welcome in our E-Rest</h3>
        <div className="underline"></div>
        <div className="small-about-section--text">
          <p>
            Our restaurant was created out of passion and love for good food as
            well as the need to share it with others. We invite families with
            children and fans of sports broadcasts to cheer together while
            enjoying tasty food and good drinks as well as natural squeezed
            juices.
          </p>
          <p>
            We invite you to visit us in our premises and to check our menu and
            order food by phone and online.
          </p>
        </div>
        <Link to="/about" className="btn hero-btn">
          More about us...
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  min-height: 50vh;
  width: 95vw;
  margin: 0 auto;
  max-width: var(--max-width);
  .img-section {
    /* display: none; */
    position: relative;
    height: 300px;
    width: 100%;
    &__img {
      &--lower {
        position: absolute;
        left: 5%;
        top: 5%;
        border: 3px solid black;
        box-shadow: 5px 5px 10px black;
        width: 70%;
        height: 40%;
        background-image: url("${restlower640}");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      &--upper {
        position: absolute;
        left: 23%;
        top: 40%;
        border: 3px solid black;
        box-shadow: 5px 5px 10px black;
        width: 70%;
        height: 50%;
        background-image: url("${restupper640}");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 10;
      }
    }
  }
  .small-about-section {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    border: 3px solid var(--clr-primary-5);

    margin: 15px;
    margin-top: 0px;
    padding: 10px;
    border-radius: 15px;
    max-width: 90%;
    box-shadow: 5px 5px 10px var(--clr-primary-5);
    h3 {
      text-align: center;
    }
    .underline {
      border-top: 3px solid var(--clr-grey-5);
    }
    &--text {
      margin-top: 20px;
    }
  }
  /* @media (min-width: 470px) {
    display: flex;
    .img-section {
      display: flex;
      margin-right: 10px;
      width: 50%;
      &__img {
        &--lower {
          left: 2%;
          top: 5%;
          width: 90%;
          height: 40%;
        }
        &--upper {
          left: 10%;
          top: 40%;
          width: 90%;
          height: 50%;
        }
      }
    }
    .small-about-section {
      max-width: 55%;
      margin: 10px auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  } */
  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .img-section {
      width: 100%;
      height: 100%;
      padding: 10px;
      &__img {
        &--lower {
          left: 7%;
          top: 10%;
          width: 45%;
          height: 80%;
        }
        &--upper {
          left: 50%;
          top: 15%;
          width: 45%;
          height: 80%;
        }
      }
    }
    .small-about-section {
      max-width: 70%;
      margin: 10px auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .img-section {
      width: 100%;
      height: 100%;
      &__img {
        &--lower {
          left: 10%;
          top: 5%;
          width: 45%;
          height: 55%;
        }
        &--upper {
          left: 40%;
          top: 35%;
          width: 45%;
          height: 55%;
        }
      }
    }
    .small-about-section {
      max-width: 70%;
      margin: 0 auto;
      margin-top: -40px;
      margin-bottom: 20px;
    }
  }
`;
export default SmartDesctription;
