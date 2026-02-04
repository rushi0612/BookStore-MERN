import React from 'react';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';

const BookModel = ({ book, onClose }) => {
  return (
    <div className="flex bg-black bg-opacity-60 top-0 left-0  right-0 bottom-0 z-50  justify-center items-center" onClick={onClose}>
        <div 
        onClick={(event)=> event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl flex flex-column relative"
        >
            <AiOutlineClose 
            className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
            onClick={onClose}
            />
            <h2 className="w-fit  px-3 py-1 bg-red-300 text-sm rounded-lg">
                {book.publishYear}
            </h2>
            <h4 className="my-2 text-xs text-gray-400 break-all">
                {book._id}
            </h4>                
            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-red-400 text-2xl" />
                    <h2 className="font-semibold">{book.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2 mt-1">
                <BiUserCircle className="text-red-400 text-2xl" />
            <h2 className="text-gray-700">{book.author}</h2>
            </div>
        </div>
    </div>
  )
}

export default BookModel