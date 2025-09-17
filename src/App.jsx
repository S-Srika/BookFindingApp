import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import LatestBooks from "./Components/LatestBooks";

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <div className="2xl:container mx-auto relative min-h-screen bg-gradient-to-br from-[#dfd9e2] via-[#c3acce] to-[#7c617e]   ">
        <div className=" absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/9 pointer-events-none "></div>
        <Header />
        <div className="relative z-10 w-[90%] mx-auto ">
          <Routes>
            <Route
              path="/"
              element={<SearchBar results={results} setResults={setResults} />}
            />
            <Route path="/categories" element={<LatestBooks />} />

            {/* About route */}
            <Route
              path="/about"
              element={
                <div className="mt-20 p-10 bg-white rounded-xl shadow-md">
                  <h2 className="text-xl font-bold text-[#BD082B]">About</h2>
                  <p className="text-gray-700 mt-3">
                    Book Finder isn’t just another search tool — it’s your personal library companion. With a single click, discover millions of stories, knowledge treasures, and hidden gems waiting to inspire you.
                  </p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
      {results.length === 0 && <LatestBooks />}
    </>
  );
}

export default App;
