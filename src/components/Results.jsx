import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

import { useResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
  const { getResults, results, isLoading, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults(`q=${searchTerm}&num=30`);
  }, [searchTerm]);
  useEffect(() => {
    getResults;
  });

  if (isLoading) return <Loading />;
  console.log(location.pathname);

  switch (location.pathname) {
    case "/":
      return (
        <div className="flex flex-row justify-center">
          <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
            {results?.data?.map(({ title, snippet, url }, index) => (
              <div key={index} className="md:w-4/5 w-full">
                <a href={url} target="_blank" rel="noreferrer">
                  <p className="text-sm">
                    {url.length > 30 ? url.substring(0, 30) : url}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-400 text-blue-800">
                    {title}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-500">{snippet}</p>
                </a>
              </div>
            ))}
          </div>
          <div>
            <div>
              <h2>{results?.knowledge_panel?.name}</h2>
            </div>
          </div>
        </div>
      );
  }
};

export default Results;
