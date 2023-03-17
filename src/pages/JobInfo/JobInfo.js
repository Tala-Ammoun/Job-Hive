import React from 'react'
import SearchResults from '../SearchResults.json'
import {useParams} from 'react-router-dom'

function JobInfo() {
  const {id}=useParams();
  const job=SearchResults[id]
  console.log(job)
  return (
    <div className="bg-gray-100">
       <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" src={job.thumbnail} alt="Thumbnail"/>
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{job.title}</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Front End Developer</a>
        <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Apply Now</button>
      </div>
    </div>
  </div>
      
    </div>
  )
}

export default JobInfo
