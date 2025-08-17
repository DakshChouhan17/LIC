import React from 'react'
import { FiGrid, FiMail, FiPhone } from 'react-icons/fi'

function AdminHomePage() {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white shadow-md rounded-xl p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-600 flex items-center justify-center gap-2">
        <FiMail /> Inquiries
      </h3>
      <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
    </div>

    <div className="bg-white shadow-md rounded-xl p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-600 flex items-center justify-center gap-2">
        <FiPhone /> Contacts
      </h3>
      <p className="text-3xl font-bold text-green-600 mt-2">80</p>
    </div>

    <div className="bg-white shadow-md rounded-xl p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-600 flex items-center justify-center gap-2">
        <FiGrid /> Services
      </h3>
      <p className="text-3xl font-bold text-purple-600 mt-2">15</p>
    </div>
  </main>
  )
}

export default AdminHomePage