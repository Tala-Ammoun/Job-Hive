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
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={job.employer_logo}
              alt="Thumbnail"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {job.job_title}
            </div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              <a
                href={job.employer_website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.employer_name}
              </a>
            </div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {job.job_city}
            </div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {job.via}
            </div>

            <p className="mt-2 text-gray-500">{job.job_description}</p>
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
