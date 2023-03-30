import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Item from "./Item";
import Shop from "./Shop";
import itemData from "../data/items.json";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop items={itemData} />} />
        <Route path="/cart" element={<Cart items={itemData}/>} />
        <Route path="/shop/:itemId" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
