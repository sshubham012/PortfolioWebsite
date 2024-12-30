// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 bg-gray-700 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 bg-gray-700 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 bg-gray-700 rounded-md"
            rows="4"
          ></textarea>
          <button className="bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
