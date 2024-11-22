import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, updatePost } from "../api/postApi";

const EditPost = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await updatePost(id, data);

      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const data = await getPostById(id);
        setImageData(data.image);

        setValue("title", data.title);
        setValue("description", data.description);
      } catch (error) {
        console.error("Failed to fetch post data:", error);
      }
    };

    fetchPostData();
  }, [id, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="image-container">
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}${imageData}`}
          alt="Uploaded"
          className="w-64 h-64 object-cover"
        />
      </div>

      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          {...register("title")}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter title"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description")}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter description"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default EditPost;
