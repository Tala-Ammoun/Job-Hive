import React from "react";

import { useNavigate } from "react-router-dom";

function Jobs(props) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/Jobs/" + props.id);
  };

  return (
    <div className=" pt-6 hover:bg-slate-200">
      <div className="py-8 px-8 max-w-sm mx-auto bg-indigo-400 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="thumbnail ">
          {props.job.employer_logo ? (
            <img
              className="h-30 w-full object-cover md:w-35"
              src={props.job.employer_logo}
              alt="Thumbnail"
            />
          ) : (
            <div className="h-39 w-full md:w-35 bg-gray-300 flex justify-center items-center text-white text-xl font-bold">
              {props.job.employer_name.charAt(0)}
            </div>
          )}
        </div>
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-gray-900 font-semibold">
              {props.job.job_title}
            </p>
            <p className="text-gray-700 font-medium">
              {props.job.employer_name}
            </p>
          </div>
          <button
            onClick={clickHandler}
            className="search-button flex-none rounded-md bg-green-400 h-12 px-8 m-2 text-sm font-semibold text-blue-900 shadow-sm  hover:drop-shadow-xl hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
          >
            More information
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
