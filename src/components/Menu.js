import React, { useEffect } from "react";
import styled from "styled-components";
import { useOrderContext } from "../context/order_context";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { ZeroAmountAlert } from "./index";

const Menu = (props) => {
  const restaurantmenu = props.rest_menu;
  const { sendToOrder, numberofPizzas, setNumberofPizzas } = useOrderContext();

  const addPizzaNumber = (id) => {
    setNumberofPizzas(
      numberofPizzas.map((element) => {
        if (element.id === id) {
          if (element.value < 1) {
            return { ...element, value: 1 };
          }
          return { ...element, value: element.value + 1 };
        } else {
          return element;
        }
      })
    );
  };

  const subtractPizzaNumber = (id) => {
    setNumberofPizzas(
      numberofPizzas.map((element) => {
        if (element.id === id) {
          if (element.value <= 1) {
            return { ...element, value: 1 };
          }
          return { ...element, value: element.value - 1 };
        } else {
          return element;
        }
      })
    );
  };

  const handleSelectChange = (event, id) => {
    const selectedValue = event.target.value;
    setNumberofPizzas(
      numberofPizzas.map((element) => {
        if (element.id === id) {
          const samePositionInMenu = restaurantmenu.find(
            (elem) => elem.id === id
          );
          const priceOfPizza = samePositionInMenu.sizeprice;
          console.log(priceOfPizza);
          if (selectedValue === "xl") {
            return {
              ...element,
              price: parseFloat(priceOfPizza[0].price),
              size: selectedValue,
            };
          } else if (selectedValue === "l") {
            return {
              ...element,
              price: parseFloat(priceOfPizza[1].price),
              size: selectedValue,
            };
          }
        } else {
          return element;
        }
      })
    );
  };

  const handleInputChange = (event, id) => {
    setNumberofPizzas(
      numberofPizzas.map((element) => {
        if (element.id === id) {
          if (element.value < 1) {
            return { ...element, value: 1 };
          }
          return {
            ...element,
            value: parseFloat(event.target.value),
          };
        } else {
          return element;
        }
      })
    );
  };

  useEffect(() => {
    const newState = numberofPizzas.map((element) => {
      const newArray = restaurantmenu.find(
        (restElement) => restElement.id === element.id
      );
      const price = newArray.sizeprice[0].price;
      const size = newArray.sizeprice[0].size;
      const name = newArray.name;
      return { ...element, price, name, size };
    });
    setNumberofPizzas(newState);
  }, []);

  return (
    <Wrapper>
      <ZeroAmountAlert />
      <div className="list">
        <div className="list__fulllist">
          {restaurantmenu.map((position) => {
            const { id, name, picture, sizeprice, toppings } = position;
            const pizzavalue = numberofPizzas.find((pizza) => pizza.id === id);
            const { value } = pizzavalue;
            return (
              <div key={id} className="list__fulllist--position">
                <div className="info">
                  <h3>{name}</h3>
                  <h5>Pizza topings:</h5>
                  <p className="toppings">{toppings}</p>
                  <label>
                    Price:
                    <select
                      name="pizzaPrice"
                      onChange={(event) => handleSelectChange(event, id)}
                    >
                      <option value={"xl"} defaultValue>
                        Size XL - cost {sizeprice[0].price}
                      </option>
                      <option value={"l"}>
                        Size L - cost {sizeprice[1].price}
                      </option>
                    </select>
                  </label>
                  <div className="Amountdiv">
                    <span>Number</span>
                    <AiFillMinusSquare
                      onClick={() => subtractPizzaNumber(id)}
                      style={{ fontSize: "24px", margin: " 0 5px" }}
                    />
                    <input
                      type="number"
                      value={value}
                      onChange={(event) => handleInputChange(event, id, name)}
                    ></input>
                    <AiFillPlusSquare
                      onClick={() => addPizzaNumber(id)}
                      style={{ fontSize: "24px", margin: " 0 5px" }}
                    />
                  </div>
                  <button
                    className="btn"
                    onClick={() => sendToOrder(id, name, sizeprice)}
                  >
                    Add to card
                  </button>
                </div>
                <div className="picture">
                  <img src={picture} alt={name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .list {
    margin-top: 20px;
    &__fulllist {
      margin: 10px 0;
      &--position {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        padding: 10px;
        margin-top: 10px;
        background-color: var(--clr-primary-7);
        .info {
          width: 80vw;
          .btn {
            margin: 15px 10px 5px;
          }
        }
        p {
          width: 250px;
        }
        .toppings {
          font-style: italic;
        }
        select {
          margin-left: 10px;
          font-size: 14px;
          p {
            font-size: 20px;
          }
        }
        .Amountdiv {
          display: flex;
          flex-direction: row;
          align-content: center;
          margin-top: 10px;
          input {
            text-align: center;
            width: 20px;
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
        }
        .picture {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          top: 20%;
          right: 0;
          height: 100%;
          img {
            /* transform: scale(1); */
            transform-origin: center right;
          }
        }
      }
    }
  }

  @media screen and (min-width: 576px) {
    .list {
      &__fulllist {
        &--position {
          .info {
            width: 70vw;
          }
          p {
            width: 300px;
          }
          .picture {
            top: 0;
            img {
              transform: scale(1);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .list {
      &__fulllist {
        &--position {
          .info {
            width: 60vw;
          }
          p {
            width: 370px;
          }
          .picture {
            top: 0;
            img {
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 920px) {
    .list {
      &__fulllist {
        &--position {
          .info {
            width: 60vw;
          }
          p {
            width: 440px;
          }
          .picture {
            top: 0;
            img {
              transform: scale(1.4);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .list {
      &__fulllist {
        &--position {
          .info {
            width: 60vw;
          }
          h5 {
            font-size: 26px;
          }
          p {
            font-size: 20px;
            width: 550px;
          }
          .picture {
            top: 0;
            img {
              transform: scale(1.8);
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 1500px) {
    .list {
      &__fulllist {
        &--position {
          p {
            width: 700px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1800px) {
    .list {
      &__fulllist {
        &--position {
          p {
            width: 800px;
          }
        }
      }
    }
  }
`;

export default Menu;
