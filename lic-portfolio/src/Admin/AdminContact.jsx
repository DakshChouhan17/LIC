import React, { useState, useEffect } from "react";
import { FaTrashRestore, FaTrashAlt, FaEye } from "react-icons/fa";

function AdminContact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // 👇 Dummy data (yaha API call karke contact list fetch kar sakte ho)
    const dummyContacts = [
      {
        id: 1,
        name: "Amit Kumar",
        mobile: "9876543210",
        scheduleTime: "2025-08-20 10:30 AM",
      },
      {
        id: 2,
        name: "Priya Sharma",
        mobile: "9123456789",
        scheduleTime: "2025-08-21 02:00 PM",
      },
    ];
    setContacts(dummyContacts);
  }, []);

  const handleView = (id) => {
    alert(`View details of contact ID: ${id}`);
  };

  const handleRestore = (id) => {
    alert(`Restore contact with ID: ${id}`);
  };

  const handlePermanentDelete = (id) => {
    if (window.confirm("Are you sure? This will permanently delete the contact.")) {
      alert(`Permanently deleted contact with ID: ${id}`);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Contact List</h2>

      {contacts.length === 0 ? (
        <p className="text-gray-500">No contacts available.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Mobile No</th>
                <th className="px-6 py-3">Schedule Time</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{contact.name}</td>
                  <td className="px-6 py-4">{contact.mobile}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {contact.scheduleTime}
                  </td>
                  <td className="px-6 py-4 flex items-center justify-center gap-4">
                    {/* 👁 View Button */}
                    <button
                      onClick={() => handleView(contact.id)}
                      className="text-blue-600 hover:text-blue-800"
                      title="View"
                    >
                      <FaEye size={18} />
                    </button>

                    {/* ♻ Restore Button */}
                    <button
                      onClick={() => handleRestore(contact.id)}
                      className="text-green-600 hover:text-green-800"
                      title="Restore"
                    >
                      <FaTrashRestore size={18} />
                    </button>

                    {/* 🗑 Permanent Delete */}
                    <button
                      onClick={() => handlePermanentDelete(contact.id)}
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

export default AdminContact;
