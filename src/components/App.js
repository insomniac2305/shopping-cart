import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop";
import itemData from "../data/items.json";
import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppWrapper({ cartCount }) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar cartCount={cartCount} />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId, count) => {
    const cartItemIndex = cartItems.findIndex((it) => it.id === itemId);
    if (cartItemIndex === -1) {
      const newItem = itemData.find((it) => it.id === itemId);
      if (newItem) {
        newItem.count = count;
        setCartItems([...cartItems, newItem]);
      }
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

  const routes = [
    {
      path: "/",
      element: <AppWrapper cartCount={cartItems.length} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop items={itemData} onAdd={addToCart} />,
        },
        {
          path: "shop/:itemId",
          element: <Shop items={itemData} onAdd={addToCart} />,
          loader: ({ params }) => {
            const id = parseInt(params.itemId);
            return itemData.find((it) => it.id === id);
          },
        },
        {
          path: "cart",
          element: (
            <Cart
              items={cartItems}
              onAdd={addToCart}
              onRemove={removeFromCart}
              onCheckout={() => setCartItems([])}
            />
          ),
        },
      ],
    },
  ];

  const router = createHashRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
