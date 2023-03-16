
export default function Home() {
  return (
     <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              BHive 
            </h1>
            <h2 className="mt-6 text-lg leading-8 text-gray-600">
            Apply everywhere all at once!!
            </h2>
            <div class="mt-6 flex max-w-md gap-x-4">
              <label for="job-title" class="sr-only">Job title</label>
              <input id="job-title" name="job" type="input" class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="What Job are you looking for?"/>
              <button type="submit" class="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Get Hired!</button>
            </div>
          </div>
        </div>
       </div>
     </div>
  )
}

