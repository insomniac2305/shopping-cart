import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Item({ onAdd }) {
  const item = useLoaderData();
  const [count, setCount] = useState(1);

  return (
    <>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <div>
        Price: {item.price}€
        <input
          type="number"
          name={`count${item.id}`}
          id={`count${item.id}`}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="button" onClick={() => onAdd(item.id, parseInt(count) || 0)}>
          Add to cart
        </button>
      </div>
    </>
  );
}

export default Item;
