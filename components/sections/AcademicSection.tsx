import React from 'react';
import { motion } from 'framer-motion';
import { researcher } from '../../data/researcher';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function AcademicSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-12"
    >
      <div>
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Education</h3>
        <div className="space-y-8">
          {researcher.education.map(edu => (
            <motion.div
              key={edu.id}
              variants={item}
              className="group relative border-l-2 border-gray-200 dark:border-gray-700 pl-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-gray-200 dark:bg-gray-700 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors" />
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">{edu.degree}</h4>
              <p className="text-gray-600 dark:text-gray-400">{edu.institution} | {edu.year}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Publications</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researcher.publications.map(pub => (
            <motion.div
              key={pub.id}
              variants={item}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
            >
              <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {pub.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{pub.journal} | {pub.year}</p>
              <a 
                href={pub.link} 
                className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center space-x-1 transition-colors"
              >
                <span>Read Paper</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 