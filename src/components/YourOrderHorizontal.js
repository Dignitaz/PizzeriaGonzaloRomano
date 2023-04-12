import React, { useState } from "react";
import styled from "styled-components";
import { FcCancel } from "react-icons/fc";
import { FaShoppingCart, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useOrderContext } from "../context/order_context";
import { TbShoppingCartOff } from "react-icons/tb";

const YourOrderHorizontal = () => {
  const [isOrderActive, setIsOrderActive] = useState(false);
  const { startState, closePosition, setFullAmount, toggleShowOrderForm } =
    useOrderContext();
  const array = startState.actualOrder;

  const showOrder = () => {
    if (isOrderActive) {
      setIsOrderActive(false);
    } else {
      setIsOrderActive(true);
    }
  };

  return (
    <Wrapper>
      <section className={`${isOrderActive ? "" : "hidden"}`}>
        <div className="orderdiv">
          <div className="orderdiv__positions">
            <h4>Your Order:</h4>
            <div className="iconsDiv" onClick={showOrder}>
              <FaShoppingCart />
              {isOrderActive ? <FaArrowDown /> : <FaArrowUp />}
            </div>

            <ul className="orderdiv__positions--list">
              {array.length > 0 ? (
                array.map((element) => {
                  const { id, name, size, price, value } = element;
                  return (
                    <li key={id}>
                      <h5>{name}</h5>
                      <p className="sizediv">
                        Size: <i>{size}</i>
                      </p>
                      <p className="numberdiv">
                        <i>{value}</i> x <i>{price}</i>
                      </p>
                      <div className="cancelicon">
                        <FcCancel onClick={() => closePosition(id)} />
                      </div>
                    </li>
                  );
                })
              ) : (
                <div className="noorder">
                  <TbShoppingCartOff />
                  <p>Your order is empty</p>
                </div>
              )}
            </ul>
          </div>
          <div className="orderdiv__summary">
            <h4>Full amount:</h4>
            <p
              className="orderdiv__summary--paragraph"
              style={{ fontSize: "19px" }}
            >
              {`${setFullAmount} zł`}
            </p>
          </div>
          {setFullAmount > 500 ? (
            <p className="warning_amout">
              Orders over 500 zł are carried out only by phone{" "}
            </p>
          ) : (
            <div className="btn" onClick={toggleShowOrderForm}>
              Order now
            </div>
          )}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  section {
    position: none;
    right: 50%;
    bottom: 0;
    transform: translate(50%);
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    z-index: 10;
    transition: 0.5s;

    .orderdiv {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      background-color: var(--clr-grey-9);
      border: 5px solid var(--clr-grey-4);
      border-radius: 10px;
      &__positions {
        position: relative;
        padding: 0 10px 10px;
        .iconsDiv {
          position: absolute;
          right: 5px;
          top: -2px;
          font-size: 20px;
          cursor: pointer;
          svg:first-child {
            margin-right: 15px;
          }
        }
        h4 {
          border-bottom: 2px solid var(--clr-primary-7);
          margin-bottom: 10px;
        }
        &--list {
          display: flex;
          flex-direction: row;
          min-width: 60vw;
          max-width: 80vw;
          overflow-x: scroll;
          .noorder {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            height: 100px;
            width: 100%;
            svg {
              margin: 20px auto;
              scale: calc(3);
              color: rgb(210, 0, 0);
            }
            p {
              width: 100%;
              text-align: center;
            }
          }
          li {
            position: relative;
            padding: 10px;
            margin: 0 5px;
            border-radius: 5px;
            background-color: var(--clr-primary-7);
            min-width: 120px;
            h5 {
              text-align: center;
              margin-bottom: 5px;
            }
            .sizediv {
              margin-bottom: 5px;
            }
            .numberdiv {
              margin-bottom: 5px;
            }
            .cancelicon {
              position: absolute;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              bottom: 20px;
              right: 10px;
              svg {
                cursor: pointer;
                transform: scale(2);
                transform-origin: center right;
              }
            }
          }
        }
      }
      &__summary {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        background-color: var(--clr-grey-9);
        font-style: italic;
        h4 {
          margin-bottom: 5px;
          margin-right: 5px;
        }
        p {
          padding: 0;
          margin: 0;
        }
        .btn {
          text-align: center;
          width: 80%;
        }
      }
      .warning_amout {
        color: red;
        font-size: 14px;
        text-align: center;
        margin: 0;
      }
    }
  }
  .hidden {
    bottom: -18%;
  }
`;

export default YourOrderHorizontal;
