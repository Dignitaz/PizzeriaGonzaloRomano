import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { Home, Order, About, Error, Contact } from "./pages";
import "./index.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<Order />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path='order/:id' element={<SingleProduct />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
