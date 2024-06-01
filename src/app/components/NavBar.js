"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [totalCartItems, setTotalCartItems] = useState([]);
  const data = useSelector((items) => items.CartSlice.cartItems);

  useEffect(() => {
    if (data) {
      setTotalCartItems(data);
    }
  }, [data]);
  return (
    <div className="fixed bottom-5 right-5 flex">
      <span className="text-7xl">🛒</span>
      <span>{totalCartItems.length || 0}</span>
    </div>
  );
};

export default NavBar;
