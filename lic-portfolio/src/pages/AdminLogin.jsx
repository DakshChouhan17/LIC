import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName === "admin@lic.com" && password === "admin123") {
      localStorage.setItem("admin", true);
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
  <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm">
    <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Admin Login</h2>

    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Username</label>
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter username"
        onChange={e => setEmail(e.target.value)}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Password</label>
      <input
        type="password"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter password"
        onChange={e => setPassword(e.target.value)}
      />
    </div>

    <button
      onClick={handleLogin}
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
    >
      Login
    </button>

    <div className="text-center mt-4">
      <a href="#" className="text-sm text-blue-500 hover:underline">
        Forgot Password?
      </a>
    </div>
  </div>
</div>

  );
};

export default AdminLogin;
