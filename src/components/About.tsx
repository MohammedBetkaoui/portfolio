import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Web & Mobile Developer with extensive experience in building modern, 
              scalable applications. Specializing in Laravel and React, I focus on creating 
              intuitive user experiences backed by robust server-side architecture.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With a strong foundation in both frontend and backend development, I bring ideas to 
              life through clean code and innovative solutions. I'm constantly learning and 
              adapting to new technologies to deliver the best possible results.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Frontend</h3>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Backend</h3>
                <p className="text-gray-600">Laravel 11, PHP 8, RESTful APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;