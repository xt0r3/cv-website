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

export function ExperienceSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-12"
    >
      <div>
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Work Experience</h3>
        <div className="space-y-8">
          {researcher.experience.map(job => (
            <motion.div
              key={job.id}
              variants={item}
              className="group relative border-l-2 border-gray-200 dark:border-gray-700 pl-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-gray-200 dark:bg-gray-700 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors" />
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">{job.role}</h4>
              <p className="text-gray-600 dark:text-gray-400">{job.company} | {job.period}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Skills</h3>
        <motion.div 
          className="flex flex-wrap gap-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {researcher.skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={item}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
} 