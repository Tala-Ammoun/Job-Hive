import React from "react";

import { useNavigate } from "react-router-dom";

function Jobs(props) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/Jobs/" + props.id);
  };

  return (
    <div className="flex flex-row flex-wrap py-14 justify-center">
      <div className=" py-8 px-8 max-w-sm mx-auto bg-amber-100 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-96 h-50">
        <div className="thumbnail ">
          {props.job.employer_logo ? (
            <img
              className="h-35 w-full object-cover md:w-35"
              src={props.job.employer_logo}
              alt="Thumbnail"
            />
          ) : (
            <div className="h-35 w-full md:w-35  flex justify-center items-center text-blue-500 text-5xl font-bold bg-gray-300">
              {props.job.employer_name.charAt(0)}
            </div>
          )}
        </div>

        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {props.job.job_title}
            </p>
            <p className="text-slate-500 font-medium">
              {props.job.employer_name}
            </p>
          </div>
          <button
            onClick={clickHandler}
            className="inset-x-0 bottom-0 h-14 px-4 py-1 text-sm text-indigo-900 font-semibold bg-amber-400 rounded-md border  hover:text-amber-200 hover:bg-indigo-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2"
          >
            More information
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
