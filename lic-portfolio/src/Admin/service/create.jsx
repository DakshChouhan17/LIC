import React, { useState } from "react";
import JoditEditor from "jodit-react";

function CreateService() {
  const [initialValue, setInitialValue] = useState({
    title: "",
    short: "",
    long: "",
    featured_image: "",
    gallery: [],
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInitialValue((prev) => ({
        ...prev,
        featured_image: URL.createObjectURL(file),
      }));
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setInitialValue((prev) => ({
      ...prev,
      gallery: [...prev.gallery, ...urls],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Data:", initialValue);
    // API call here
  };

  const handleCancel = () => {
    setInitialValue({
      title: "",
      short: "",
      long: "",
      featured_image: "",
      gallery: [],
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Create Service</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Title, Short, Long */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow-md rounded-xl">
            <div className="bg-blue-600 text-white py-2 px-4 rounded-t-xl font-semibold">
              Service Details
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={initialValue.title}
                  onChange={(e) =>
                    setInitialValue((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter service title"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Short Description
                </label>
                <textarea
                  value={initialValue.short}
                  onChange={(e) =>
                    setInitialValue((prev) => ({ ...prev, short: e.target.value }))
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter short description"
                  rows={3}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Long Description
                </label>
                <JoditEditor
                  value={initialValue.long}
                  onChange={(newContent) =>
                    setInitialValue((prev) => ({ ...prev, long: newContent }))
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Featured Image, Gallery, Submit */}
        <div className="space-y-6">
          {/* Submit & Cancel */}
          <div className="bg-white shadow-md rounded-xl">
            <div className="bg-blue-600 text-white py-2 px-4 rounded-t-xl font-semibold">
              Actions
            </div>
            <div className="p-6 flex justify-between">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white shadow-md rounded-xl">
            <div className="bg-blue-600 text-white py-2 px-4 rounded-t-xl font-semibold">
              Featured Image
            </div>
            <div className="p-6">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
              />
              {initialValue.featured_image && (
                <img
                  src={initialValue.featured_image}
                  alt="Featured Preview"
                  className="w-full h-40 object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Gallery */}
          <div className="bg-white shadow-md rounded-xl">
            <div className="bg-blue-600 text-white py-2 px-4 rounded-t-xl font-semibold">
              Gallery
            </div>
            <div className="p-6">
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleGalleryChange}
                className="mb-4"
              />

              <div className="grid grid-cols-2 gap-3">
                {initialValue.gallery.map((file, index) =>
                  file.includes("video") ? (
                    <video
                      key={index}
                      src={file}
                      controls
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      key={index}
                      src={file}
                      alt="Gallery Preview"
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateService;
