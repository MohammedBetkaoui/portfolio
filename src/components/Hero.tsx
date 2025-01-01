import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(7, 4, 4, 0.83), rgba(82, 80, 80, 0.54)), url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-100 dark:text-gray-100 mb-6">
          Betkaoui Mohammed
        </h1>

          <h2 className="text-2xl sm:text-3xl text-gray-100 dark:text-gray-300 mb-8">
            Web Developer
          </h2>
          <p className="text-xl text-gray-200 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting intuitive and high-performance applications with Laravel & React js
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;