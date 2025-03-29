
import React, { useState } from "react";

export default function StuffForm({ onAdd }) {
  // Step 1: Add states to store input values
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!name || !price) {
      alert("Please enter both name and price!");
      return;
    }

    // Step 2: Call parent function with new object
    console.log(`A new object named ${name}, price ${price}$ will be added to the list`);

    onAdd({ name, price: Number(price) });

    
    setName("");
    setPrice("");
  };

  return (
  <form className="stuff-form">
  <p>Stuff name</p>
  <input type="search" placeholder="Banana" />

  <p>Stuff price</p>
  <input type="search" placeholder="15" />

  <button>Add Stuff</button>
  </form>
  );
}
