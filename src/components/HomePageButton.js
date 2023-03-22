import { useNavigate } from "react-router-dom";

export default function Button(props) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate ("/Jobs")
  }

  return (
          <div className="text-center">
            <button 
              onClick={clickHandler}
              type="submit" 
              className="search-button flex-none rounded-md bg-green-400 h-12 px-12 m-2 text-sm font-semibold text-blue-900 shadow-sm  hover:drop-shadow-xl hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 shadow-lg">Get Hired!
            </button>
            
          </div>
  )
}