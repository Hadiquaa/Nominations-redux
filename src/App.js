import logo from './logo.svg';
import './App.css';
import SearchComponent from './Components/SearchComponent';
import ResultComponent from './Components/ResultComponent';
import Nominations from './Components/Nominations';
import { useState,useEffect } from 'react';

function App() {
const [searchTitle, setSearchTitle] = useState(null);
const [movies, setMovies] = useState([]);
const API_URL = `https://www.omdbapi.com/?apikey=1bee52d4&s=${searchTitle}&type=movie&page=1`;

async function fetchMovies(){
  try {
    if( searchTitle){
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data.Search);
      setMovies(data.Search);
    }

  } catch (error) {
    console.log(error);
    setMovies([]);
  }
}

useEffect(() => {
  fetchMovies();
}, [searchTitle]);

console.log(searchTitle);

  return (
    <div className="flex justify-center items-center bg-gray-200 min-h-screen">
      <div className="flex flex-col max-w-6xl mx-auto mt-[7rem] mb-8 gap-y-8 min-h-screen">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">Hi There!</h1>
          <p className="text-xl ">
            Its that time of the year to choose your{" "}
            <span className="text-green-600 font-semibold">Shoppies</span>{" "}
            nominations 🍿
          </p>
        </div>
        <div>
          <p className="text-lg ">
            Select your <span className="font-semibold">TOP 5</span> movies of
            the year using the search bar below, use the{" "}
            <span className="text-green-600 font-semibold">Save</span> button to
            save your choices!
          </p>
        </div>
        <div className="flex w-full gap-4">
          <div className="w-3/5 flex flex-col gap-6">
            <SearchComponent setSearchTitle={setSearchTitle} />
            <ResultComponent searchTitle={searchTitle} movies={movies} />
          </div>
          <div className="flex flex-col justify-between ]">
            <Nominations />
            <div className="flex gap-6 self-end">
              <button
                className="text-green-600 font-bold text-lg"
                
              >
                Reset
              </button>
              <button
                className="px-3 py-1 text-white text-center font-semibold bg-green-600 rounded-full"
                
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
