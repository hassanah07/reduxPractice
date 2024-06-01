"use client";
import { useAppDispatch } from "@/redux/features/hooks/hook";
import { addToCart } from "@/redux/features/slice/CartSlice";
import React from "react";

const CartItemAdder = ({ response, cartLengthUpdate }) => {
  const dispatch = useAppDispatch();
  dispatch(addToCart(response.cart));

  return null;
};

export default CartItemAdder;
