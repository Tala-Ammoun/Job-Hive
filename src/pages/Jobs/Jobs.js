import React from 'react'
import Card from './Card'

function Jobs() {
    const jobSearchResults = [
        {
          id: "e1",
          title: "React Native Frontend Developer",
          company_name: "Bloom: Career Coaching",
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXBOrhMT6OB8jCvqFdsRIonZVW8g6iEw3hmk7Z9g&s"
        },
        {
          id: "e2",
          title: "React Native Frontend Developer",
          company_name: "Bloom: Career Coaching",
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXBOrhMT6OB8jCvqFdsRIonZVW8g6iEw3hmk7Z9g&s"
        },
        {
          id: "e3",
          title: "React Native Frontend Developer",
          company_name: "Bloom: Career Coaching",
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXBOrhMT6OB8jCvqFdsRIonZVW8g6iEw3hmk7Z9g&s"
        },
        
      ];
    
  return (
    <div>
      <Card jobs={jobSearchResults}/>
    </div>
  )
}

export default Jobs
