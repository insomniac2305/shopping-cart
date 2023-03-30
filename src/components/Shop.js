import { Link } from "react-router-dom";

function Shop({ items }) {
  const itemList = items.map((item) => {
    return (
      <li key={item.id}>
        <Link to={item.id.toString()}>{item.name}</Link>
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
