import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="mb-4">This is the about page of your application.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default About;