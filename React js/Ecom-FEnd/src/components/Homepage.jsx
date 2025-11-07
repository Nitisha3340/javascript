import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Header */}
      <header className="bg-pink-300">
        <div className="container mx-auto px-6 py-3 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="logo" className="h-10 w-10 object-cover rounded" />
            </div>

            {/* centered title using absolute overlay for true center */}
            <h1 className="absolute left-0 right-0 text-center text-lg font-bold text-gray-900">
              Product Management System
            </h1>

            <nav className="flex items-center gap-6">
              <Link to="/signin" className="text-sm text-gray-800 hover:underline">SignIn</Link>
              <Link to="/signup" className="text-sm text-gray-800 hover:underline">SignUp</Link>
              <Link to="/aboutus" className="text-sm text-gray-800 hover:underline">AboutUs</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content area */}
      <main className="flex-grow container mx-auto px-8 py-8">
        <div className="bg-blue-100 rounded-md p-6 text-gray-800">
          <p className="leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus eligendi veniam dolores quam doloremque odit debitis perspiciatis, sint excepturi incidunt corporis corrupti, illo ex quas dolorum architecto totam saepe fuga vero ipsa maiores beatae accusantium. Officia voluptates incidunt rerum eveniet molestiae. Officia inventore accusamus consequuntur explicabo sequi sunt porro, in laboriosam molestias neque delectus, nostrum exercitationem incidunt qui impedit nobis, repellat obcaecati ipsum. Distinctio harum vero blanditiis quis repudiandae ipsam incidunt corrupti ad vitae illo? Corporis obcaecati ex blanditiis sequi minima soluta, fugiat, repudiandae cum temporibus delectus, dolorum praesentium exercitationem eveniet nostrum dolor molestias nulla sapiente magni consequatur.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-300">
        <div className="container mx-auto px-6 py-4 text-center text-gray-800">© 2025 Product Management System. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Homepage;
