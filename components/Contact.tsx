import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="bg-slate-900 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Let's <span className="text-cyan-400">Connect</span></h2>
                    <p className="text-slate-400 mb-8">
                        I'm currently looking for new opportunities in Frontend Development and UI/UX Design. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors group">
                            <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                <Mail className="text-cyan-400" />
                            </div>
                            <span>{PERSONAL_INFO.email}</span>
                        </a>
                        <div className="flex items-center space-x-4 text-slate-300 group">
                            <div className="p-3 bg-slate-800 rounded-lg">
                                <Phone className="text-purple-400" />
                            </div>
                            <span>{PERSONAL_INFO.phone}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-slate-300">
                            <div className="p-3 bg-slate-800 rounded-lg">
                                <MapPin className="text-pink-400" />
                            </div>
                            <span>{PERSONAL_INFO.location}</span>
                        </div>
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors group">
                            <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                                <Linkedin className="text-blue-400" />
                            </div>
                            <span>LinkedIn Profile</span>
                        </a>
                    </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                        <input 
                            type="email" 
                            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                        <textarea 
                            rows={4}
                            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="Hello, I'd like to discuss..."
                        ></textarea>
                    </div>
                    <button 
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 rounded-lg transition-all flex justify-center items-center space-x-2"
                    >
                        <span>Send Message</span>
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
