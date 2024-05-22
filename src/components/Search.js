import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSuggestions,
  setCache,
  setQuery,
  setSuggestion,
} from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector((store) => store.search.query);
  const suggestions = useSelector((store) => store.search.suggestions);
  const showSuggestion = useSelector((store) => store.search.showSuggestion);
  const cache = useSelector((store) => store.search.cache);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[query]) {
        dispatch(addSuggestions(cache[query]));
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) dispatch(setSuggestion(false));
      else dispatch(setSuggestion(true));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + query);
    const json = await response.json();
    dispatch(addSuggestions(json[1]));
    dispatch(setCache({ [query]: json[1] }));
  };

  const searchVideo = (search) => {};

  return (
    <div className="col-span-10 ml-48">
      <input
        type="text"
        className="border border-gray-400 rounded-l-full w-1/2 p-2 px-5"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
        onFocus={() => dispatch(setSuggestion(true))}
        onBlur={() => dispatch(setSuggestion(false))}
      />
      {showSuggestion && (
        <ul className="fixed bg-white w-1/3 rounded-lg border border-gray-200 ">
          {suggestions &&
            suggestions.map((s) => (
              <li className="py-2 px-4" key={s} onClick={() => searchVideo(s)}>
                {s}
              </li>
            ))}
        </ul>
      )}
      <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-200">
        🔍
      </button>
    </div>
  );
};

export default Search;
