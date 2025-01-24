import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
const SearchComponent = (props) => {
    const {setSearchTitle} = props;
    const [title,setTitle] = useState("");
    
  return (
    <div className="bg-white border rounded-md shadow-md w-full py-6 px-4 flex flex-col gap-7">
      <h2 className="font-semibold text-xl text-gray-800">Movie Title</h2>
      <div className="relative border h-[50px] flex items-center border-gray-500">
        <FaSearch className="absolute left-2 text-gray-700 " />
        <input type="text" name='title' value={title} placeholder="Star Wars : Rogue One" className="ml-10 w-full border-none outline-none"  onChange={(e) => setTitle(e.target.value)}/>
        
      </div>
      <div className='flex gap-6 self-end'>
        <button className='text-green-600 font-bold text-lg' onClick={()=>{setTitle(""); setSearchTitle("")}}>clear</button>
        <button className='px-3 py-1 text-white text-center font-semibold bg-green-600 rounded-full' onClick={()=>setSearchTitle(title)}>search</button>
      </div>
    </div>
  );
}

export default SearchComponent