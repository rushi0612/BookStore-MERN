import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { use } from "react";

const DeleteBook = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [bookTitle, setBookTitle] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/books/${id}`)
      .then((response) => {
         setBookTitle(response.data.title);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [id]);

  const DeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      }).catch((error) => {
        setLoading(false);
        alert('An error happened while deleting the book');
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col item-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
        <p className="text-center text-lg font-bold text-red-500 mt-4 mb-6">
      “{bookTitle}”
    </p>
        <button className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={DeleteBook}
        >
          Yes, Delete it
        </button>
      </div>

    </div>
  )
}

export default DeleteBook