import React, { useState, useEffect } from "react";
import { FaTrashRestore, FaTrashAlt } from "react-icons/fa";

function Trash() {
  const [trashServices, setTrashServices] = useState([]);

  useEffect(() => {
    // 👇 Yaha API call karke trash services laa sakte ho
    const dummyData = [
      {
        id: 1,
        title: "Website Development",
        short: "Complete website design",
        deletedAt: "2025-08-15",
      },
      {
        id: 2,
        title: "Mobile App",
        short: "Cross platform app",
        deletedAt: "2025-08-16",
      },
    ];
    setTrashServices(dummyData);
  }, []);

  const handleRestore = (id) => {
    alert(`Restore service with ID: ${id}`);
  };

  const handlePermanentDelete = (id) => {
    if (window.confirm("Are you sure? This will permanently delete the service.")) {
      alert(`Permanently deleted service with ID: ${id}`);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Trash Services</h2>

      {trashServices.length === 0 ? (
        <p className="text-gray-500">No trashed services available.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Short Description</th>
                <th className="px-6 py-3">Deleted At</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {trashServices.map((service) => (
                <tr
                  key={service.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{service.title}</td>
                  <td className="px-6 py-4">{service.short}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {service.deletedAt}
                  </td>
                  <td className="px-6 py-4 flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleRestore(service.id)}
                      className="text-green-600 hover:text-green-800"
                      title="Restore"
                    >
                      <FaTrashRestore size={18} />
                    </button>
                    <button
                      onClick={() => handlePermanentDelete(service.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete Permanently"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Trash;
