'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'contact', label: 'Contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const AboutSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
          KS
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Kornel György Szabó
        </h1>
        <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
          Quantitative Researcher / Software Engineer
        </p>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Experienced quantitative researcher and software engineer with expertise in algorithmic trading, 
          competitive programming, and AI policy. Currently working at Jump Trading Amsterdam, 
          with previous experience at Hudson River Trading and various fintech projects.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['C++', 'Python', 'Rust', 'JavaScript', 'VueJS', 'Firebase', 'Algorithmic Trading', 'Market Simulation'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Specializations</h3>
          <div className="flex flex-wrap gap-2">
            {['Quantitative Research', 'OTC Options', 'Cryptocurrency Trading', 'Competitive Programming', 'AI Policy'].map((spec) => (
              <span key={spec} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {['English', 'German', 'Hungarian'].map((lang) => (
              <span key={lang} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const ExperienceSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Professional Experience
      </motion.h2>

      {[
        {
          company: 'Jump Trading',
          position: 'Quantitative Researcher',
          period: '2024/09 - Present',
          location: 'Amsterdam',
          description: 'One of the two university graduates accepted by Jump Trading\'s Amsterdam office this year',
          achievements: [],
          technologies: []
        },
        {
          company: 'Hudson River Trading',
          position: 'Quantitative Trading Intern',
          period: '2023/07 - 2023/09',
          location: 'London',
          description: 'Return internship position working on OTC options trades and trading around dividends',
          achievements: [
            'Only intern in the London office who received a full-time offer'
          ],
          technologies: []
        },
        {
          company: 'Hudson River Trading',
          position: 'Software Engineering Intern',
          period: '2022/07 - 2022/09',
          location: 'London',
          description: 'Completed an 11-week internship on the core markets team',
          achievements: [
            'Built infrastructure for trading systems in C++ and Python',
            'Developed market simulator and optimized order sending',
            'Created version control tools',
            'Reported and fixed bugs in production test and build system'
          ],
          technologies: ['C++', 'Python']
        },
        {
          company: 'Alphacademy',
          position: 'L6 Teacher',
          period: '2021/03 - 2023/09',
          location: 'Remote',
          description: 'A Hungarian tutoring startup with 500+ students',
          achievements: [
            'Tutored competitive programming for 20 students aged 10-18',
            'Managed a group of 11 teachers and 6 managers',
            'Worked on Alphacademy\'s international expansion'
          ],
          technologies: []
        }
      ].map((job, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.position}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
              <p className="text-gray-500 dark:text-gray-400">{job.location}</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{job.period}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
          {job.achievements.length > 0 && (
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          )}
          {job.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );

  const EducationSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Education
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Computer Science BA</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">University of Cambridge</p>
            <p className="text-gray-500 dark:text-gray-400">Cambridge, United Kingdom</p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2021-2024</span>
        </div>
      </motion.div>
    </motion.div>
  );

  const ProjectsSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Large Projects
      </motion.h2>

      {[
        {
          title: 'Digital Transformation Consulting',
          period: '2023/06 - 2023/09',
          role: 'Consultant',
          description: 'Advised the Japanese government on AI policy, compiling research findings and proposing measures for reducing AI inequalities',
          technologies: ['AI Policy', 'Research', 'Government Consulting'],
          gradient: 'from-blue-400 to-cyan-500'
        },
        {
          title: 'Cryptocurrency Trading',
          period: '2021/11 - 2022/06',
          role: 'Software Engineer',
          description: 'Algorithmic trading in Python and later Rust with a team of ~10 people. Created connectors for crypto exchanges (PerpV2, Drift, dYdX) with approximately $240k annual PnL',
          technologies: ['Python', 'Rust', 'Algorithmic Trading', 'Crypto Exchanges'],
          gradient: 'from-green-400 to-emerald-500'
        },
        {
          title: 'Alphatron',
          period: '2021/12 - 2022/12',
          role: 'Main Organiser',
          description: 'A contest aimed at making computer science more inclusive by targeting students with fewer available resources. First edition reached 700 people across United States, Hungary, Singapore, Lithuania and Sweden',
          technologies: ['VueJS', 'Firebase', 'Event Organization'],
          gradient: 'from-purple-400 to-pink-500'
        }
      ].map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-t-lg mb-4 -mt-6 -mx-6`}></div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{project.role}</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{project.period}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div variants={itemVariants} className="mt-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Small Projects</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'FastAI Practical Deep Learning',
            'ARENA 2.0 transformers/RL (self-taught)',
            'AI Hype Monitor',
            'Few-shot text-to-image models'
          ].map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <p className="text-gray-900 dark:text-white font-medium">{project}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  const AwardsSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Awards & Achievements
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: 'International Mathematical Olympiad (IMO)',
            award: 'Bronze Medal',
            icon: '🥉',
            color: 'from-amber-400 to-orange-500'
          },
          {
            title: 'International Olympiad in Informatics (IOI)',
            award: 'Bronze Medal',
            icon: '🥉',
            color: 'from-amber-400 to-orange-500'
          },
          {
            title: 'Cambridge Hackathon (HackAtlas)',
            award: 'Top 5',
            icon: '🏆',
            color: 'from-blue-400 to-purple-500'
          },
          {
            title: 'Google Code Jam',
            award: '534th place',
            icon: '💻',
            color: 'from-green-400 to-blue-500'
          },
          {
            title: 'Morgan Stanley Amigos Hackathon',
            award: '1st Place',
            icon: '🥇',
            color: 'from-yellow-400 to-orange-500'
          }
        ].map((achievement, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className={`w-full h-2 bg-gradient-to-r ${achievement.color} rounded-t-lg mb-4 -mt-6 -mx-6`}></div>
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">{achievement.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{achievement.award}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const ContactSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Contact & References
      </motion.h2>

      <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          For professional inquiries and collaboration opportunities, please reach out through professional networks.
        </p>
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">References</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white">Agoston Weisz</h4>
              <p className="text-gray-600 dark:text-gray-300">Google L7 Software Engineer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Languages: English / German / Hungarian</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white">Brittany Rhoa</h4>
              <p className="text-gray-600 dark:text-gray-300">Campus Recruiter at Hudson River Trading</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'awards':
        return <AwardsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold">
                KS
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Kornel György Szabó</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Quantitative Researcher</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Navigation */}
      <nav className="hidden md:block bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Portfolio; 