
import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl font-bold shadow-2xl">
            JM
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Joseph Machuhi Maina
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate Software Developer building efficient and scalable applications with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:machuhijoseph734@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              <Mail size={20} />
              Contact Me
            </a>
            
            <div className="flex items-center gap-6 text-gray-300">
              <a href="tel:+254746848928" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={18} />
                +254 746848928
              </a>
              <a href="mailto:machuhijoseph734@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={18} />
                machuhijoseph734@gmail.com
              </a>
            </div>
          </div>
          
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
