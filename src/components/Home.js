import { Link } from "react-router-dom";
import MainImage from "../images/home.png";

function Home() {
  return (
    <div className="flex-1 bg-emerald-100 pb-5 dark:bg-gray-900">
      <main className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center lg:flex-row">
        <img className="lg:order-2" src={MainImage} alt="Controller" />
        <section className="grid">
          <h2 className="p-x-4 text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Get in the game!
          </h2>
          <p className="p-6 text-center text-lg text-slate-900 dark:text-white sm:text-2xl">
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
