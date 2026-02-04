import React, { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handelSaveBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);

    axios
      .post("http://localhost:5000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happened. Please try again!");
        enqueueSnackbar('Error', { variant: 'error' });
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <BackButton />

      <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Create Book
        </h1>

        {loading && <Spinner />}

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Publish Year */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            placeholder="e.g. 2024"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handelSaveBook}
          className="w-full bg-sky-500 text-white py-2 rounded-lg font-medium hover:bg-sky-600 transition"
        >
          Save Book
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
