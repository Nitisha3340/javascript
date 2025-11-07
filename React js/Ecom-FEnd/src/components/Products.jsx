import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Seed default products if none exist
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    if (storedProducts.length === 0) {
      const defaultProducts = [
        { id: 1, name: "Laptop Pro", price: 79999, image: "laptop.jpg", description: "High-performance laptop for professionals." },
        { id: 2, name: "Noise-cancelling Headphones", price: 9999, image: "headphone.jpg", description: "Immersive sound with active noise cancellation." },
        { id: 3, name: "Smart Watch", price: 12999, image: "watch.jpg", description: "Track fitness, notifications and more." },
      ];
      localStorage.setItem("products", JSON.stringify(defaultProducts));
      setProducts(defaultProducts);
    } else {
      setProducts(storedProducts);
    }

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (product) => {
    // if product already in cart, increment quantity
    const existing = cart.find((c) => c.id === product.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((c) =>
        c.id === product.id ? { ...c, quantity: (c.quantity || 1) + 1 } : c
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    // navigate to cart page for checkout
    alert(`${product.name} added to cart! Redirecting to cart...`);
    navigate("/dashboard/cart");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-blue-500 p-4 text-white">
        <h1 className="text-xl font-bold">Shopping</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard/cart")}
            className="hover:underline flex items-center gap-1"
          >
            <FaShoppingCart /> Cart ({cart.length})
          </button>
          <button
            onClick={() => navigate("/logout")}
            className="hover:underline"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.length === 0 ? (
          <p className="text-center col-span-3 text-gray-600">
            No products available. Please contact admin.
          </p>
        ) : (
          products.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition"
            >
              {/* ✅ Loads image from public/images folder */}
              <img
                src={`/images/${p.image}`}
                alt={p.name}
                className="w-full h-40 object-cover rounded mb-3 border"
              />
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-gray-600 mb-2">₹{p.price}</p>
              <button
                onClick={() => handleAddToCart(p)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;