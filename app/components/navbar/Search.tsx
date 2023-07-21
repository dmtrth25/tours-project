"use client"

import { FiSearch } from "react-icons/fi"

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-3 rounded-full shadow-sm hover:shadow-sm transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm px-6 font-semibold">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Any Week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-700 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="rounded-full p-2 bg-green-500 text-white">
            <FiSearch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
