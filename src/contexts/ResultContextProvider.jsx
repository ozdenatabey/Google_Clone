import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://real-time-web-search.p.rapidapi.com/search-advanced?";

// eslint-disable-next-line react/prop-types
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // /web, /images, /videos, ...
  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "20989dcbe7mshaa360e3218e30b5p1e12e3jsn6a21f00a7e3c",
        "x-rapidapi-host": "real-time-web-search.p.rapidapi.com",
      },
    });

    const data = await response.json();

    console.log(data);

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        isLoading,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useResultContext = () => useContext(ResultContext);
