import React, { useState, useEffect } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function All() {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTestimonials([
      {
        id: 1,
        name: "John Doe",
        message: "This service is excellent, I really enjoyed working with them!",
        image: "https://via.placeholder.com/80",
        date: "2025-08-17",
      },
      {
        id: 2,
        name: "Jane Smith",
        message: "Very professional and on-time delivery.",
        image: "https://via.placeholder.com/80",
        date: "2025-08-16",
      },
    ]);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this testimonial?")) {
      setTestimonials(testimonials.filter((item) => item.id !== id));
    }
  };

  const handleNavigate = (id) => {
    navigate(`/admin/dashboard/testimonials/edit/${id}`);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Testimonials List</h2>
        <button
          onClick={() => {
            navigate(`/admin/dashboard/testimonials/create`);
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          <FiPlus /> Add New Testimonial
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {testimonials.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover border"
                  />
                </td>
                <td className="px-6 py-3 font-semibold">{item.name}</td>
                <td className="px-6 py-3 text-gray-600">{item.message}</td>
                <td className="px-6 py-3">{item.date}</td>
                <td className="px-6 py-3 text-center flex justify-center gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      handleNavigate(item.id);
                    }}
                  >
                    <FiEdit size={18} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {testimonials.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No testimonials found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default All;
