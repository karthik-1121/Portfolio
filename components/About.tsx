import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS } from '../constants';
import { BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Summary Card */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <span className="w-2 h-8 bg-cyan-500 rounded-full mr-3"></span>
              Who I Am
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              {PERSONAL_INFO.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              {["Frontend Development", "UI/UX Design", "Responsive Design", "Data Modeling"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-700 text-cyan-300 text-sm rounded-full">
                  #{tag.replace(/\s/g, '')}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                <BookOpen className="mr-3 text-purple-400" />
                Education
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <div>
                      <h4 className="font-bold text-white">{edu.degree}</h4>
                      <p className="text-slate-400 text-sm">{edu.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="block text-cyan-400 font-mono text-sm">{edu.year}</span>
                      <span className="text-xs text-slate-500 font-bold bg-slate-900 px-2 py-1 rounded mt-1 inline-block">
                        Score: {edu.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                <Award className="mr-3 text-yellow-400" />
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <div key={index} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                    <h4 className="font-bold text-white text-sm mb-1">{cert.name}</h4>
                    <p className="text-slate-400 text-xs mb-2">{cert.issuer}</p>
                    <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
