import React from 'react'
import Jobs from './Jobs'
// import SearchResults from '../SearchResults.json'
import SearchBar from '../../components/SearchBar'
import jobTest from  '../../test'


function JobsSearch() {
    console.log(jobTest)
    
    
  return (
    <div>
       <SearchBar/>
      {jobTest.jobs_results.map((job,i)=>{
          return(<div key={i}> <Jobs title={job.title} company_name={job.company_name} thumbnail={job.thumbnail} key={job.id} id={i}/>
                       
          </div>)
                 

      })}
      
    </div>
  )
}

export default JobsSearch

