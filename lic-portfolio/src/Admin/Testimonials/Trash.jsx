import React, { useState, useEffect } from "react";
import { FiRefreshCcw, FiTrash2 } from "react-icons/fi";

function Trash() {
  const [trash, setTrash] = useState([]);

  useEffect(() => {
    // Dummy data for demo
    setTrash([
      {
        id: 1,
        name: "Rahul Sharma",
        feedback: "Great service and fast support!",
        date: "2025-08-10",
      },
      {
        id: 2,
        name: "Anjali Gupta",
        feedback: "Very professional and reliable team.",
        date: "2025-08-08",
      },
    ]);
  }, []);

  // Restore item
  const handleRestore = (id) => {
    if (window.confirm("Do you want to restore this testimonial?")) {
      setTrash(trash.filter((item) => item.id !== id));
    }
  };

  // Permanently delete
  const handleDelete = (id) => {
    if (window.confirm("Do you want to permanently delete this testimonial?")) {
      setTrash(trash.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Trash Testimonials</h2>
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Feedback</th>
              <th className="px-6 py-3">Deleted Date</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {trash.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 font-semibold">{item.name}</td>
                <td className="px-6 py-3 text-gray-600">{item.feedback}</td>
                <td className="px-6 py-3">{item.date}</td>
                <td className="px-6 py-3 text-center flex justify-center gap-3">
                  <button
                    className="text-green-600 hover:text-green-800"
                    onClick={() => handleRestore(item.id)}
                  >
                    <FiRefreshCcw size={18} />
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

            {trash.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  Trash is empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Trash;
