import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcCancel } from "react-icons/fc";
import { TbShoppingCartOff } from "react-icons/tb";
import { useOrderContext } from "../context/order_context";

const YourOrderVertical = () => {
  const { startState, closePosition, setFullAmount, toggleShowOrderForm } =
    useOrderContext();
  let array = startState.actualOrder;
  return (
    <Wrapper>
      <div className="orderdiv">
        <div className="orderdiv__positions">
          <h4>Your Order:</h4>
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
          <h5>Full amount:</h5>
          <p className="fullAmount">{`${setFullAmount} zł`}</p>
        </div>
        <div className="btn" onClick={toggleShowOrderForm}>
          {" "}
          Order now
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  right: 5px;
  top: 19vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  z-index: 10;

  .orderdiv {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: var(--clr-grey-9);
    border: 5px solid var(--clr-grey-4);
    border-radius: 10px;
    &__positions {
      padding: 10px;
      h4 {
        border-bottom: 2px solid var(--clr-primary-7);
      }
      &--list {
        overflow-y: scroll;
        max-height: 400px;
        .noorder {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          height: 100px;

          svg {
            margin: 20px auto;
            scale: calc(3);
            color: rgb(210, 0, 0);
          }
        }
        li {
          position: relative;
          padding: 5px;
          margin-bottom: 5px;
          border-radius: 5px;
          background-color: var(--clr-primary-7);
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
            /* height: 100%; */
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
      padding: 0 10px;
      background-color: var(--clr-grey-9);
      font-style: italic;
      .fullAmount {
        text-align: center;
        font-size: 25px;
      }
    }
    .btn {
      text-align: center;
      width: 80%;
    }
  }

  @media (max-width: 1200px) {
    .orderdiv {
      display: none;
    }
  }
`;

export default YourOrderVertical;
