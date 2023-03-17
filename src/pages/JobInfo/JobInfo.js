import React from 'react'
import SearchResults from '../SearchResults.json'
import {useParams} from 'react-router-dom'

function JobInfo() {
  const {id}=useParams();
  const job=SearchResults[id]
  console.log(job)
  return (
    <div className="bg-gray-100">
       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src={job.thumbnail} alt="Thumbnail"/>
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{job.title}</div>
       
        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Apply Now</button>
      </div>
    </div>
  </div>
      
    </div>
  )
}

export default JobInfo
