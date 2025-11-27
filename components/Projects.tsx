import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <AnimatedSection id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Showcasing my ability to deliver robust solutions from concept to deployment.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all hover:-translate-y-2">
              <div className="p-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 text-purple-400">
                        <Folder size={24} />
                    </div>
                    <div className="flex space-x-3">
                         {/* Placeholders for links if they existed */}
                         <button className="text-slate-400 hover:text-white transition-colors" title="View Code">
                            <Github size={20} />
                         </button>
                         <button className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                            <ExternalLink size={20} />
                         </button>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                </h3>
                
                <div className="mb-6">
                    <ul className="space-y-2">
                        {project.description.map((desc, i) => (
                            <li key={i} className="text-slate-400 text-sm flex items-start">
                                <span className="mr-2 text-purple-500">-</span>
                                {desc}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map(tech => (
                        <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded bg-slate-900 text-cyan-400 border border-slate-700">
                            {tech}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
