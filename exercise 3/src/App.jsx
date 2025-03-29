import React ,{useState}from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";


const ORDERS = [
  {
    id: 1,
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    id: 2,
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    id: 4,
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = useState(ORDERS);

  const handleQuantityChange = (id, delta) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, quantity: Math.max(0, order.quantity + delta) } : order
      )
    );
  };

  const totalPrice = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);

  return (
    <>
      <header>
        <h1>Your Orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order) => (
          <OrderCard key={order.id} item={order} onQuantityChange={handleQuantityChange} />
        ))}
      </div>

      <CheckoutButton total={totalPrice} />
    </>
  );
}
