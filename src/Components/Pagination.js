import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const Pagination = () => {
  //step 3 Consuming the context
  const { page, totalPages, HandlerPageChange } = useContext(AppContext);
  return (
    <div className='fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border shadow-md w-full'>
    <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto mt-2'>
      {
        page > 1 &&
        <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => HandlerPageChange(page - 1)}>Previous</button>
      }
      {
        page < totalPages &&
        <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => HandlerPageChange(page + 1)}>Next</button>
      }

      <p className='text-sm font-semibold ml-auto'>page {page} of {totalPages}</p>
    </div>
  </div>
  );
};

export default Pagination;
