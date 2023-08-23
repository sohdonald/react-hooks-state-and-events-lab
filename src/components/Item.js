import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("");
  const cartClass = inCart ? "in-cart" : "";

  function handleCart() {
    setInCart((inCart) => !inCart);
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
