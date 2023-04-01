import CartItem from "./CartItem";

function Cart({ items, onAdd, onRemove }) {
  const itemList = items.map((item) => {
    return (
      <li key={item.id}>
        <CartItem id={item.id} name={item.name} count={item.count} onAdd={onAdd} onRemove={onRemove} />
      </li>
    );
  });

  const total = items.reduce((prev, cur) => prev + (cur.price * cur.count), 0).toFixed(2);

  return (
    <div>
      <h1>Cart</h1>
      <ul>{itemList}</ul>
      <h3>Total: {total}$</h3>
    </div>
  );
}

export default Cart;
