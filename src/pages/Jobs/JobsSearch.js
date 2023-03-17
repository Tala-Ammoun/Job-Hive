import React from 'react'
import Jobs from './Jobs'
import SearchResults from '../SearchResults.json'


function JobsSearch() {
    
    
  return (
    <div>
      {SearchResults.map((job)=>{
          return(<div> <Jobs title={job.title} company_name={job.company_name} thumbnail={job.thumbnail} id={job.id}/>
                       
          </div>)
                 

      })}
      
    </div>
  )
}

export default JobsSearch

