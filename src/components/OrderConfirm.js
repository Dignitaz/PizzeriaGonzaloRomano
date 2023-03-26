import React from "react";
import styled from "styled-components";
import { useOrderContext } from "../context/order_context";
import { GrFormClose } from "react-icons/gr";

const OrderConfirm = () => {
  const { isOrderValid, setIsOrderValid, setFullAmount, orderConfirmTab } =
    useOrderContext();
  return (
    <Wrapper>
      <div
        className={`${
          isOrderValid ? "bcghero" : "bcghero orderconfirmnondisplay"
        }`}
      >
        <div className="orderconfirm">
          <GrFormClose
            className="orderconfirm__closebtn"
            onClick={orderConfirmTab}
          />
          <h3>Thanks for your order!</h3>
          <div className="underline"></div>
          <div className="orderform__form"></div>
          <div className="orderform__form--summary">
            <p> Order waiting time:</p>
            <h3> 45-60min</h3>
            <h5>Full amount:</h5>
            <p>{`${setFullAmount} zł`}</p>
          </div>
          <button type="submit" className="btn" onClick={orderConfirmTab}>
            Thanks!
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .bcghero {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.4);
    z-index: 1000;
    .orderconfirm {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--clr-grey-9);
      padding: 20px;
      border-radius: 10px;
      border: 5px solid var(--clr-primary-3);
      text-align: center;
      .underline {
        border-top: 3px solid var(--clr-primary-3);
      }
      &__closebtn {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.5rem;
        margin: 5px;
        margin: 5px;
        cursor: pointer;
      }
    }
  }
  .orderconfirmnondisplay {
    display: none;
  }
  @media (max-width: 600px) {
    .orderform {
      width: 80vw;
    }
  }
`;

export default OrderConfirm;
