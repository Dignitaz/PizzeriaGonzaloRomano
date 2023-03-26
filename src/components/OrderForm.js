import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useOrderContext } from "../context/order_context";
import { GrFormClose } from "react-icons/gr";

const OrderForm = () => {
  const {
    showOrderForm,
    toggleShowOrderForm,
    setShowOrderForm,
    order,
    setOrder,
    setFullAmount,
    setIsOrderValid,
  } = useOrderContext();
  const [isName, setIsName] = useState(false);
  const [isLastName, setIsLastName] = useState(false);
  const [isAdress, setIsAdress] = useState(false);
  const [isresidential, setIsResidential] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (order.name === "") {
      setIsName(true);
    } else if (order.lastname === "") {
      setIsLastName(true);
    } else if (order.adress === "") {
      setIsAdress(true);
    } else if (order.residential === "") {
      setIsResidential(true);
    } else if (order.payment === "") {
      setIsPayment(true);
    } else {
      setIsOrderValid(true);
      setIsName(false);
      setIsLastName(false);
      setIsAdress(false);
      setIsResidential(false);
      setIsPayment(false);
    }
  };
  return (
    <Wrapper>
      <div
        className={`${
          showOrderForm ? "bcghero" : "bcghero orderformnondisplay"
        }`}
      >
        <div className="orderform">
          <GrFormClose
            className="orderform__closebtn"
            onClick={toggleShowOrderForm}
          />
          <h3>Delivery details:</h3>
          <div className="underline"></div>
          <div className="orderform__form">
            <form onSubmit={handleSubmit}>
              <label>
                <p>Name:</p>
                <input
                  type="text"
                  value={order.name}
                  placeholder={isName ? "Type your name..." : null}
                  style={{
                    boxShadow: isName ? "0px 0px 10px red" : null,
                    border: isName ? "1px solid red" : null,
                  }}
                  onChange={(event) =>
                    setOrder({ ...order, name: event.target.value })
                  }
                />
              </label>
              <label>
                <p>Last name:</p>
                <input
                  type="text"
                  value={order.lastname}
                  placeholder={isLastName ? "Type your lastname..." : null}
                  style={{
                    boxShadow: isLastName ? "0px 0px 10px red" : null,
                    border: isLastName ? "1px solid red" : null,
                  }}
                  onChange={(event) =>
                    setOrder({ ...order, lastname: event.target.value })
                  }
                />
              </label>
              <label>
                <p>Adress:</p>
                <input
                  type="text"
                  value={order.adress}
                  placeholder={isAdress ? "Type your name..." : null}
                  style={{
                    boxShadow: isAdress ? "0px 0px 10px red" : null,
                    border: isAdress ? "1px solid red" : null,
                  }}
                  onChange={(event) =>
                    setOrder({ ...order, adress: event.target.value })
                  }
                />
              </label>
              <label>
                <p>Residential:</p>
                <input
                  type="text"
                  value={order.residential}
                  placeholder={isresidential ? "Type your name..." : null}
                  style={{
                    boxShadow: isresidential ? "0px 0px 10px red" : null,
                    border: isresidential ? "1px solid red" : null,
                  }}
                  onChange={(event) =>
                    setOrder({ ...order, residential: event.target.value })
                  }
                />
              </label>
              <label>
                <p>Comments:</p>
                <textarea
                  value={order.comments}
                  onChange={(event) =>
                    setOrder({ ...order, comments: event.target.value })
                  }
                ></textarea>
              </label>
              <div className="orderform__form--radio">
                <label>
                  Pay by cash
                  <input
                    type="radio"
                    value="gotowka"
                    style={{
                      boxShadow: isPayment ? "0px 0px 10px red" : null,
                      border: isPayment ? "1px solid red" : null,
                    }}
                    checked={order.payment === "gotowka"}
                    onChange={(event) =>
                      setOrder({ ...order, payment: event.target.value })
                    }
                  />
                </label>
                <label>
                  Pay by card
                  <input
                    type="radio"
                    value="karta"
                    style={{
                      boxShadow: isPayment ? "0px 0px 10px red" : null,
                      border: isPayment ? "1px solid red" : null,
                    }}
                    checked={order.payment === "karta"}
                    onChange={(event) =>
                      setOrder({ ...order, payment: event.target.value })
                    }
                  />
                </label>
              </div>
              <div className="orderform__form--summary">
                <h5>Full amount:</h5>
                <p>{`${setFullAmount} zł`}</p>
              </div>
              <button type="submit" className="btn">
                Send order
              </button>
            </form>
          </div>
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
    .orderform {
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
      &__form {
        form {
          display: flex;
          flex-direction: column;

          label {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 5px;
            font-size: 20px;
          }
          span {
            font-size: 20px;
          }
          input {
            margin-left: 10px;
            font-size: 20px;
          }
          p {
            font-size: 20px;
            margin-bottom: 0px;
            padding: 0;
            width: 120px;
          }
          textarea {
            font-size: 20px;
            margin-left: 10px;
          }
          button {
            margin-top: 15px;
          }
        }
        &--radio {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          label {
            width: 40%;
          }
        }
        &--summary {
          display: flex;
          flex-direction: column;
          h5 {
            margin-top: 5px;
          }
          p {
            align-self: center;
            font-style: italic;
          }
        }
      }
    }
  }
  .orderformnondisplay {
    display: none;
  }
  @media (max-width: 600px) {
    .orderform {
      width: 80vw;
      input {
        min-width: 80%;
      }
      textarea {
        min-width: 80%;
      }
    }
  }
`;

export default OrderForm;
