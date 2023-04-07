import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Button from "./Button";
import CountInput from "./CountInput";

function Item({ id, name, description, images, price, onAdd }) {
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="self-center p-4 pt-8 md:w-3/5 md:flex-auto md:pt-4">
        <img
          src={images[0]}
          alt={name}
          className="max-h-96 w-full rounded-lg md:max-h-none"
        />
      </div>
      <div className="flex flex-col gap-y-2 p-4 md:w-2/5 md:flex-auto">
        <h1 className="pb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
          {name}
        </h1>
        <p className="text-slate-600 dark:text-slate-300 pb-8">{description}</p>
        <div className="flex flex-row items-center justify-between">
          <CountInput count={count} onChange={setCount} />
          <p className="text-2xl font-semibold text-slate-800 dark:text-white">
            {price*count}$
          </p>
        </div>
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
