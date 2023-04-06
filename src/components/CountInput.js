import { FaPlus, FaMinus } from "react-icons/fa";

function CountInput({ count, onChange }) {
  const increment = () => onChange(count + 1);
  const decrement = () => onChange(count - 1);

  return (
    <div className="flex items-center justify-between">
      <label htmlFor="Quantity" className="dark:text-white">
        Quantity:
      </label>
      <div className="flex h-8 items-center">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-200 text-violet-700 transition hover:bg-violet-300 active:bg-violet-700 active:text-white dark:bg-opacity-80"
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
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-200 text-violet-700 transition hover:bg-violet-300 active:bg-violet-700 active:text-white dark:bg-opacity-80"
          onClick={increment}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default CountInput;
