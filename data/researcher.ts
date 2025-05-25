export interface Researcher {
  name: string;
  title: string;
  bio: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  skills: string[];
  experience: {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    id: number;
    degree: string;
    institution: string;
    year: string;
    description: string;
  }[];
  publications: {
    id: number;
    title: string;
    journal: string;
    year: string;
    link: string;
  }[];
  blogPosts: {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    link: string;
  }[];
}

export const researcher: Researcher = {
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