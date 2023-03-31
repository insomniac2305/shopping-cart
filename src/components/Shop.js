import ShopItem from "./ShopItem";

function Shop({ items, onAdd }) {
  const itemList = items.map((item) => {
    return (
      <li key={item.id}>
        <ShopItem id={item.id} name={item.name} onAdd={onAdd}/>
      </li>
    );
  });

  return (
    <div>
      <h1>Shop</h1>
      <ul>{itemList}</ul>
    </div>
  );
}

export default Shop;
