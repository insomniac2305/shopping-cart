import { Link } from "react-router-dom";
import MainImage from "../images/home.png";

function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <header className="shadow-md dark:bg-slate-950">
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
      <main className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center lg:flex-row">
        <img className="lg:order-2" src={MainImage} alt="Controller" />
        <section className="grid">
          <h2 className="p-x-4 text-center text-3xl font-bold text-white sm:text-5xl">
            Get in the game!
          </h2>
          <p className="p-6 text-center text-lg text-white sm:text-2xl">
            Grab your favorite games at the best prices
          </p>
          <div className="flex justify-center">
            <Link
              to="/shop"
              className="rounded-full bg-violet-600 p-4 text-lg font-bold text-white transition-colors hover:bg-violet-500 active:bg-violet-700"
            >
              Right here
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
