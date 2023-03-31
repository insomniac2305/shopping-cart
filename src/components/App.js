import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Item from "./Item";
import Shop from "./Shop";
import itemData from "../data/items.json";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId, count) => {
    const cartItemIndex = cartItems.findIndex((it) => it.id === itemId);
    if (cartItemIndex === -1) {
      const newItem = {
        id: itemId,
        count: count,
      };
      setCartItems([...cartItems, newItem]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[cartItemIndex].count += count;
      setCartItems(newCartItems);
    }
  };

  const removeFromCart = (itemId, count) => {
    const cartItemIndex = cartItems.findIndex((it) => it.id === itemId);
    if (cartItemIndex === -1) return;

    const newCartItems = [...cartItems];

    if (newCartItems[cartItemIndex].count - count <= 0) {
      newCartItems.splice(cartItemIndex, 1);
    } else {
      newCartItems[cartItemIndex].count -= count;
    }

    setCartItems(newCartItems);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop items={itemData} onAdd={addToCart} />} />
        <Route path="/cart" element={<Cart items={cartItems} onAdd={addToCart} onRemove={removeFromCart} />} />
        <Route path="/shop/:itemId" element={<Item onAdd={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
