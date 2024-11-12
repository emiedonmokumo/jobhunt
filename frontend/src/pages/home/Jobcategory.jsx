import React from 'react';

const JobCategories = () => {
  const categories = [
    "IT & Software", "Technology", "Government", "Accounting / Finance",
    "Construction", "Maintenance", "Design & Multimedia", "Human Resources"
  ];

  return (
    <section className="job-categories py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-8">Browse Job Categories</h2>
      <div className="category-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="category-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center">
            <div className="icon text-4xl text-indigo-600 mb-4">📂</div>
            <p className="text-xl font-semibold text-gray-800">{category}</p>
          </div>
        ))}
      </div>
      <button className="show-all mt-8 px-6 py-3 text-lg font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200">
        Show All
      </button>
    </section>
  );
};

export default JobCategories;