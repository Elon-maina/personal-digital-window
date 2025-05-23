
import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Joseph Machuhi Maina</h3>
            <p className="text-gray-400 mb-4">
              Passionate software developer focused on creating innovative solutions and driving technological progress.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:machuhijoseph734@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+254746848928" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>P.O.Box 239 – 10218 KANGARI</p>
              <p>Phone: +254 746848928</p>
              <p>Email: machuhijoseph734@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Joseph Machuhi Maina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
