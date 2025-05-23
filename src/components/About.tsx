
import React from 'react';
import { Code, Lightbulb, Zap, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Critical Thinking', icon: Target },
    { name: 'Programming', icon: Code },
    { name: 'Software Development', icon: Zap }
  ];

  const technologies = [
    'Python', 'HTML/CSS', 'JavaScript', 'C', 'Node.js', 'Express.js', 'MySQL'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Profile</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              I am a software developer with passion, skilled in programming languages like Python, HTML/CSS, and C. 
              I focus on building efficient and scalable applications. I am eager to apply my technical knowledge, 
              problem-solving skills, and enthusiasm for learning to contribute to innovative software projects. 
              My goal is to continue growing as a developer and create impactful solutions that drive progress.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Education</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h5 className="font-semibold text-gray-800">Bachelor of Science in Computer Science</h5>
                  <p className="text-gray-600">Egerton University, 2022 to date</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h5 className="font-semibold text-gray-800">Kenya Certificate of Secondary Education</h5>
                  <p className="text-gray-600">Karima Boys High School, 2018 to 2021</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <skill.icon className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">English</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Kiswahili</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
