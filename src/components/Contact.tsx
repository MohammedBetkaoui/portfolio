import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be handled by Laravel backend
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-6">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out through any of these channels:
            </p>
            <div className="space-y-4">
              <a
                href="mailto:mohammed.betkaoui@univ-bba.dz"
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <Mail className="w-6 h-6 mr-3" />
                contact@example.com
              </a>
              <a
                href="https://github.com/MohammedBetkaoui"
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <Github className="w-6 h-6 mr-3" />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-betkaoui-b005342a5/"
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <Linkedin className="w-6 h-6 mr-3" />
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;