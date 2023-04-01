import CartItem from "./CartItem";

function Cart({ items, onAdd, onRemove }) {
  const itemList = items.map((item) => {
    return (
      <li key={item.id}>
        <CartItem id={item.id} name={item.name} count={item.count} onAdd={onAdd} onRemove={onRemove} />
      </li>
    );
  });

  return (
    <div>
      <h1>Cart</h1>
      <ul>{itemList}</ul>
    </div>
  );
}

export default Cart;
