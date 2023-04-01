import { useState } from "react";
import { Link } from "react-router-dom";

function CartItem({ id, name, count, onAdd, onRemove }) {
  const [newCount, setNewCount] = useState(count);

  const handleCountChange = (value) => {
    const parsedValue = parseInt(value) || 0;

    if (parsedValue === 0) {
      onRemove(id, newCount);
      return;
    }

    let countChange = parsedValue - newCount;
    setNewCount(parsedValue);

    if (countChange > 0) {
      onAdd(id, countChange);
    } else if (countChange < 0) {
      countChange *= -1;
      onRemove(id, countChange);
    }
  };

  return (
    <>
      <Link to={`/shop/${id.toString()}`}>{name}</Link>
      <input
        type="number"
        name={`count${id}`}
        id={`count${id}`}
        value={newCount}
        onChange={(e) => handleCountChange(e.target.value)}
      />
      <button type="button" onClick={() => onRemove(id, newCount)}>
        Remove from cart
      </button>
    </>
  );
}

export default CartItem;
