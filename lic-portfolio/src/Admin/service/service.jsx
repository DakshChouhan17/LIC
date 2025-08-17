import React, { useState, useEffect } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Service() {
  const [services, setServices] = useState([]);
    const navigate = useNavigate()
  useEffect(() => {
    setServices([
      {
        id: 1,
        title: "Web Development",
        short: "Build responsive websites",
        featured_image: "https://via.placeholder.com/80",
        date: "2025-08-17",
      },
      {
        id: 2,
        title: "Mobile App",
        short: "Cross-platform apps",
        featured_image: "https://via.placeholder.com/80",
        date: "2025-08-16",
      },
    ]);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this service?")) {
      setServices(services.filter((service) => service.id !== id));
    }
  };

  const hanhleNavigate = (id)=>{
    navigate(`/admin/dashboard/services/edit/${id}`)
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Service List</h2>
        <button onClick={()=>{navigate(`/admin/dashboard/services/create`)}} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          <FiPlus /> Add New Service
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Featured Image</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Short Description</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-gray-50">
                <td className="px-6 py-3">
                  <img
                    src={service.featured_image}
                    alt={service.title}
                    className="w-16 h-16 rounded object-cover border"
                  />
                </td>
                <td className="px-6 py-3 font-semibold">{service.title}</td>
                <td className="px-6 py-3 text-gray-600">{service.short}</td>
                <td className="px-6 py-3">{service.date}</td>
                <td className="px-6 py-3 text-center flex justify-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800" onClick={()=>{hanhleNavigate(service.id)}}>
                    <FiEdit size={18} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(service.id)}
                  >
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {services.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No services found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Service;
