"use client";
import React, { useState } from "react";
import CartItemAdder from "./CartItemAdder";
import { useAppDispatch } from "@/redux/features/hooks/hook";
import { addToCart } from "@/redux/features/slice/CartSlice";

const CartBtn = ({ product }) => {
  const dispatch = useAppDispatch();

  const [response, setResponse] = useState([]);
  const [cartLengthUpdate, setCartLengthUpdate] = useState(0);
  const handleClick = async () => {
    const data = {
      productId: product.id,
      product: product,
      price: product.price * 80
    };
    let res = await fetch("http://localhost:4000/api/products/addToCartTest", {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    res = await res.json();
    if (res.status === true) {
      let newData = await fetch(
        "http://localhost:4000/api/products/findCartTest",
        {
          cache: "no-cache",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify()
        }
      );
      newData = await newData.json();
      dispatch(addToCart(newData.cart));
    }
  };
  return (
    <div>
      <button onClick={handleClick}>➕</button>
    </div>
  );
};

export default CartBtn;
