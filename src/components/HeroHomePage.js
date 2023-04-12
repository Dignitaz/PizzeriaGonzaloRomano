import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pizza1920 from "../assets/pizza_background_1920.jpg";

const HeroHomePage = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Italian pizza <br />
          Speedy Delivery
        </h1>
        <p>
          Original Italian recipe, fast delivery, low prices - that's Gonzalo
          Romano !
        </p>
        <div className="div-btn">
          <button>
            <Link to="/order" className="btn hero-btn">
              Order now !
            </Link>
          </button>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${pizza1920}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  h1 {
    color: var(--clr-white);
    text-align: center;
  }
  .hero-btn {
    width: 250px;
    text-align: center;
  }
  .div-btn {
    display: flex;
    justify-content: center;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-white);
    font-size: 1rem;
    text-align: center;
  }
  @media (min-width: 992px) {
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export default HeroHomePage;
