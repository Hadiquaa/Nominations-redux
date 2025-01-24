import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { removeNomination } from "../redux/Slices/NominationSlice";
import { toast } from 'react-hot-toast';

const NomineeTab = (props) => {
    const {movie} = props;
    const dispatch = useDispatch();

    const remove = () => {
        toast.error("Nomination removed successfully");
        dispatch(removeNomination(movie.imdbID));
    }
    
  return (
    <div  className="flex gap-6 items-center">
      <div
        className=" bg-black text-white w-6 h-6 rounded-full cursor-pointer flex justify-center items-center"
        onClick={remove}
      >
        <RxCross2 />
      </div>
      <h2 className="text-xl font-bold">{movie.Title}</h2>
    </div>
  );
}

export default NomineeTab