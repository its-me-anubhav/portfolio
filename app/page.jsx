
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-black">
      
      {/* Navbar */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center"
      >
        <motion.div whileHover={{ scale: 1.05, rotate: -2 }} transition={{ type: "spring", stiffness: 400 }} className="font-display font-bold text-2xl tracking-tighter flex items-center gap-1 cursor-default">
          <span className="text-accent">//</span> AS
        </motion.div>
        <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wider text-text-muted">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/anubhav-resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</motion.a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <div className="w-px h-4 bg-border hidden sm:block"></div>
          <a href="https://www.linkedin.com/in/anubhav-shakya/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hidden sm:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
          <a href="https://github.com/its-me-anubhav" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hidden sm:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
          <a href="https://x.com/Anubhavshakya63" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hidden sm:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.73 16h5L9 4H4z"/><path d="M4 20l6.76-6.76"/></svg>
                  </a>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 pt-6 pb-16 md:pt-10 md:pb-24 space-y-24">
        
        {/* HERO SECTION */}
        <motion.section 
          variants={staggerContainer} 
          initial="hidden" 
          animate="visible" 
          className="space-y-8"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Hey, I'm <span className="text-accent">Anubhav!</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl font-light">
            Full-Stack Developer with <strong className="font-medium text-white">1.5+ years of experience</strong> building scalable CRM systems and production-ready web platforms. <br className="hidden md:block mt-2" />
            I specialize in the React & Node.js ecosystem�handling everything from <strong className="font-medium text-white">application architecture and backend development</strong> to <strong className="font-medium text-white">deployment and performance optimization.</strong>
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <div className="squiggly"></div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-8 pt-4">
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Find me on</h3>
              <div className="flex flex-wrap gap-6">
                <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/anubhav-shakya/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="https://github.com/its-me-anubhav" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>GitHub</span>
                </motion.a>
                <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="https://x.com/Anubhavshakya63" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l11.73 16h5L9 4H4z"/><path d="M4 20l6.76-6.76"/></svg>
                  <span>Twitter</span>
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-widest">Contact</h3>
              <p className="text-text-muted">
                You can reach me out anytime at <a href="mailto:anubhavshakya543@gmail.com" className="text-white hover:text-accent border-b border-accent pb-0.5 transition-colors">anubhavshakya543@gmail.com</a>
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* RESUME SECTION */}
        <motion.section 
          id="resume" 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white">My Resume / CV</h2>
            <p className="text-text-muted text-lg leading-relaxed font-light">
              I'm a highly skilled full-stack developer with a track record of building performant web applications. On this page, you can learn more about my knowledge stack and my previous work experience.
              <br className="hidden md:block mt-2" />
              Additionally, if you require, you can <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="/anubhav-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white border-b border-white/20 hover:border-accent hover:text-accent transition-colors pb-0.5 font-medium inline-flex items-center gap-1.5 mt-2">download my resume <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="12" y2="18"></line><line x1="15" y1="15" x2="12" y2="18"></line></svg></motion.a>
            </p>
            <div className="squiggly"></div>
          </motion.div>

          {/* SKILLS */}
          <motion.div variants={fadeUp} className="space-y-6 pt-4">
            <h3 className="text-2xl font-display font-bold text-white">Skills</h3>
            <p className="text-text-muted font-light mb-6">
              Here are the frameworks, libraries, databases, and tools I have experience with.
            </p>
            <motion.div variants={staggerContainer} className="flex flex-wrap gap-3">
              {[
                { name: 'Next.js', color: 'bg-white/10 text-white' },
                { name: 'React', color: 'bg-[#0ea5e9]/10 text-[#0ea5e9]' },
                { name: 'Node.js', color: 'bg-[#22c55e]/10 text-[#22c55e]' },
                { name: 'JavaScript', color: 'bg-[#f7df1e]/10 text-[#f7df1e]' },
                { name: 'Tailwind CSS', color: 'bg-[#06b6d4]/10 text-[#06b6d4]' },
                { name: 'PostgreSQL', color: 'bg-[#6366f1]/10 text-[#6366f1]' },
                { name: 'MongoDB', color: 'bg-[#10b981]/10 text-[#10b981]' },
                { name: 'Firebase', color: 'bg-[#eab308]/10 text-[#eab308]' },
                { name: 'Google Cloud', color: 'bg-[#60a5fa]/10 text-[#60a5fa]' },
                { name: 'Docker', color: 'bg-[#3b82f6]/10 text-[#3b82f6]' },
                { name: 'Kubernetes', color: 'bg-[#326ce5]/10 text-[#326ce5]' },
                { name: 'REST APIs', color: 'bg-white/5 text-gray-300' },
                { name: 'C++', color: 'bg-[#1d4ed8]/10 text-[#3b82f6]' },
                { name: 'SQL', color: 'bg-[#f59e0b]/10 text-[#f59e0b]' },
              ].map((skill, idx) => (
                <motion.span variants={fadeUp} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  key={idx} 
                  className={`px-3 py-1.5 rounded-md font-medium text-xs flex items-center gap-1.5 border border-white/5 ${skill.color}`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* WORK HISTORY TIMELINE */}
          <div className="space-y-8 pt-10">
            <motion.h3 variants={fadeUp} className="text-2xl font-display font-bold text-white mb-6">Experience</motion.h3>

            <motion.div variants={staggerContainer} className="relative border-l-2 border-border ml-2 md:ml-3 space-y-12">
              
              {/* Job 1 */}
              <motion.div variants={fadeUp} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-transform group-hover:scale-125"></div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">Full Stack Developer</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted font-medium">
                    <span className="text-white">A N Global Services Private Limited</span>
                    <span className="text-border">�</span>
                    <span>Delhi, India</span>
                  </div>
                  <div className="text-text-muted text-sm font-light">Dec 2025 - Present</div>
                  <ul className="list-disc list-inside text-text-muted space-y-2 mt-4 font-light text-sm md:text-base leading-relaxed marker:text-border">
                    <li>Built and deployed a full-stack CRM with React.js, Node.js, and Express.js, used by 50+ employees for Sales, Services, Stock Management, Billing, and daily workflow automation.</li>
                    <li>Developed a Hallmarking Centre CRM covering Customer Management, Billing, Service Workflows, and daily operations on a centralized platform.</li>
                    <li>Built and deployed a 10,000+ page dynamic website with Next.js and Tailwind CSS, including a custom Admin Panel, SSR/SSG, reusable components, and technical SEO optimization.</li>
                  </ul>
                </div>
              </motion.div>

              {/* Job 2 */}
              <motion.div variants={fadeUp} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-transform group-hover:scale-125"></div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">Full Stack Developer</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted font-medium">
                    <span className="text-white">1Click Distributors</span>
                    <span className="text-border">�</span>
                    <span>Noida, India</span>
                  </div>
                  
                  <div className="text-text-muted text-sm font-light mt-1">Jan 2025 - Nov 2025</div>
                  <ul className="list-disc list-inside text-text-muted space-y-2 mt-4 font-light text-sm md:text-base leading-relaxed marker:text-border">
                    <li>Developed a CRM platform handling 10,000+ client records, distributor onboarding, and support workflows with reliable data management.</li>
                    <li>Built and deployed a performance-focused corporate website using Next.js, React.js, Node.js, and Tailwind CSS, achieving a 90+ Lighthouse score.</li>
                    <li>Deployed backend services on GCP with 99%+ uptime and improved Core Web Vitals for faster page loads and stronger SEO performance.</li>
                  </ul>
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* EDUCATION TIMELINE */}
          <div className="space-y-8 pt-10">
            <motion.h3 variants={fadeUp} className="text-2xl font-display font-bold text-white mb-6">Education</motion.h3>

            <motion.div variants={staggerContainer} className="relative border-l-2 border-border ml-2 md:ml-3 space-y-12">
              
              {/* Education 1 */}
              <motion.div variants={fadeUp} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[7px] top-1.5 transition-colors group-hover:bg-white"></div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">B.Tech, Computer Science (AI & ML)</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted font-medium">
                    <span className="text-white">KCC Institute of Technology and Management</span>
                    <span className="text-border">�</span>
                    <span>Greater Noida, UP</span>
                  </div>
                  <div className="text-text-muted text-sm font-light">2021 - 2025</div>
                  <p className="text-text-muted font-light text-sm md:text-base mt-2">
                    CGPA: 7.21/10
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* PROJECTS TIMELINE */}
          <div className="space-y-8 pt-10">
            <motion.h3 variants={fadeUp} className="text-2xl font-display font-bold text-white mb-6">Featured Projects</motion.h3>

            <motion.div variants={staggerContainer} className="relative border-l-2 border-border ml-2 md:ml-3 space-y-12">
              
              {/* Project 1 */}
              <motion.div variants={fadeUp} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-transform group-hover:scale-125"></div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">AI-Powered Expense Tracker</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted font-medium">
                    <span className="text-accent">Personal Project</span>
                    <span className="text-border">�</span>
                    <span>Next.js, Node.js, PostgreSQL, NextAuth, Inngest, Gemini AI</span>
                  </div>
                  <ul className="list-disc list-inside text-text-muted space-y-2 mt-4 font-light text-sm md:text-base leading-relaxed marker:text-border">
                    <li>Built a full-stack expense management platform with secure authentication, session management, and structured financial data workflows.</li>
                    <li>Integrated Gemini AI for automated receipt processing and expense categorization, reducing manual data entry.</li>
                    <li>Implemented Inngest for scheduled reports and background jobs, with a modular architecture for reliability and scalability.</li>
                  </ul>
                  <motion.a whileHover={{ x: 4 }} href="https://expense-tracker-self-beta.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-white hover:text-accent transition-colors font-medium">
                    View Live App <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </motion.a>
                </div>
              </motion.div>

            </motion.div>
          </div>
          
          
        </motion.section>

        {/* GET IN TOUCH */}
        <motion.section 
          id="contact" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pt-8 pb-12 space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Get in touch</h2>
          <p className="text-text-muted text-lg font-light">Do you have an exciting project? Let's talk!</p>
          <div className="squiggly"></div>
          
          <div className="pt-4 space-y-4">
            <p className="text-text-muted font-light">
              You can reach me out anytime at <br className="md:hidden" />
              <a href="mailto:anubhavshakya543@gmail.com" className="text-white hover:text-accent border-b border-accent pb-0.5 transition-colors font-medium">anubhavshakya543@gmail.com</a>
            </p>
            <p className="text-text-muted font-light">
              As a backup option, you can <a href="https://x.com/Anubhavshakya63" target="_blank" rel="noreferrer" className="text-white hover:text-accent border-b border-white/20 hover:border-accent pb-0.5 transition-colors font-medium">DM me on X</a>
            </p>
            <p className="text-text-muted font-light pt-2">I usually respond right away on business days.</p>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted">
          <p>� 2026 Built with <span className="text-red-500">??</span> by Anubhav Shakya</p>
          <div className="flex items-center gap-6 font-medium">
            <a href="#resume" className="hover:text-white transition-colors">Tech Stack</a>
            <a href="https://github.com/its-me-anubhav" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
