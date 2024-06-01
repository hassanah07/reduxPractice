import React from "react";
import Products from "./components/Products";
import CartItemAdder from "./components/CartItemAdder";

const HomePage = async () => {
  let response = await fetch(
    "http://localhost:4000/api/products/findCartTest",
    {
      cache: "no-cache",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify()
    }
  );
  response = await response.json();
  const cartLengthUpdate = 0;
  return (
    <div>
      <Products />
      <CartItemAdder response={response} cartLengthUpdate={cartLengthUpdate} />
    </div>
  );
};

export default HomePage;
