import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your App</h1>
      <p className="mb-4">This is the home page of your application. Start building from here!</p>
      <Link to="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
    </div>
  );
};

export default Index;