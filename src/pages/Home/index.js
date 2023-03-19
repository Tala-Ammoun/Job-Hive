import SearchBar from "../../components/SearchBar";


export default function Home() {
  return (
     <div className="">
      <div className="relative isolate px-6 pt-12 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-6xl">
              BHive 
            </h1>
            <h2 className="mt-6 text-lg leading-8 text-gray-700">
            Apply everywhere all at once!!
            </h2>
            <SearchBar />
          </div>
        </div>
       </div>
     </div>
  )
}

