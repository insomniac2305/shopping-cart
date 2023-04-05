import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="shadow-md bg-slate-950">
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
          className="text-2xl font-bold text-white transition-all hover:scale-110 hover:text-violet-600 "
        >
          Cart
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;