import { Link } from "react-router-dom";
import Search from "./Search";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap justify-center items-center border-b border-zinc-300 dark:border-zinc-700 sm:justify-between">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-orange-600 text-white px-2 py-1 font-bold rounded-lg dark:bg-neutral-500 dark:text-neutral-900">
            Arda 🔎
          </p>
        </Link>
        <button
          className="rounded-full bg-neutral-50 text-neutral-900 border border-neutral-900 hover:shadow-xl dark:bg-neutral-700 dark:text-neutral-200 dark:border-neutral-200 px-3 py-1"
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "Dark 🌙" : "Light ☀️"}
        </button>
      </div>
      <Search />
    </div>
  );
};
