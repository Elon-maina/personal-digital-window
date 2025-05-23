
import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-blue-400">
            <img 
              src="/lovable-uploads/4a0b610e-6a10-4ea0-b7db-221796d5d9ac.png" 
              alt="Joseph Machuhi Maina" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Joseph Machuhi Maina
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate Software Developer building efficient and scalable applications with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#contact" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
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
