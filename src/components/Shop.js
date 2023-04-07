import { useLoaderData, useNavigate } from "react-router-dom";
import Item from "./Item";
import Modal from "./Modal";
import ShopItem from "./ShopItem";

function Shop({ items, onAdd }) {
  const item = useLoaderData();
  const navigate = useNavigate();
  const itemList = items.map((it) => {
    return (
      <li key={it.id}>
        <ShopItem
          id={it.id}
          name={it.name}
          image={it.images[0]}
          price={it.price}
          onAdd={onAdd}
        />
      </li>
    );
  });

  return (
    <div className="flex justify-center bg-emerald-50 dark:bg-gray-900 pb-8">
      <ul className="grid w-full max-w-screen-xl auto-rows-[21rem] grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-y-4">
        {itemList}
      </ul>
      <Modal isOpen={item} onClose={() => navigate("/shop")}>
        {item && (
          <Item
            id={item.id}
            name={item.name}
            images={item.images}
            description={item.description}
            price={item.price}
            onAdd={onAdd}
          />
        )}
      </Modal>
    </div>
  );
}

export default Shop;
