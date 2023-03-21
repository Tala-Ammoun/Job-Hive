import React from "react";
// import SearchResults from '../SearchResults.json'
import { useParams } from "react-router-dom";
// import jobTest from  '../../test'

function JobInfo() {
  const { id } = useParams();
  const jobs = JSON.parse(localStorage.getItem("searchResults")) || [];
  console.log(jobs);
  const job = jobs[id];

  return (
    <div className="bg-gray-100">
      <div className="max-w-md mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
          {job.employer_logo ?
            <img
              className="h-48 w-full object-cover md:w-48"
              src={job.employer_logo}
              alt="Thumbnail"
            />
            :
            <div className="h-48 w-full md:w-48 bg-orange-300 flex justify-center items-center text-blue-500 text-9xl font-bold">
      {job.employer_name.charAt(0)}
    </div>
  }
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black-500 text-5xl font-semibold">
              {job.job_title}
            </div>
            <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
              <a
                href={job.employer_website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.employer_name}
              </a>
            </div>
            <div className="uppercase tracking-wide text-sm text-black-500 font-semibold">
              {job.job_city}
            </div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {job.job_publisher}
            </div>

            <p className="mt-2 text-black">{job.job_description}</p>
            <a
              href={job.job_apply_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobInfo;
