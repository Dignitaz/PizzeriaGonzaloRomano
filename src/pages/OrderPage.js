import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Menu,
  Loading,
  YourOrderVertical,
  YourOrderHorizontal,
} from "../components/index";
import { useProductsContext } from "../context/products_context";
const OrderPage = (props) => {
  const { fetchMenuData, rest_menu } = useProductsContext();

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <Wrapper>
      <YourOrderVertical />
      <YourOrderHorizontal />
      <div className="orderpage">
        <h2>Ours Menu</h2>
        <div className="orderpage__underline"></div>
        <section className="orderpage__main">
          {rest_menu ? <Menu rest_menu={rest_menu} /> : <Loading />}
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 95vw;
  margin: 0 auto;
  max-width: var(--max-width);
  .orderpage {
    h2 {
      text-align: center;
    }
    &__underline {
      align-self: center;
      border-top: 3px solid var(--clr-primary-6);
    }
    &__main {
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
  }
`;

export default OrderPage;
