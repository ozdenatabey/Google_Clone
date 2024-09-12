import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import { useResultContext } from "../contexts/ResultContextProvider";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3 w-full">
      <input
        type="text"
        value={text}
        className="sm:w-96 w-full p-4 h-10 dark:bg-zinc-600 border border-zinc-500 dark:border-zinc-200 shadow-sm hover:shadow-lg rounded-full outline-none"
        placeholder="Search on web"
        onChange={(e) => setText(e.target.value)}
      />
      {!text && (
        <button
          type="button"
          className="absolute top-1.5 right-40 text-2xl text-zinc-900"
          onClick={() => setSearchTerm("")}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Search;
