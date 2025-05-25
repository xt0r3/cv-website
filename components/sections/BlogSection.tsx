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

export function BlogSection() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Recent Posts</h3>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {researcher.blogPosts.map(post => (
          <motion.div
            key={post.id}
            variants={item}
            className="group p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md rounded-lg transition-shadow"
          >
            <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{post.date}</p>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{post.excerpt}</p>
            <a 
              href={post.link} 
              className="mt-4 inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <span>Continue Reading</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 