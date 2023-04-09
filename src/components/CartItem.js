import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import CountInput from "./CountInput";

function CartItem({ id, name, image, price, count, onAdd, onRemove }) {
  const [newCount, setNewCount] = useState(count);
  const [imgPath, setImgPath] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const loadedImg = await import(`../images/${image}`);
      setImgPath(loadedImg.default);
    };

    loadImage();
  }, [image]);

  const handleCountChange = (value) => {
    const parsedValue = parseInt(value) || 0;

    if (parsedValue === 0) {
      onRemove(id, newCount);
      return;
    }

    let countChange = parsedValue - newCount;
    setNewCount(parsedValue);

    if (countChange > 0) {
      onAdd(id, countChange);
    } else if (countChange < 0) {
      countChange *= -1;
      onRemove(id, countChange);
    }
  };

  return (
    <article className="m-4 flex flex-col md:flex-row justify-between rounded-lg bg-white shadow-md dark:bg-slate-800">
      <Link
        to={`/shop/${id.toString()}`}
        className="m-4 flex flex-col md:flex-row items-center gap-5 overflow-hidden overflow-ellipsis text-center font-bold dark:text-white"
      >
        <img
          src={imgPath}
          alt={name}
          className="h-48 rounded-lg object-cover object-top"
        />
        <h2 className="p-2">{name}</h2>
      </Link>
      <div className="flex flex-row items-center justify-between gap-5 p-2">
        <CountInput
          count={newCount}
          onChange={handleCountChange}
          min={0}
          max={99}
        />
        <h3 className="text-lg font-semibold tracking-tighter dark:text-white ">
          {(price * count).toFixed(2)}$
        </h3>
        <Button
          onClick={() => onRemove(id, newCount)}
          Icon={FaTrash}
          text="Remove"
        />
      </div>
    </article>
  );
}

export default CartItem;
