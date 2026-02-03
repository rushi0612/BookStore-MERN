import React from 'react'
import { Link } from "react-router-dom"
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
      {books.map((item) => (
        <div
          key={item._id}
          className="w-full max-w-sm border border-gray-300 rounded-xl px-4 py-3 relative hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="absolute top-2 right-2 px-3 py-1 bg-red-300 text-sm rounded-lg">
            {item.publishYear}
          </h2>

          <h4 className="my-2 text-xs text-gray-400 break-all">
            {item._id}
          </h4>

          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-400 text-2xl" />
            <h2 className="font-semibold">{item.title}</h2>
          </div>

          <div className="flex justify-start items-center gap-x-2 mt-1">
            <BiUserCircle className="text-red-400 text-2xl" />
            <h2 className="text-gray-700">{item.author}</h2>
          </div>

          <div className="flex justify-between items-center gap-x-2 mt-4 px-4">
            <Link to={`/books/details/${item._id}`}>
              <BsInfoCircle className="text-2xl text-green-700 hover:text-black transition-colors" />
            </Link>

            <Link to={`/books/edit/${item._id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black transition-colors" />
            </Link>

            <Link to={`/books/delete/${item._id}`}>
              <MdOutlineDelete className="text-2xl text-red-600 hover:text-black transition-colors" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BooksCard
