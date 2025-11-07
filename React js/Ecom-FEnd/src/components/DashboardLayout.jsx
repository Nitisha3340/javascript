import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaBoxOpen, FaShoppingCart, FaTools, FaUsers, FaChartBar, FaSignOutAlt } from "react-icons/fa";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/logo.jpg" alt="logo" className="h-10 w-10 rounded-full object-cover" />
            <h2 className="text-xl font-semibold">Admin Dashboard</h2>
          </div>

          <nav className="flex items-center space-x-4">
            <NavLink to="/dashboard/products" className={({isActive}) => (isActive ? 'px-3 py-2 rounded-md bg-blue-600 text-white flex items-center gap-2' : 'px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 flex items-center gap-2')}>
              <FaBoxOpen /> <span>Products</span>
            </NavLink>
            <NavLink to="/dashboard/cart" className={({isActive}) => (isActive ? 'px-3 py-2 rounded-md bg-green-600 text-white flex items-center gap-2' : 'px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 flex items-center gap-2')}>
              <FaShoppingCart /> <span>Cart</span>
            </NavLink>
            <NavLink to="/dashboard/manage-products" className={({isActive}) => (isActive ? 'px-3 py-2 rounded-md bg-purple-600 text-white flex items-center gap-2' : 'px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 flex items-center gap-2')}>
              <FaTools /> <span>Manage</span>
            </NavLink>
            <NavLink to="/dashboard/user-management" className={({isActive}) => (isActive ? 'px-3 py-2 rounded-md bg-indigo-600 text-white flex items-center gap-2' : 'px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 flex items-center gap-2')}>
              <FaUsers /> <span>Users</span>
            </NavLink>
            <NavLink to="/dashboard/analytics" className={({isActive}) => (isActive ? 'px-3 py-2 rounded-md bg-yellow-600 text-white flex items-center gap-2' : 'px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 flex items-center gap-2')}>
              <FaChartBar /> <span>Analytics</span>
            </NavLink>

            <button onClick={handleLogout} className="px-3 py-2 rounded-md text-red-600 hover:bg-red-50 flex items-center gap-2">
              <FaSignOutAlt /> <span>Logout</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-6 py-4 text-sm text-gray-600">© 2025 Product Management System</div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
