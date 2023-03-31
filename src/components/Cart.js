function Cart({ items }) {
  const itemList = items.map((item) => {
    return (
      <li key={item.id}>
        {item.name}
        <input type="number" name={`count${item.id}`} id={`count${item.id}`} />
        <button type="button">Remove from cart</button>
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
