import { useEffect, useState } from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiMail,
  FiPhone,
  FiSettings,
  FiGrid,
  FiPlusCircle,
  FiTrash2,
  FiLayers,
  FiLogOut,
} from "react-icons/fi";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/admin");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md h-screen fixed left-0 top-0 overflow-y-auto">
  <div className="p-6 border-b sticky top-0 bg-white z-50">
    <h2 className="text-2xl font-bold text-blue-600">Admin</h2>
  </div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            <FiHome /> Dashboard
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            <FiUsers /> Users
          </NavLink>

          <NavLink
            to="/admin/inquiries"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            <FiMail /> Inquiries
          </NavLink>

          <NavLink
            to="/admin/contacts"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            <FiPhone /> Contacts
          </NavLink>

          {/* Service Menu */}
          {/* Service Menu */}
<div>
  <button
    onClick={() => setServiceOpen(!serviceOpen)}
    className="flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-blue-100"
  >
    <span className="flex items-center gap-2">
      <FiGrid /> Services
    </span>
    <span>{serviceOpen ? "▲" : "▼"}</span>
  </button>

  {serviceOpen && (
    <div className="ml-6 mt-2 space-y-2">
      <NavLink
        to="services"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
          }`
        }
      >
        <FiLayers /> All Services
      </NavLink>
      <NavLink
        to="services/create"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
          }`
        }
      >
        <FiPlusCircle /> Create Service
      </NavLink>
      <NavLink
        to="services/trash"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
          }`
        }
      >
        <FiTrash2 /> Trash Service
      </NavLink>
    </div>
  )}
</div>

<NavLink
  to="settings"
  className={({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
      isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
    }`
  }
>
  <FiSettings /> Settings
</NavLink>


          <NavLink
            to="admin/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            <FiSettings /> Settings
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
       <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminDashboard;
