import React from 'react'

export default function Footer() {
  


  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm">
              We are committed to providing the best shopping experience for our customers. Our team is dedicated to quality and excellent service.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm hover:text-gray-400">About</a></li>
              <li><a href="/contact" className="text-sm hover:text-gray-400">Contact</a></li>
              <li><a href="/privacy" className="text-sm hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm hover:text-gray-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect with Us</h3>
            <ul className="flex space-x-4">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


