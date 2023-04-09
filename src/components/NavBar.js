import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar({cartCount}) {
  return (
    <header className="sticky top-0 shadow-md bg-slate-950">
      <nav className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
        <Link
          to="/"
          className="bg-gradient-to-r from-purple-500 to-emerald-400 bg-clip-text text-3xl font-extrabold text-transparent"
        >
          GameShop
        </Link>
        <Link
          to="/shop"
          className="text-2xl font-bold text-white transition-all hover:scale-110 hover:text-violet-600 "
        >
          Shop
        </Link>
        <Link
          to="/cart"
          className="relative text-2xl font-bold text-white transition-all hover:scale-110 hover:text-violet-600 "
        >
          <span className="absolute -right-2 -top-2 w-4 h-4 text-center leading-none text-sm bg-emerald-300 text-emerald-900 rounded-full">{cartCount}</span>
          <FaShoppingCart />
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;