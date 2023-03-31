import { useState } from "react";
import { Link } from "react-router-dom";

function ShopItem({ id, name, onAdd }) {
  const [count, setCount] = useState(1);

  return (
    <>
      <Link to={id.toString()}>{name}</Link>
      <input
        type="number"
        name={`count${id}`}
        id={`count${id}`}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button type="button" onClick={() => onAdd(id, parseInt(count) || 0)}>
        Add to cart
      </button>
    </>
  );
}

export default ShopItem;
