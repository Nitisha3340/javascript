import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(u => u.email === formData.email);
    if (exists) {
      alert("User already exists!");
      return;
    }

    const newUser = {
      id: Date.now(),
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

  alert("Sign-up successful! Please sign in.");
  navigate("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-pink-300 px-6 py-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
            <p className="text-sm text-gray-800">Sign up to access dashboard and start shopping</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <label className="block text-sm text-gray-700 mb-1">Username</label>
            <input type="text" name="username" placeholder="Username"
              value={formData.username} onChange={handleChange}
              className="w-full border p-3 mb-4 rounded-md" required />

            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input type="email" name="email" placeholder="Email"
              value={formData.email} onChange={handleChange}
              className="w-full border p-3 mb-4 rounded-md" required />

            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input type="password" name="password" placeholder="Password"
              value={formData.password} onChange={handleChange}
              className="w-full border p-3 mb-4 rounded-md" required />

            <label className="block text-sm text-gray-700 mb-1">Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password"
              value={formData.confirmPassword} onChange={handleChange}
              className="w-full border p-3 mb-4 rounded-md" required />

            <label className="block text-sm text-gray-700 mb-1">Role</label>
            <select name="role" value={formData.role} onChange={handleChange}
              className="w-full border p-3 mb-4 rounded-md">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-md font-semibold hover:bg-pink-600">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;