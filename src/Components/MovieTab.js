import React from 'react'
import toast from 'react-hot-toast';
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addNomination } from '../redux/Slices/NominationSlice';

const MovieTab = (props) => {
    const {movie} = props;
    const nominations = useSelector(state=> state.nominations.list);
    const dispatch = useDispatch();
    console.log(nominations);
    const addMovie = () => {
        if (nominations.length >= 5) {
            toast.error('Nominations limit reached. ');
            return;
        }
        // Add movie to nominations slice
        dispatch(addNomination(movie));
        toast.success('Movie added to Nomination ✓');
    }
  return (
    <div className="flex gap-4 items-center cursor-pointer">
      <div>
        {nominations.some((m) => m.imdbID === movie.imdbID) ? (
          <div className="w-6 h-6 rounded-full flex justify-center items-center text-white bg-gray-500 cursor-not-allowed">
            <FaPlus className="" />
          </div>
        ) : (
          <div
            className="w-6 h-6 rounded-full flex justify-center items-center text-white bg-green-600 cursor-pointer"
            onClick={addMovie}
          >
            <FaPlus className="" />
          </div>
        )}
      </div>
      <h2 className="text-xl font-bold">{movie.Title}</h2>
    </div>
  );
}

export default MovieTab