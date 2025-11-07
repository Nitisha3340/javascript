import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import Logout from "./components/Logout";
import Homepage from "./components/Homepage";
import ManageProducts from "./components/ManageProducts";
import Cart from "./components/Cart";
import UserManagement from "./components/UserManagement";
import ViewAnalytics from "./components/ViewAnalytics";
import Products from "./components/Products";
import DashboardLayout from "./components/DashboardLayout";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  {/* Landing: Homepage */}
  <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/logout" element={<Logout />} />

        {/* Dashboard with nested routes (app-style) - protected */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Products />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="analytics" element={<ViewAnalytics />} />
        </Route>

        {/* direct product route (fallback) */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;