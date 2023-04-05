import { FaPlus, FaMinus } from "react-icons/fa";

function CountInput({ count, onChange }) {
  const increment = () => onChange(count + 1);
  const decrement = () => onChange(count - 1);

  return (
    <div className="flex h-8 items-center">
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-500 active:bg-violet-700"
        onClick={decrement}
      >
        <FaMinus />
      </button>

      <input
        type="number"
        id="Quantity"
        value={count}
        onChange={(e) => onChange(e.target.value)}
        max="99"
        className="h-8 w-8 bg-transparent text-center font-semibold [-moz-appearance:_textfield] dark:text-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
      />

      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-500 active:bg-violet-700"
        onClick={increment}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default CountInput;
