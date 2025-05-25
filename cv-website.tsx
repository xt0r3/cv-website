import React, { useState } from 'react';

const PortfolioWebsite = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  // Mock data for a quantitative researcher
  const researcher = {
    name: "Dr. Alex Morgan",
    title: "Quantitative Researcher",
    bio: "I specialize in statistical modeling and machine learning applications in finance and healthcare. My research focuses on developing novel approaches to predictive analytics using time series data.",
    contact: {
      email: "alex.morgan@example.com",
      linkedin: "linkedin.com/in/alexmorgan",
      github: "github.com/alexmorgan",
      twitter: "twitter.com/alexmorgan"
    },
    skills: [
      "Statistical Modeling", "Machine Learning", "Time Series Analysis", 
      "R", "Python", "TensorFlow", "PyTorch", "SQL", "Bayesian Methods"
    ],
    experience: [
      {
        id: 1,
        role: "Senior Quantitative Researcher",
        company: "FinTech Innovations",
        period: "2021 - Present",
        description: "Leading a team of data scientists to develop predictive models for market behavior. Implemented machine learning algorithms that improved trading strategy performance by 18%."
      },
      {
        id: 2,
        role: "Research Scientist",
        company: "DataDriven Health",
        period: "2018 - 2021",
        description: "Developed statistical models for predicting patient outcomes based on electronic health records. Published 3 papers in leading journals on applications of deep learning in healthcare."
      },
      {
        id: 3,
        role: "Quantitative Analyst",
        company: "Global Investment Corp",
        period: "2015 - 2018",
        description: "Created risk assessment models and trading algorithms. Developed a novel volatility prediction framework that reduced forecast errors by 23%."
      }
    ],
    education: [
      {
        id: 1,
        degree: "Ph.D. in Statistics",
        institution: "Stanford University",
        year: "2015",
        description: "Dissertation: 'Non-parametric Approaches to Financial Time Series Analysis'"
      },
      {
        id: 2,
        degree: "M.S. in Applied Mathematics",
        institution: "MIT",
        year: "2012",
        description: "Thesis: 'Stochastic Modeling of Market Dynamics'"
      },
      {
        id: 3,
        degree: "B.S. in Mathematics and Computer Science",
        institution: "University of Michigan",
        year: "2010",
        description: "Graduated summa cum laude"
      }
    ],
    publications: [
      {
        id: 1,
        title: "Novel Applications of Transformers in Time Series Forecasting",
        journal: "Journal of Machine Learning Research",
        year: "2023",
        link: "#"
      },
      {
        id: 2,
        title: "Bayesian Methods for Healthcare Outcome Prediction",
        journal: "Nature Communications",
        year: "2022",
        link: "#"
      },
      {
        id: 3,
        title: "Deep Learning Approaches to Financial Volatility Modeling",
        journal: "Quantitative Finance",
        year: "2020",
        link: "#"
      }
    ],
    blogPosts: [
      {
        id: 1,
        title: "The Future of Quant Research in the Age of LLMs",
        date: "Mar 15, 2025",
        excerpt: "Exploring how large language models are transforming the landscape of quantitative research and what this means for the future of the field.",
        link: "#"
      },
      {
        id: 2,
        title: "Implementing Neural ODEs for Time Series Analysis",
        date: "Feb 2, 2025",
        excerpt: "A practical guide to using Neural Ordinary Differential Equations for advanced time series forecasting in finance.",
        link: "#"
      },
      {
        id: 3,
        title: "Reproducibility Crisis in ML Research",
        date: "Jan 10, 2025",
        excerpt: "Examining the challenges of reproducibility in machine learning research and proposing solutions to improve scientific rigor.",
        link: "#"
      }
    ]
  };

  // Component for navigation tabs
  const NavTabs = () => (
    <div className="flex justify-center mb-12 border-b border-gray-200">
      <button 
        className={`px-6 py-3 text-sm font-medium ${activeTab === 'experience' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        onClick={() => setActiveTab('experience')}
      >
        Experience
      </button>
      <button 
        className={`px-6 py-3 text-sm font-medium ${activeTab === 'academic' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        onClick={() => setActiveTab('academic')}
      >
        Academic
      </button>
      <button 
        className={`px-6 py-3 text-sm font-medium ${activeTab === 'blog' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        onClick={() => setActiveTab('blog')}
      >
        Blog
      </button>
    </div>
  );

  // Experience Section
  const ExperienceSection = () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
        <div className="space-y-8">
          {researcher.experience.map(job => (
            <div key={job.id} className="border-l-2 border-gray-200 pl-4 hover:border-blue-500 transition-colors">
              <h4 className="text-lg font-medium">{job.role}</h4>
              <p className="text-gray-600">{job.company} | {job.period}</p>
              <p className="mt-2 text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-6">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {researcher.skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // Academic Section
  const AcademicSection = () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl font-semibold mb-6">Education</h3>
        <div className="space-y-8">
          {researcher.education.map(edu => (
            <div key={edu.id} className="border-l-2 border-gray-200 pl-4 hover:border-blue-500 transition-colors">
              <h4 className="text-lg font-medium">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution} | {edu.year}</p>
              <p className="mt-2 text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-6">Publications</h3>
        <div className="space-y-4">
          {researcher.publications.map(pub => (
            <div key={pub.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h4 className="text-lg font-medium">{pub.title}</h4>
              <p className="text-gray-600">{pub.journal} | {pub.year}</p>
              <a href={pub.link} className="mt-2 text-blue-600 hover:text-blue-800 inline-block">Read Paper →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Blog Section
  const BlogSection = () => (
    <div>
      <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
      <div className="space-y-8">
        {researcher.blogPosts.map(post => (
          <div key={post.id} className="p-6 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-lg font-medium">{post.title}</h4>
            <p className="text-gray-500 text-sm mt-1">{post.date}</p>
            <p className="mt-3 text-gray-700">{post.excerpt}</p>
            <a href={post.link} className="mt-4 text-blue-600 hover:text-blue-800 inline-block">Continue Reading →</a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <h1 className="text-3xl font-bold text-gray-900">{researcher.name}</h1>
              <h2 className="mt-1 text-xl text-gray-600">{researcher.title}</h2>
              <p className="mt-4 text-gray-700">{researcher.bio}</p>
              
              <div className="mt-6 flex space-x-4">
                <a href={`mailto:${researcher.contact.email}`} className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
                <a href={`https://${researcher.contact.linkedin}`} className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href={`https://${researcher.contact.github}`} className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href={`https://${researcher.contact.twitter}`} className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <img 
                className="h-40 w-40 rounded-full mx-auto md:mx-0 border-4 border-white shadow-lg" 
                src="/api/placeholder/160/160" 
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <NavTabs />
        
        {activeTab === 'experience' && <ExperienceSection />}
        {activeTab === 'academic' && <AcademicSection />}
        {activeTab === 'blog' && <BlogSection />}
        
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} {researcher.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;