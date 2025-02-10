import React from "react";

const FeatureCard = ({ title, description, index }) => (
  <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <span className="text-sm font-medium text-blue-600 bg-blue-50 rounded-full h-6 w-6 flex items-center justify-center mr-3">
        {index}
      </span>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Introduction = () => {
  const features = [
    {
      title: "Custom Transactions",
      description:
        "Add detailed transactions with custom categories, tags, and notes to keep your financial records organized and searchable.",
    },
    {
      title: "Cash Flow Management",
      description:
        "Visualize and analyze your cash flow patterns with intuitive charts and predictive insights for better financial planning.",
    },
    {
      title: "Interactive Dashboard",
      description:
        "Dynamic carousel interface showcasing your key financial metrics and recent activities at a glance.",
    },
    {
      title: "Personalized Experience",
      description:
        "Customize your workspace with an intuitive home page that displays what matters most to you.",
    },
    {
      title: "Profile & Settings",
      description:
        "Tailor the application to your needs with comprehensive profile management and customizable settings.",
    },
    {
      title: "Quick Transactions",
      description:
        "Add transactions on the go with our streamlined quick-add feature, perfect for busy professionals.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain deep insights into your financial health with comprehensive analytics and customizable reports.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Welcome to the Future
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 font-light tracking-wide">
            Discover how our powerful features can transform your financial
            management
          </p>
          <a
            href="/register"
            className="inline-flex h-12 px-8 items-center justify-center bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
          >
            Start Your Journey
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index + 1}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Join thousands of users who have transformed their financial
            management
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/register"
              className="h-12 px-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-300"
            >
              Create Account
            </a>
            <a
              href="/login"
              className="h-12 px-8 bg-gray-100 text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
