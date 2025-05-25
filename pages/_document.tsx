import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="description" content="Dr. Alex Morgan - Senior Quantitative Researcher & Data Scientist. Transforming complex data into actionable insights through statistical modeling and machine learning." />
        <meta name="keywords" content="quantitative researcher, data scientist, machine learning, statistical modeling, financial analytics, portfolio optimization" />
        <meta name="author" content="Dr. Alex Morgan" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. Alex Morgan - Quantitative Researcher" />
        <meta property="og:description" content="Senior Quantitative Researcher & Data Scientist specializing in statistical modeling and machine learning applications." />
        <meta property="og:image" content="/api/placeholder/1200/630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Dr. Alex Morgan - Quantitative Researcher" />
        <meta property="twitter:description" content="Senior Quantitative Researcher & Data Scientist specializing in statistical modeling and machine learning applications." />
        <meta property="twitter:image" content="/api/placeholder/1200/630" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Theme color */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/api/placeholder/48/48" as="image" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 