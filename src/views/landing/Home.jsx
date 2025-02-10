import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* Main content */}
      <div className="relative max-w-4xl w-full mx-auto px-4 py-16">
        <div className="text-center mb-16 space-y-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600">
                Financial
              </span>
            </h1>
            <h1 className="text-7xl font-bold relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-gray-900">
                Hub
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-500 font-light tracking-wide">
            Experience the future of financial management
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a
            href="/introduction"
            className="group relative h-12 bg-black rounded-full flex items-center justify-center overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative text-white text-sm font-medium px-8">
              Get Started
            </span>
          </a>

          <a
            href="/login"
            className="group h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <span className="text-gray-900 text-sm font-medium px-8">
              Login
            </span>
          </a>

          <a
            href="/register"
            className="group h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <span className="text-gray-900 text-sm font-medium px-8">
              Register
            </span>
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            New to Financial Hub?
            <a
              href="/introduction"
              className="text-blue-500 hover:text-blue-600 ml-1"
            >
              Learn more →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
