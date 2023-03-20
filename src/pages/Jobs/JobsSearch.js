import React, { useState } from "react";
import Jobs from "./Jobs";


function JobsSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleFetchJobs() {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2a8fd49437mshbdf1ea1b79875a2p1a77e9jsn52c0b56f707a",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    fetch(
      `https://jsearch.p.rapidapi.com/search?query=${searchTerm}&page=1&num_pages=5`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSearchResults(response.data);
        setIsLoading(false);
        localStorage.setItem("searchResults", JSON.stringify(response.data));
        // console.log(response.data)
      })
      .catch((err) => console.error(err));
    console.log(searchResults);
  }

  const [searchResults, setSearchResults] = useState(
    JSON.parse(localStorage.getItem("searchResults")) || []
  );
  console.log(searchResults);
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div>
      <div className="search">
        <div className="search-input mt-6 flex max-w-md gap-x-4">
          <label htmlFor="job-title" className="sr-only">
            Job title
          </label>
          <input
            id="job-title"
            name="job"
            value={searchTerm}
            type="input"
            onChange={handleInputChange}
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="What Job are you looking for?"
          />
          <button
            type="submit"
            onClick={handleFetchJobs}
            className="search-button flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Get Hired!
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setCurrentPage(currentPage -1)}
          >
            Prev  5
          </button>
          
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next 5
          </button>
        </div>
      </div>

      {/* Null check for searchResults.data */}
      {searchResults &&
        searchResults
          .slice((currentPage - 1) * 5, currentPage * 5)
          .map((jobsList, i) => {
            console.log(jobsList);
            return (
              <div key={i}>
                <Jobs job={jobsList} id={i} />
              </div>
            );
          })}
          {searchResults.length <= currentPage * 5 && (
          <p className="text-center text-orange-700 font-bold mt-4">
           No more Results to display.
          </p>
       )}
    </div>
  );
}

export default JobsSearch;
