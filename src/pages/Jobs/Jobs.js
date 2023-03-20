import React from 'react'

import{useNavigate} from 'react-router-dom'


function Jobs(props) {
  const navigate=useNavigate()

  const clickHandler=()=>{navigate("/Jobs/"+props.id)

}
  
  
  
  return (
    <div>
     
     < div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.job.employer_logo} alt="Icon"/>
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
      {props.job.job_title} 
      </p>
      <p className="text-slate-500 font-medium">
        {props.employer_name}
      </p>
    </div>
    <button onClick={clickHandler} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">More information </button>
  </div>
</div>
​

    </div>
  )
}

export default Jobs
