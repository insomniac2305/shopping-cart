import ShopItem from "./ShopItem";

function Shop({ items, onAdd }) {
  const itemList = items.map((item) => {
    return (
      <li key={item.id}>
        <ShopItem id={item.id} name={item.name} image={item.images[0]} onAdd={onAdd} />
      </li>
    );
  });

  return (
    <div className="bg-emerald-50 dark:bg-gray-900 flex justify-center">
      <ul
        className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-[21rem] gap-y-4 w-full max-w-screen-xl"
      >
        {itemList}
      </ul>
    </div>
  );
}

export default Shop;
