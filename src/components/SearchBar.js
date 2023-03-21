import { useState } from "react";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("API")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };     

  return (
  <div className="search">
    <div className="search-input mt-6 flex max-w-md gap-x-4 mx-auto mb-6">
     <label htmlFor="job-title" className="sr-only  place-content-center">Job title</label>
     <input id="job-title" name="job" value={input} type="input" onChange={(e) => handleChange(e.target.value)} className="min-w-0 flex-auto rounded-md border-2 border-slate-300 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-lime-300 sm:text-sm sm:leading-6" placeholder="What Job are you looking for?"/>
     <button type="submit" className="search-button flex-none rounded-md bg-green-400 py-2.5 px-3.5 text-sm font-semibold text-blue-900 shadow-sm  hover:drop-shadow-xl hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 shadow-lg">Get Hired!</button>
   </div>
  </div>
  );
};

export default SearchBar;