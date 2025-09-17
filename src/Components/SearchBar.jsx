import React, { useState } from "react";
import {Search, X} from "lucide-react";
import BookCard from "./BookCard";
const SearchBar = ({results,setResults}) => {
  const[query,setQuery] =useState("");
 // const[results,setResults]=useState([]);
  const[isLoading,setIsLoading]=useState(false);
  const handleClear=()=>{
    setQuery("");
    setResults([]);
  };
  const handleSearch= async()=>{
    if(!query.trim()) return;
    setIsLoading(true);
    try{
      const res=await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
    );
      const data=await res.json();
      setResults(data.docs || []);
    }catch(err){
      console.error(err);
      setResults([]);
    }
    setIsLoading(false);
  };
  return (
    <>
      <div className=" mx-auto flex flex-col  items-center mt-[90px]  sm:px-6">
        <div className="text-center space-y-6">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
          <div className=" flex flex-col justify-center items-center md:items-start text-center md:text-left  ">
          <h1 className=" font-nunito font-bold text-4xl sm:text-5xl text-[#04a4b3] text-outline ">
            BOOK FINDER
          </h1>
          <p className=" mt-4 sm:mt-6 font-nunito  text-[16px] sm:text-[19px] text-[#97570d] ">
           <span className=" text-[20px] sm:text-[25px] font-semibold text-[#3a3838]">Read. Discover. Repeat. </span><br /> You're at the right place to explore stories that inspire, knowledge that empowers, 
           and imagination that takes you beyond limits.
          </p>
          </div>
          <div className="w-full sm:w-[300px] md:w-[470px] h-auto mt-2 lg:20">
            <img src="https://ik.imagekit.io/hb9mevpzq/BOOK%20FINDER/imagemain.png?updatedAt=1757837362348" alt="landing img" />
          </div>

          </div>
          
          <div className="flex flex-col sm:flex-row w-full max-w-2xl gap-7 mx-auto ">
            <div className="relative w-full">

            <input
              className="w-full outline-none  focus:ring-0 py-2  px-9 rounded-xl "
              type="text"
              placeholder="Search book here..."
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
            />
            {/*Search Icon*/}
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            {/*Clear button*/}
            {query && (
              <button   onClick={handleClear} className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full hover:bg-gray-200">
              <X className="h-4 w-4 text-gray-600" />
              </button>
            )}
            {/*Search Icon*/}
          </div>
          <button onClick={handleSearch} className="px-5 py-2 bg-[#386586] text-white font-semibold rounded-xl hover:bg-[#038896] transition duration-300 shadow-lg">
            Search
          </button>
          </div>
          
        </div>
        {/*Display results*/}
        <div>

        <div className="mt-6 w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 ">
          {isLoading && <p>Loading...</p>}
          {!isLoading && results.length === 0 && query && (
            <p className="text-gray-200 text-center font-semibold text-[24px]">No books found</p>
        )}
        {
          results.slice(0,6).map((book)=>(
            <BookCard key={book.key} book={book} />
          ))
        }

        </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
