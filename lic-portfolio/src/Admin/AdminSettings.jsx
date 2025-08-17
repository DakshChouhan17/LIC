import React, { useState } from "react";

function AdminSettings() {
  const [contact, setContact] = useState({
    email: "",
    mobile: "",
    address: "",
  });

  const [social, setSocial] = useState({
    whatsapp: "",
    instagram: "",
    facebook: "",
    linkedin: "",
  });

  // Contact Form Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Info:", contact);
    // yaha API call karna hai -> axios.post("/api/contact", contact)
  };

  // Social Form Submit
  const handleSocialSubmit = (e) => {
    e.preventDefault();
    console.log("Social Links:", social);
    // yaha API call karna hai -> axios.post("/api/social", social)
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info Card */}
        <form
          onSubmit={handleContactSubmit}
          className="bg-white shadow rounded-lg overflow-hidden border"
        >
          {/* Header */}
          <div className="bg-blue-600 px-4 py-3">
            <h3 className="text-lg font-semibold text-white">
              Contact Information
            </h3>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="admin@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile Number
              </label>
              <input
                type="text"
                value={contact.mobile}
                onChange={(e) =>
                  setContact({ ...contact, mobile: e.target.value })
                }
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                value={contact.address}
                onChange={(e) =>
                  setContact({ ...contact, address: e.target.value })
                }
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
                rows="3"
                placeholder="Enter your address..."
              ></textarea>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>

        {/* Social Links Card */}
        <form
          onSubmit={handleSocialSubmit}
          className="bg-white shadow rounded-lg overflow-hidden border"
        >
          {/* Header */}
          <div className="bg-blue-600 px-4 py-3">
            <h3 className="text-lg font-semibold text-white">Social Links</h3>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp</label>
              <input
                type="text"
                value={social.whatsapp}
                onChange={(e) =>
                  setSocial({ ...social, whatsapp: e.target.value })
                }
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="WhatsApp Link"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Instagram</label>
              <input
                type="text"
                value={social.instagram}
                onChange={(e) =>
                  setSocial({ ...social, instagram: e.target.value })
                }
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="Instagram Link"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Facebook</label>
              <input
                type="text"
                value={social.facebook}
                onChange={(e) =>
                  setSocial({ ...social, facebook: e.target.value })
                }
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="Facebook Link"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn</label>
              <input
                type="text"
                value={social.linkedin}
                onChange={(e) =>
                  setSocial({ ...social, linkedin: e.target.value })
                }
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
                placeholder="LinkedIn Link"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminSettings;
