import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-black">
      
      {/* Navbar */}
      <header className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="font-display font-bold text-2xl tracking-tighter flex items-center gap-1">
          <span className="text-accent">//</span> AS
        </div>
        <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wider text-text-muted">
          <a href="#resume" className="hover:text-white transition-colors">Resume</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <div className="w-px h-4 bg-border hidden sm:block"></div>
          <a href="https://github.com/its-me-anubhav" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hidden sm:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a href="https://x.com/Anubhavshakya63" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hidden sm:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.73 16h5L9 4H4z"/><path d="M4 20l6.76-6.76"/></svg>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-32">
        
        {/* HERO SECTION */}
        <section className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Hey, I'm <span className="text-accent">Anubhav Shakya!</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl font-light">
            A passionate full-stack engineer based in Delhi, India. <br className="hidden md:block" />
            I specialize in developing scalable web applications and CRMs using the React and Next.js ecosystem. <br className="hidden md:block" />
            Currently, I'm building modern digital products and AI-powered tools.
          </p>
          <div className="squiggly"></div>

          <div className="space-y-8 pt-4">
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Find me on</h3>
              <div className="flex flex-wrap gap-6">
                <a href="https://x.com/Anubhavshakya63" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l11.73 16h5L9 4H4z"/><path d="M4 20l6.76-6.76"/></svg>
                  <span>Twitter</span>
                </a>
                <a href="https://github.com/its-me-anubhav" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/anubhav-shakya/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-widest">Contact</h3>
              <p className="text-text-muted">
                You can reach me out anytime at <a href="mailto:anubhavshakya543@gmail.com" className="text-white hover:text-accent border-b border-accent pb-0.5 transition-colors">anubhavshakya543@gmail.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* RESUME SECTION */}
        <section id="resume" className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white">My Resume / CV</h2>
            <p className="text-text-muted text-lg leading-relaxed font-light">
              I'm a highly skilled full-stack developer with a track record of building performant web applications. On this page, you can learn more about my knowledge stack and my featured projects.
            </p>
            <div className="squiggly"></div>
          </div>

          {/* SKILLS */}
          <div className="space-y-6 pt-4">
            <h3 className="text-2xl font-display font-bold text-white">Skills</h3>
            <p className="text-text-muted font-light mb-6">
              Here are the frameworks, libraries, databases, and languages I have experience with. This is not a complete list! I'm constantly gaining new skills.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Next.js', color: 'bg-white/10 text-white' },
                { name: 'React', color: 'bg-[#0ea5e9]/10 text-[#0ea5e9]' },
                { name: 'Node.js', color: 'bg-[#22c55e]/10 text-[#22c55e]' },
                { name: 'Typescript', color: 'bg-[#2563eb]/10 text-[#2563eb]' },
                { name: 'Tailwind CSS', color: 'bg-[#06b6d4]/10 text-[#06b6d4]' },
                { name: 'PostgreSQL', color: 'bg-[#6366f1]/10 text-[#6366f1]' },
                { name: 'MongoDB', color: 'bg-[#10b981]/10 text-[#10b981]' },
                { name: 'Firebase', color: 'bg-[#eab308]/10 text-[#eab308]' },
                { name: 'Google Cloud', color: 'bg-[#60a5fa]/10 text-[#60a5fa]' },
                { name: 'Express', color: 'bg-white/5 text-gray-300' },
                { name: 'C++', color: 'bg-[#1d4ed8]/10 text-[#3b82f6]' },
              ].map((skill, idx) => (
                <span key={idx} className={`px-3 py-1.5 rounded-md font-medium text-xs flex items-center gap-1.5 border border-white/5 ${skill.color}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          
          {/* WORK HISTORY TIMELINE */}
          <div className="space-y-8 pt-10">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Work History</h3>
            <p className="text-text-muted font-light pb-4">
              Below you will find a summary of my past employment experience.
            </p>

            <div className="relative border-l-2 border-border ml-2 md:ml-3 space-y-12">
              
              {/* Job 1 */}
              <div className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-transform group-hover:scale-125"></div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">Software Engineer</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted font-medium">
                    <span className="text-white">AN GLOBAL SERVICES</span>
                    <span className="text-border">�</span>
                    <span>Full-time</span>
                  </div>
                  <div className="text-text-muted text-sm font-light">Dec 2025 - Present � 10 mos</div>
                  <ul className="list-disc list-inside text-text-muted space-y-2 mt-4 font-light text-sm md:text-base leading-relaxed marker:text-border">
                    <li>Working as a full-stack engineer developing scalable applications.</li>
                    <li>Utilizing Node.js, Next.js, and other modern web technologies.</li>
                  </ul>
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-transform group-hover:scale-125"></div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">Full-stack Developer</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted font-medium">
                    <span className="text-white">1clickdistributors</span>
                    <span className="text-border">�</span>
                    <span>Noida, India � On-site</span>
                  </div>
                  
                  {/* Full-time role */}
                  <div className="mt-4">
                    <div className="text-white font-medium">Full-time</div>
                    <div className="text-text-muted text-sm font-light">Jul 2025 - Nov 2025 � 5 mos</div>
                    <p className="text-text-muted font-light text-sm md:text-base mt-2">
                      Developed full-stack features using Next.js and React.js.
                    </p>
                  </div>

                  {/* Internship role */}
                  <div className="mt-4">
                    <div className="text-white font-medium">Internship</div>
                    <div className="text-text-muted text-sm font-light">Jan 2025 - Jun 2025 � 6 mos</div>
                    <p className="text-text-muted font-light text-sm md:text-base mt-2">
                      Started as an intern, working on core full-stack tasks with Next.js and Node.js.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* PROJECTS TIMELINE */}
          <div className="space-y-8 pt-10">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Featured Projects</h3>
            <p className="text-text-muted font-light pb-4">
              Below you will find a summary of my most recent and impactful projects.
            </p>

            <div className="relative border-l-2 border-border ml-2 md:ml-3 space-y-12">
              
              {/* Project 1 */}
              <div className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-transform group-hover:scale-125"></div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">AI Finance Tracker</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted font-medium">
                    <span className="text-accent">Personal Project</span>
                    <span className="text-border">•</span>
                    <span>Next.js, PostgreSQL, Gemini AI, Inngest</span>
                  </div>
                  <ul className="list-disc list-inside text-text-muted space-y-2 mt-4 font-light text-sm md:text-base leading-relaxed marker:text-border">
                    <li>Developed a full-stack finance tracker.</li>
                    <li>Integrated AI receipt scanning for automated data entry.</li>
                    <li>Built automated reporting and budget alerts.</li>
                  </ul>
                  <a href="https://expense-tracker-self-beta.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-white hover:text-accent transition-colors font-medium">
                    View Live App <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-transform group-hover:scale-125"></div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">Koop India CRM & Website</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted font-medium">
                    <span className="text-accent">Koop India</span>
                    <span className="text-border">•</span>
                    <span>Firebase, Node.js, Google Cloud</span>
                  </div>
                  <ul className="list-disc list-inside text-text-muted space-y-2 mt-4 font-light text-sm md:text-base leading-relaxed marker:text-border">
                    <li>Built the official business consulting website.</li>
                    <li>Developed a custom CRM to manage clients and support workflows.</li>
                    <li>Implemented secure Firebase authentication and deployed on GCP.</li>
                  </ul>
                  <a href="https://koopindia.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-white hover:text-accent transition-colors font-medium">
                    View Live Site <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-transform group-hover:scale-125"></div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">Carpet Mantra E-Commerce</h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted font-medium">
                    <span className="text-accent">Freelance</span>
                    <span className="text-border">•</span>
                    <span>React.js, Tailwind CSS</span>
                  </div>
                  <ul className="list-disc list-inside text-text-muted space-y-2 mt-4 font-light text-sm md:text-base leading-relaxed marker:text-border">
                    <li>Created a scalable e-commerce platform for buying carpets online.</li>
                    <li>Integrated secure payment gateways.</li>
                    <li>Optimized performance and ensured seamless user experience.</li>
                  </ul>
                  <a href="https://github.com/its-me-anubhav/carpet-mantra-ecommerce.git" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-white hover:text-accent transition-colors font-medium">
                    View Source Code <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
          
          {/* AWARDS TIMELINE */}
          <div className="space-y-8 pt-10">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Honors & Awards</h3>
            
            <div className="relative border-l-2 border-border ml-2 md:ml-3 space-y-10">
              <div className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[7px] top-1.5 transition-colors group-hover:bg-white"></div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">C++ Certificate of Excellence</h4>
                  <p className="text-text-muted text-sm font-light">Coding Ninjas — Introduction to C++ & advanced problem solving</p>
                </div>
              </div>
              <div className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[7px] top-1.5 transition-colors group-hover:bg-white"></div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">5★ Problem Solving</h4>
                  <p className="text-text-muted text-sm font-light">HackerRank — Top rating in Problem Solving domain</p>
                </div>
              </div>
              <div className="relative pl-8 md:pl-10 group">
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[7px] top-1.5 transition-colors group-hover:bg-white"></div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">DSA Practice</h4>
                  <p className="text-text-muted text-sm font-light">LeetCode — Solved multiple Data Structures & Algorithms problems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GET IN TOUCH */}
        <section id="contact" className="pt-24 pb-12 space-y-8">
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
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted">
          <p>© 2026 Built with <span className="text-red-500">❤️</span> by Anubhav Shakya</p>
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