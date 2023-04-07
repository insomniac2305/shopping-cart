import { useState } from "react";
import { Link } from "react-router-dom";
import CountInput from "./CountInput";
import { FaCartPlus } from "react-icons/fa";
import Button from "./Button";

function ShopItem({ id, name, image, price, onAdd }) {
  const [count, setCount] = useState(1);

  const handleCountChange = (value) => {
    const parsedValue = parseInt(value) || 1;
    if (parsedValue > 0 && parsedValue < 100) {
      setCount(parsedValue);
    }
  };

  return (
    <article className="m-4 flex h-full flex-col rounded-lg bg-white shadow-md dark:bg-slate-800">
      <Link
        to={`/shop/${id.toString()}`}
        className="overflow-hidden overflow-ellipsis whitespace-nowrap text-center font-bold dark:text-white"
      >
        <img
          src={image}
          alt={name}
          className="h-52 w-full rounded-t-lg object-cover"
        />
        <h2 className="p-2">{name}</h2>
      </Link>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-row items-center justify-between">
          <CountInput count={count} onChange={handleCountChange} />
          <h3 className="font-semibold tracking-tighter text-lg dark:text-white ">{price*count}$</h3>
        </div>
        <Button
          onClick={() => onAdd(id, parseInt(count) || 0)}
          Icon={FaCartPlus}
          text="Add to cart"
        />
      </div>
    </article>
  );
}

export default ShopItem;
