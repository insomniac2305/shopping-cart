import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Button from "./Button";
import CountInput from "./CountInput";

function Item({ id, name, description, images, price, onAdd }) {
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="self-center p-4 pt-8 md:pt-4 md:flex-auto md:w-3/5">
        <img
          src={images[0]}
          alt={name}
          className="max-h-96 w-full rounded-lg md:max-h-none"
        />
      </div>
      <div className="flex flex-col gap-y-2 p-4 md:flex-auto md:w-2/5">
        <h1 className="pb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
          {name}
        </h1>
        <p className="text-slate-600 dark:text-slate-300">{description}</p>
        <p className="py-8 text-center text-2xl font-semibold text-slate-800 dark:text-white">
          {price}$
        </p>
        <CountInput count={count} onChange={setCount} />
        <Button
          onClick={() => onAdd(id, parseInt(count) || 0)}
          Icon={FaCartPlus}
          text="Add to cart"
        />
      </div>
    </div>
  );
}

export default Item;
