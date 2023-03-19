import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { photos } from "../contains/extraURLs";
import restaurant_hero from "../assets/restaurant_back.jpg";
import { SinglePhoto } from "../components/index";

const AboutPage = () => {
  const [isPictureOpen, setIsPictureOpen] = useState(false);
  const [pictureUrl, setPictureUrl] = useState("");

  const showPicture = (id) => {
    const picture = photos.filter((photo) => photo.id === id);
    const pictureurl = picture[0].url;
    setIsPictureOpen(true);
    setPictureUrl(pictureurl);
  };

  const closePicture = () => {
    setIsPictureOpen(false);
    setPictureUrl("");
  };

  return (
    <Wrapper>
      <section className="main_section">
        <div className="main_section__inside">
          <div className="main_section__inside--title">
            <h3>About us</h3>
          </div>
          <p className="main_section__inside--description">
            The Speedy Gonazalo Romano restaurant in Białystok was created out
            of love for good food and… Tuscany! Tuscan cuisine is not only
            pizza, steaks and excellent wine, but also a great atmosphere that
            will captivate not only lovers. The industrial interior and casual
            atmosphere make Papa Pasta a perfect place for breakfast, business
            meetings and a getaway with friends. We invite you to our place at
            ul. SpeedyGonzalo 77 and to place orders for delivery!
          </p>
          <p className="main_section__inside--description">
            Tuscan cuisine is a real fantasy of flavors! One of the oldest
            regional cuisines in Italy, homemade pasta, classic Italian pizza
            with a delicate edge, steaks, venison and other meats are a real
            feast for the palate! Their unique, authentic taste lies in the
            Italian products we use. Real Italian flour, tomato sauce, cheeses,
            meats and high-quality extra virgin olive oil imported directly from
            the Tuscan grower - these are the basic ingredients of the dishes
            that come out of our kitchen. In addition, restaurant guests can
            count on tasty breakfasts - served sweet and savory, and aromatic
            coffee, which is made in a local roastery.
          </p>
          <p className="main_section__inside--description"></p>
        </div>
      </section>
      <section className="gallery_section">
        <div className="gallery_section__title">
          <h3> Our dishes</h3>
        </div>
        <div className="gallery_section__underline"></div>
        <ul className="gallery_section__photos">
          {photos.map((photo) => {
            const { id, url, alttext } = photo;
            return (
              <div
                key={id}
                className="gallery_section__photos--photo"
                onClick={() => showPicture(id)}
              >
                <img src={url} alt={alttext}></img>
                <div className="hover_bgc">
                  <FaSearch color="white" fontSize="30px" />
                </div>
              </div>
            );
          })}
        </ul>
      </section>
      <SinglePhoto
        isPictureOpen={isPictureOpen}
        pictureUrl={pictureUrl}
        closePicture={closePicture}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 95vw;
  margin: 0 auto;
  max-width: var(--max-width);
  .main_section {
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("${restaurant_hero}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 70vh;
    margin-top: 15px;
    &__inside {
      position: absolute;
      top: 50%;
      left: 50%;
      max-height: 80%;
      transform: translate(-50%, -50%);
      background-image: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      );
      border-radius: 5px;
      box-shadow: 0px 0px 15px var(--clr-grey-10);
      padding: 10px 20px;
      overflow: auto;
      &--title {
        text-align: center;
        border-bottom: 3px solid var(--clr-grey-2);
        margin-bottom: 10px;
      }
    }
  }
  .gallery_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin-top: 40px;
    &__title {
    }
    &__underline {
      align-self: center;
      width: 10vw;
      border-top: 3px solid var(--clr-primary-6);
    }
    &__photos {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
      &--photo {
        position: relative;
        margin-right: 10px;
        img {
          width: 300px;
          height: 250px;
          transition: 0.3s;
          cursor: pointer;
        }
        .hover_bgc {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.3);
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 100;
          transition: 0.3s;
          svg {
            margin: 0 auto;
          }
        }
        .hover_bgc:hover {
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .main_section {
      .main_section {
        &__inside {
          width: 75%;
        }
      }
    }
  }
`;

export default AboutPage;
