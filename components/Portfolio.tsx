import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // CV Data - Replace with your actual information
  const cvData = {
    name: "Dr. Alex Morgan",
    title: "Senior Quantitative Researcher & Data Scientist",
    tagline: "Transforming complex data into actionable insights",
    bio: "Passionate quantitative researcher with 8+ years of experience in statistical modeling, machine learning, and financial analytics. I specialize in developing innovative approaches to predictive analytics and risk assessment using cutting-edge technologies.",
    location: "San Francisco, CA",
    contact: {
      email: "alex.morgan@example.com",
      phone: "+1 (555) 123-4567",
      linkedin: "linkedin.com/in/alexmorgan",
      github: "github.com/alexmorgan",
      website: "alexmorgan.dev"
    },
    skills: {
      technical: [
        "Python", "R", "SQL", "TensorFlow", "PyTorch", "Scikit-learn",
        "Pandas", "NumPy", "Apache Spark", "Docker", "Kubernetes"
      ],
      statistical: [
        "Time Series Analysis", "Bayesian Methods", "Monte Carlo Simulation",
        "Hypothesis Testing", "Regression Analysis", "Survival Analysis"
      ],
      domains: [
        "Financial Modeling", "Risk Management", "Algorithmic Trading",
        "Healthcare Analytics", "A/B Testing", "Fraud Detection"
      ]
    },
    experience: [
      {
        id: 1,
        role: "Senior Quantitative Researcher",
        company: "FinTech Innovations Inc.",
        location: "San Francisco, CA",
        period: "2021 - Present",
        description: "Leading a team of 5 data scientists to develop next-generation trading algorithms and risk models.",
        achievements: [
          "Improved trading strategy performance by 23% through novel ML approaches",
          "Reduced model training time by 40% using distributed computing",
          "Published 3 papers in top-tier journals on financial ML applications"
        ],
        technologies: ["Python", "TensorFlow", "Apache Spark", "PostgreSQL"]
      },
      {
        id: 2,
        role: "Research Scientist",
        company: "DataDriven Health Solutions",
        location: "Boston, MA",
        period: "2018 - 2021",
        description: "Developed predictive models for patient outcomes and clinical decision support systems.",
        achievements: [
          "Created ML pipeline that improved patient outcome predictions by 35%",
          "Led cross-functional team of 8 researchers and clinicians",
          "Secured $2.5M in research funding from NIH and private foundations"
        ],
        technologies: ["R", "Python", "PyTorch", "MongoDB", "AWS"]
      },
      {
        id: 3,
        role: "Quantitative Analyst",
        company: "Global Investment Partners",
        location: "New York, NY",
        period: "2015 - 2018",
        description: "Developed risk assessment models and algorithmic trading strategies for institutional clients.",
        achievements: [
          "Built volatility prediction framework reducing forecast errors by 28%",
          "Managed portfolio of $500M+ in quantitative strategies",
          "Mentored 3 junior analysts and 2 summer interns"
        ],
        technologies: ["MATLAB", "Python", "C++", "Bloomberg API"]
      }
    ],
    education: [
      {
        id: 1,
        degree: "Ph.D. in Statistics",
        institution: "Stanford University",
        location: "Stanford, CA",
        year: "2015",
        gpa: "3.9/4.0",
        thesis: "Non-parametric Approaches to Financial Time Series Analysis",
        advisor: "Prof. Sarah Johnson"
      },
      {
        id: 2,
        degree: "M.S. in Applied Mathematics",
        institution: "Massachusetts Institute of Technology",
        location: "Cambridge, MA",
        year: "2012",
        gpa: "3.8/4.0",
        thesis: "Stochastic Modeling of Market Dynamics"
      },
      {
        id: 3,
        degree: "B.S. in Mathematics and Computer Science",
        institution: "University of Michigan",
        location: "Ann Arbor, MI",
        year: "2010",
        gpa: "3.9/4.0",
        honors: "Summa Cum Laude, Phi Beta Kappa"
      }
    ],
    publications: [
      {
        id: 1,
        title: "Transformer Networks for High-Frequency Financial Time Series Prediction",
        authors: "A. Morgan, S. Chen, M. Rodriguez",
        journal: "Journal of Machine Learning Research",
        year: "2023",
        volume: "24",
        pages: "1-28",
        citations: 45,
        link: "#"
      },
      {
        id: 2,
        title: "Bayesian Deep Learning for Healthcare Outcome Prediction",
        authors: "A. Morgan, K. Patel, L. Williams",
        journal: "Nature Machine Intelligence",
        year: "2022",
        volume: "4",
        pages: "123-135",
        citations: 78,
        link: "#"
      },
      {
        id: 3,
        title: "Neural ODEs for Financial Volatility Modeling",
        authors: "A. Morgan, J. Thompson",
        journal: "Quantitative Finance",
        year: "2021",
        volume: "21",
        pages: "456-472",
        citations: 62,
        link: "#"
      }
    ],
    projects: [
      {
        id: 1,
        title: "Real-time Market Anomaly Detection",
        description: "ML system for detecting unusual market patterns and potential trading opportunities",
        technologies: ["Python", "Kafka", "Redis", "TensorFlow"],
        github: "github.com/alexmorgan/market-anomaly",
        demo: "demo.alexmorgan.dev/anomaly",
        image: "/api/placeholder/400/250"
      },
      {
        id: 2,
        title: "Clinical Decision Support System",
        description: "AI-powered platform for assisting healthcare professionals in diagnosis and treatment planning",
        technologies: ["PyTorch", "FastAPI", "React", "PostgreSQL"],
        github: "github.com/alexmorgan/clinical-ai",
        demo: "demo.alexmorgan.dev/clinical",
        image: "/api/placeholder/400/250"
      },
      {
        id: 3,
        title: "Cryptocurrency Portfolio Optimizer",
        description: "Automated portfolio management system using modern portfolio theory and ML",
        technologies: ["Python", "Streamlit", "Plotly", "CoinGecko API"],
        github: "github.com/alexmorgan/crypto-optimizer",
        demo: "demo.alexmorgan.dev/crypto",
        image: "/api/placeholder/400/250"
      }
    ]
  };

  const tabs = [
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'publications', label: 'Publications', icon: '📚' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📧' }
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

  // About Section
  const AboutSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {cvData.tagline}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          {cvData.bio}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.technical.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Statistical Methods</h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.statistical.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Domain Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.domains.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  // Experience Section
  const ExperienceSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {cvData.experience.map((job, index) => (
        <motion.div
          key={job.id}
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{job.company}</p>
              <p className="text-gray-600 dark:text-gray-300">{job.location}</p>
            </div>
            <span className="mt-2 lg:mt-0 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
              {job.period}
            </span>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
          
          <div className="space-y-2 mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
            <ul className="space-y-1">
              {job.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {job.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // Education Section
  const EducationSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {cvData.education.map((edu) => (
        <motion.div
          key={edu.id}
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{edu.institution}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.location}</p>
              {edu.gpa && (
                <p className="text-gray-600 dark:text-gray-300">GPA: {edu.gpa}</p>
              )}
            </div>
            <span className="mt-2 lg:mt-0 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
              {edu.year}
            </span>
          </div>
          
          {edu.thesis && (
            <div className="mb-2">
              <span className="font-semibold text-gray-900 dark:text-white">Thesis: </span>
              <span className="text-gray-700 dark:text-gray-300">{edu.thesis}</span>
            </div>
          )}
          
          {edu.advisor && (
            <div className="mb-2">
              <span className="font-semibold text-gray-900 dark:text-white">Advisor: </span>
              <span className="text-gray-700 dark:text-gray-300">{edu.advisor}</span>
            </div>
          )}
          
          {edu.honors && (
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">Honors: </span>
              <span className="text-gray-700 dark:text-gray-300">{edu.honors}</span>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );

  // Publications Section
  const PublicationsSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {cvData.publications.map((pub) => (
        <motion.div
          key={pub.id}
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{pub.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">{pub.authors}</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-blue-600 dark:text-blue-400 font-semibold">
              {pub.journal} ({pub.year})
            </p>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Citations: {pub.citations}
              </span>
              <a
                href={pub.link}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
              >
                Read Paper →
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // Projects Section
  const ProjectsSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {cvData.projects.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a
                href={`https://${project.github}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
              >
                GitHub
              </a>
              <a
                href={`https://${project.demo}`}
                className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm font-medium"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // Contact Section
  const ContactSection = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
        <p className="text-gray-600 dark:text-gray-300">
          I'm always interested in discussing new opportunities and collaborations.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-blue-400">📧</span>
              <a
                href={`mailto:${cvData.contact.email}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {cvData.contact.email}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-blue-400">📱</span>
              <a
                href={`tel:${cvData.contact.phone}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {cvData.contact.phone}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-blue-400">🌐</span>
              <a
                href={`https://${cvData.contact.website}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {cvData.contact.website}
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-blue-400">💼</span>
              <a
                href={`https://${cvData.contact.linkedin}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-blue-400">🐙</span>
              <a
                href={`https://${cvData.contact.github}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 dark:text-blue-400">📍</span>
              <span className="text-gray-700 dark:text-gray-300">{cvData.location}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img
                className="h-12 w-12 rounded-full border-2 border-blue-500"
                src="/api/placeholder/48/48"
                alt="Profile"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">{cvData.name}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">{cvData.title}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MobileMenu tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation - Hidden on mobile */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'about' && <AboutSection />}
            {activeTab === 'experience' && <ExperienceSection />}
            {activeTab === 'education' && <EducationSection />}
            {activeTab === 'publications' && <PublicationsSection />}
            {activeTab === 'projects' && <ProjectsSection />}
            {activeTab === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} {cvData.name}. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio; 