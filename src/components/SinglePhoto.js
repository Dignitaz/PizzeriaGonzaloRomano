import React from "react";
import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";

const SinglePhoto = (props) => {
  const { isPictureOpen, pictureUrl, closePicture } = props;
  return (
    <Wrapper>
      <div
        className={`${
          isPictureOpen ? "photo-section showpicture" : "photo-section"
        }`}
      >
        <div className="photo-section__photo">
          <img src={pictureUrl} alt="made in restaurant" />
          <div className="photo-section__icon" onClick={closePicture}>
            <TfiClose />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .photo-section {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    transform: translate(-100%);
    z-index: -1;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85));
    &__photo {
      position: relative;
      margin: auto 0;
      z-index: 999;
    }
    &__icon {
      position: absolute;
      top: 10px;
      right: 10px;
      color: var(--clr-white);
      font-size: 35px;
      z-index: 1000;
    }
    &__icon:hover {
      cursor: pointer;
    }
  }
  .showpicture {
    transform: translate(0);
    z-index: 998;
    img {
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    .photo-section {
      &__icon {
        font-size: 20px;
        font-weight: bolder;
      }
    }
  }
`;

export default SinglePhoto;
