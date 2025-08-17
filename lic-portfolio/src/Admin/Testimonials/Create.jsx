import React, { useState } from "react";

function Create() {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    featured_image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "featured_image") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    alert("✅ Testimonial Created Successfully!");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create Testimonial</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side - Name & Content */}
        <div className="md:col-span-2">
          <div className="bg-white shadow rounded-lg border border-gray-200">
            <div className="px-6 py-3 border-b bg-[#2563EB] rounded-t-lg">
              <h3 className="font-semibold text-white">Testimonial Info</h3>
            </div>
            <div className="p-6 space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                  required
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write testimonial content..."
                  rows="6"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Featured Image Card */}
          <div className="bg-white shadow rounded-lg border border-gray-200">
            <div className="px-6 py-3 border-b bg-[#2563EB] rounded-t-lg">
              <h3 className="font-semibold text-white">Featured Image</h3>
            </div>
            <div className="p-6">
              <input
                type="file"
                name="featured_image"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-sm text-gray-600 border rounded-lg cursor-pointer focus:outline-none"
              />
              {formData.featured_image && (
                <img
                  src={URL.createObjectURL(formData.featured_image)}
                  alt="Preview"
                  className="mt-3 h-32 w-full rounded-lg object-cover border"
                />
              )}
            </div>
          </div>

          {/* Submit Card */}
          <div className="bg-white shadow rounded-lg border border-gray-200">
            <div className="px-6 py-3 border-b bg-[#2563EB] rounded-t-lg">
              <h3 className="font-semibold text-white">Actions</h3>
            </div>
            <div className="p-6 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 shadow-md w-full"
              >
                Create Testimonial
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
