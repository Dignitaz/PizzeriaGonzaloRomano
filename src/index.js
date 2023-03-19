import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { OrderProvider } from "./context/order_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <OrderProvider>
      <App />
    </OrderProvider>
  </ProductsProvider>
);
