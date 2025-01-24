import React from 'react'
import MovieTab from './MovieTab';

const ResultComponent = (props) => {
    const { searchTitle, movies} =props
  return (
    <div className="bg-white border rounded-md shadow-md w-full py-6 px-4 flex flex-col gap-7">
      {searchTitle ? (
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl font-bold'> Search Results for "{searchTitle}" </h2>
          <p className='text-lg '>Click on a movie title to learn more</p>
          <div>
            { movies.length > 0 ? (
              <div className="flex flex-col gap-6">
                {movies.map((movie) => (
                  <MovieTab key={movie.imdbID} movie={movie} />
                ))}
              </div>
            ) : (
              <div>No Movies Found</div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-xl font-semibold">
          Search results will appear here
        </div>
      )}
    </div>
  );
}

export default ResultComponent