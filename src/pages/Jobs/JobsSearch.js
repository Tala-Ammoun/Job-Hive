import React from 'react'
import Jobs from './Jobs'
import SearchResults from '../SearchResults.json'


function JobsSearch() {
    const jobSearchResults = [
        {
          id: "e1",
          title: "React Native Frontend Developer",
          company_name: "Bloom: Career Coaching",
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXBOrhMT6OB8jCvqFdsRIonZVW8g6iEw3hmk7Z9g&s"
        },
        {
          id: "e2",
          title: "Front End Developer Vue.JS",
          company_name: "CX2 TALENT SOLUTIONS LIMITED",
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuWJgXt4Ae7aYUa79Yg56gMRZXvv8rqrzqyjpocw&s"
        },
        {
          id: "e3",
          title: "Senior Front End Developer - React",
          company_name: "Spectrum IT Recruitment",
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR972oEKxq58dtlYYDdePj6n4U5Y9ER392W4HJlke8&s"
        },
        
      ];
    
  return (
    <div>
      {SearchResults.map((job)=>{
          return(<div> <Jobs title={job.title} company_name={job.company_name} thumbnail={job.thumbnail} key={job.id}/>
                       
          </div>)
                 

      })}
      
    </div>
  )
}

export default JobsSearch

