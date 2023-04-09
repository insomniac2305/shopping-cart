import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import CartItem from "./CartItem";

function Cart({ items, onAdd, onRemove, onCheckout }) {
  const itemList = items.map((it) => {
    return (
      <li key={it.id}>
        <CartItem
          id={it.id}
          name={it.name}
          image={it.images[0]}
          price={it.price}
          count={it.count}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </li>
    );
  });

  const total = items
    .reduce((prev, cur) => prev + cur.price * cur.count, 0)
    .toFixed(2);

  return (
    <div className="flex flex-1 justify-center bg-emerald-50 pb-8 dark:bg-gray-900">
      {items.length > 0 && (
        <div className="flex w-full max-w-screen-xl flex-col md:flex-row md:items-start md:justify-center">
          <ul className="md:w-4/5 md:flex-auto">{itemList}</ul>
          <article className="m-4 flex flex-col rounded-lg bg-white p-2 text-slate-800 shadow-md dark:bg-slate-800 dark:text-white md:w-1/5 md:flex-auto">
            <h1 className="mb-4 text-xl font-bold tracking-tighter">Summary</h1>
            <p className="flex flex-row justify-between text-slate-600 dark:text-slate-300">
              <span>Subtotal:</span> <span>{total}$</span>
            </p>
            <p className="mb-2 flex flex-row justify-between border-b-2 border-b-slate-600 pb-4 text-slate-600 dark:text-slate-300">
              <span>Shipping:</span> <span>Free</span>
            </p>
            <h3 className="mb-4 flex flex-row justify-between text-lg font-semibold">
              <span>Total:</span> <span>{total}$</span>
            </h3>
            <Button Icon={FaShoppingCart} text="Checkout" onClick={onCheckout} />
          </article>
        </div>
      )}
      {items.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-5xl">
            Your cart is empty!
          </h1>
          <Link
            to="/shop"
            className="m-6 rounded-full bg-violet-600 p-4 text-lg font-bold text-white transition-colors hover:bg-violet-500 active:bg-violet-700"
          >
            Add some games
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
