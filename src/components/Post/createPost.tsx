import { useState } from "react";
import { Image, X } from "lucide-react";

const CreatePost = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto mt-4">
      <div className="space-y-4">
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-4 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
        />

        {imagePreview ? (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="rounded-lg max-h-96 w-full object-cover"
            />
            <button
              onClick={() => setImagePreview(null)}
              className="absolute top-2 right-2 p-1 bg-gray-800 rounded-full text-white hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <label className="cursor-pointer flex items-center space-x-2 text-gray-600 hover:text-gray-800">
              <Image className="w-6 h-6" />
              <span>Add Photo</span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImagePreview(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </label>
          </div>
        )}

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
