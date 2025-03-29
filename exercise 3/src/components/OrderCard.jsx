
import React from "react";

export default function OrderCard({ item, onQuantityChange }) {
  return (
    <div className="order">
      <div>
        <h4>{item.name}</h4>
        <small>${item.price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <button
          className="order-button"
          onClick={() => onQuantityChange(item.id, -1)}
          disabled={item.quantity === 0}
          style={{ backgroundColor: item.quantity === 0 ? "#bfbfbf" : "#a9d453", color: "white" }}>-</button>
        <h4>{item.quantity}</h4>
        <button
          className="order-button"
          onClick={() => onQuantityChange(item.id, 1)}
          style={{ backgroundColor: "#a9d453", color: "white" }}>+</button>
      </div>
    </div>
  );
}
