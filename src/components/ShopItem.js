import { useState } from "react";
import { Link } from "react-router-dom";
import CountInput from "./CountInput";
import { FaCartPlus } from "react-icons/fa";

function ShopItem({ id, name, image, onAdd }) {
  const [count, setCount] = useState(1);

  const handleCountChange = (value) => {
    const parsedValue = parseInt(value) || 1;
    if (parsedValue > 0 && parsedValue < 100) {
      setCount(parsedValue);
    }
  };

  return (
    <article className="m-4 flex h-full flex-col items-center rounded-lg bg-white shadow-md dark:bg-slate-800">
      <img
        src={image}
        alt={name}
        className="h-52 w-full rounded-t-lg object-cover"
      />
      <Link
        to={id.toString()}
        className="p-2 text-center font-bold dark:text-white"
      >
        {name}
      </Link>
      <div className="flex flex-col items-center gap-2">
        <CountInput count={count} onChange={handleCountChange} />
        <button
          type="button"
          onClick={() => onAdd(id, parseInt(count) || 0)}
          className="flex h-8 w-24 items-center justify-center rounded-lg bg-violet-600 font-bold text-white transition hover:bg-violet-500 active:bg-violet-700"
        >
          <span className="text-xl">
            <FaCartPlus />
          </span>
          &nbsp;Add
        </button>
      </div>
    </article>
  );
}

export default ShopItem;
