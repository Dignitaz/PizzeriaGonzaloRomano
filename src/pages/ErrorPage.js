import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="page-100">
        <h1>404</h1>
        <p>Page not found...</p>
        <Link to="/" className="btn">
          Back to Homepage
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .page-100 {
    h1 {
      font-size: 10rem;
    }
    p {
      font-size: 30px;
    }
  }
`;

export default ErrorPage;
