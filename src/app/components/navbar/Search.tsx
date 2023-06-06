'use client';

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-3 rounded-full shadow-sm hover:shadow-sm transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm px-6 font-semibold">Item 1</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Item 2
        </div>
      </div>
    </div>
  );
};

export default Search;
