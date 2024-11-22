import { useForm } from "react-hook-form";
import { useState } from "react";
import { createPost } from "../api/postApi";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [showInputs, setShowInputs] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setValue("image", file);
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const onFormSubmit = async (data) => {
    try {
      await createPost(data.title, data.description, data.image);

      reset();
      setShowInputs(false);
      setSelectedImage(null);
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className=" p-6 rounded-lg shadow-md flex gap-10"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Create Post</h2>

          <div className="mb-4">
            {!selectedImage && (
              <>
                <label className="block text-white font-medium mb-2">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image", { required: "Image is required" })}
                  className="rounded-lg py-2"
                  onChange={handleImageSelect}
                />
              </>
            )}
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
            {selectedImage && (
              <div className="mt-4">
                {selectedImage && !showInputs && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setShowInputs(true)}
                      className="my-3 text-blue-500 border px-2 py-1 rounded-md border-blue-500"
                    >
                      Next
                    </button>
                  </div>
                )}
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="h-80 w-80 rounded-lg object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {showInputs && (
          <div className="mt-4 w-full">
            <div className="gap-4">
              <div className="col-span-1">
                <div className="mb-4">
                  <label className="block text-white font-medium mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("title", { required: "Title is required" })}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.title.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-white font-medium mb-2">
                    Description
                  </label>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                    })}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
