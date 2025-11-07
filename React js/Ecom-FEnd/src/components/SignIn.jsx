import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const emailNormalized = email.trim().toLowerCase();
    const passwordTrimmed = password;

    // find matching user by normalized email
    const user = users.find(
      (u) => (u.email || "").trim().toLowerCase() === emailNormalized && (u.password || "") === passwordTrimmed
    );

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");

      // Role-based redirection (both go to dashboard layout, user will see products)
      navigate("/dashboard");
    } else {
      if (users.length === 0) {
        alert("No users found. Please sign up first or create a demo account.");
      } else {
        alert("Invalid credentials! Check your email/password or sign up.");
      }
    }
  };

  // helper to quickly create a demo/admin user when none exist
  const createDemoUser = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const demo = { id: Date.now(), username: "admin", email: "admin@admin.com", password: "admin123", role: "admin" };
    users.push(demo);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Demo admin created: admin@admin.com / admin123\nPlease sign in with these credentials.");
  };

  // optional: show current number of users in console (dev)
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // console.debug("stored users:", users);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-pink-300 px-6 py-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
            <p className="text-sm text-gray-800">Welcome back — please sign in to continue</p>
          </div>
          <form onSubmit={handleSubmit} className="p-6">
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="Email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 mb-4 rounded-md" required />

            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 mb-4 rounded-md" required />

            <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-md font-semibold hover:bg-pink-600">Sign In</button>
          </form>

          <div className="p-6 border-t flex items-center justify-between">
            <p className="text-sm">New here? <Link to="/signup" className="text-pink-600 font-medium">Create account</Link></p>
            <button onClick={createDemoUser} className="text-sm text-gray-600 underline">Create demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;