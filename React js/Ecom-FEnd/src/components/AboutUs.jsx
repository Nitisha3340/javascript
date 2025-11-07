const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to our Product Management System. We are dedicated to providing the best
              e-commerce experience for both businesses and customers.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is to simplify product management and create seamless shopping experiences
              for everyone. We believe in innovation, quality, and customer satisfaction.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Comprehensive product management tools</li>
              <li>Secure and fast checkout process</li>
              <li>Real-time analytics and insights</li>
              <li>User-friendly interface for both admins and customers</li>
              <li>24/7 customer support</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Have questions? Feel free to reach out to us at{" "}
              <a href="mailto:support@ecom.com" className="text-blue-600 hover:underline">
                support@ecom.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
