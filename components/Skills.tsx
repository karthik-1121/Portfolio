import React from 'react';
import AnimatedSection from './AnimatedSection';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <AnimatedSection id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-purple-400">Skills</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          A toolkit honed through academic projects, internships, and continuous learning.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <div key={category} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-700 pb-2 inline-block">
                {category}
              </h3>
              <div className="space-y-5">
                {SKILLS.filter(skill => skill.category === category).map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full rounded-full ${
                          category === 'Frontend' ? 'bg-cyan-400' :
                          category === 'UI/UX' ? 'bg-purple-400' :
                          category === 'Backend' ? 'bg-green-400' : 'bg-yellow-400'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
