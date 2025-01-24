import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NomineeTab from './NomineeTab';

const Nominations = () => {
    const nominations = useSelector(state => state.nominations.list);
    

   
  return (
    <div className="bg-white border rounded-md shadow-md w-full py-6 px-4 flex flex-col gap-7">
      {nominations.length > 0 ? (
        <div>
            <h2>Your nominations</h2>
            <p>click on amovie title to learn more</p>
            <div>
                {nominations.map((movie) => 
                   
                       <NomineeTab key={movie.imdbID} movie={movie}/>
                )}
            </div>
        </div>
      ) : (
        <div className="text-xl font-bold">Your Nominations are empty!</div>
      )}
    </div>
  );
}

export default Nominations