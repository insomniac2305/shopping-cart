function Cart({ items }) {
  const itemList = items.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });

  return (
    <div>
      <h1>Cart</h1>
      <ul>{itemList}</ul>
    </div>
  );
}

export default Cart;
