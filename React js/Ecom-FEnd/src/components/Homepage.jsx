import {Link} from "react-router-dom";
const Homepage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <nav className="flex justify-between items-center p-6 bg-white shadow-lg">
        <div className="flex items-center space-x-4">
           <img src="/logo.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
           <h1 className="text-2xl font-bold text-gray-800">Product Management System</h1>
        </div>
        <div className="flex space-x-6">
            <Link to="/signin" className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">Sign In</Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Sign Up</Link>
            <Link to="/aboutus" className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors">About us</Link>
        </div>
      </nav>
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Our Platform</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta, ab expedita dolores eum adipisci libero ratione quisquam, tempora itaque exercitationem pariatur officia non rem, deserunt ex cupiditate a possimus ad perspiciatis architecto. Fuga, ratione voluptate magnam voluptatum, recusandae, eum accusamus laborum ex facere dolores in culpa molestiae? Sed temporibus quis quibusdam dicta, ut, illum sunt obcaecati inventore doloremque assumenda eius placeat ex tempora. Dicta, amet. Aperiam velit consectetur magni ratione. Nulla blanditiis quia corrupti corporis? Quia dolor obcaecati quaerat aliquid illo aperiam quisquam ipsum nihil excepturi vero, accusamus ducimus error voluptatibus vitae iusto porro fuga commodi sint voluptas dicta?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
