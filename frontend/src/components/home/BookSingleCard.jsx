import React from 'react'
import { Link } from "react-router-dom"
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import BookModel from "./BookModel";

const BookSingleCard = ({ book }) => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div
      key={book._id}
      className="
        w-full max-w-sm
        border border-gray-200
        rounded-2xl
        px-5 py-4
        relative
        bg-white
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Year badge */}
      <h2 className="absolute top-3 right-3 px-3 py-1 bg-red-400 text-white text-xs font-semibold rounded-full shadow">
        {book.publishYear}
      </h2>

      {/* ID */}
      <h4 className="my-2 text-[11px] text-gray-400 break-all">
        {book._id}
      </h4>

      {/* Title */}
      <div className="flex items-center gap-x-2 mt-2">
        <PiBookOpenTextLight className="text-red-500 text-2xl" />
        <h2 className="font-semibold text-gray-800 line-clamp-1">
          {book.title}
        </h2>
      </div>

      {/* Author */}
      <div className="flex items-center gap-x-2 mt-1">
        <BiUserCircle className="text-red-500 text-2xl" />
        <h2 className="text-gray-600 line-clamp-1">
          {book.author}
        </h2>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-5 px-2">
        <BiShow
          className="text-2xl text-blue-600 hover:text-black cursor-pointer transition-colors"
          onClick={() => setShowModel(true)}
        />

        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-600 hover:text-black transition-colors" />
        </Link>

        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-black transition-colors" />
        </Link>

        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-500 hover:text-black transition-colors" />
        </Link>
      </div>
      {showModel && (
        <BookModel book={book} onClose={() => setShowModel(false)} />
      )}
    </div>
  )
}

export default BookSingleCard
