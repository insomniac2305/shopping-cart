import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 shadow-md">
      <p className="flex items-center justify-center gap-2 p-1 text-lg font-light text-white">
        Copyright &copy; 2023 insomniac2305
        <Link
          to="https://github.com/insomniac2305"
          className="transition-all hover:scale-125"
        >
          <FaGithub />
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
