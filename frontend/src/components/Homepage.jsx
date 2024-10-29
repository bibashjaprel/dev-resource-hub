import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">Developer Resources Hub</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center bg-blue-600 text-white h-64">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Welcome to the Developer Resources Hub!</h2>
          <p className="mt-2 text-lg">Find all the tools, tutorials, and resources you need to enhance your development skills.</p>
          <a href="#resources" className="mt-4 inline-block bg-white text-blue-600 px-4 py-2 rounded shadow">Get Started</a>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section id="resources" className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Featured Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Resource Card */}
          {['API Documentation', 'Tutorials', 'Best Practices', 'Community Resources', 'Tools & Libraries', 'Sample Projects'].map((resource, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-800">{resource}</h4>
              <p className="mt-2 text-gray-600">Explore our {resource.toLowerCase()} to boost your development skills.</p>
              <a href="#" className="mt-4 inline-block text-blue-600 font-semibold">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Developer Resources Hub. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
