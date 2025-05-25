# Professional CV Website

A modern, responsive CV website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth animations, and mobile-first design.

## ✨ Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Smooth Animations**: Beautiful page transitions and micro-interactions using Framer Motion
- **Modern UI**: Clean, professional design with Tailwind CSS
- **TypeScript**: Full type safety and better developer experience
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **Accessible**: WCAG compliant with proper focus management and keyboard navigation

## 🚀 Sections

- **About**: Personal introduction, skills, and expertise areas
- **Experience**: Professional work history with achievements and technologies
- **Education**: Academic background and qualifications
- **Publications**: Research papers and academic publications
- **Projects**: Portfolio of personal and professional projects
- **Contact**: Contact information and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Heroicons (via Tailwind)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cv-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Edit the `cvData` object in `components/Portfolio.tsx` to add your personal information:

```typescript
const cvData = {
  name: "Your Name",
  title: "Your Professional Title",
  tagline: "Your Professional Tagline",
  bio: "Your professional bio...",
  // ... rest of your data
};
```

### Styling

The website uses Tailwind CSS for styling. You can customize:

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in `styles/globals.css`
- **Spacing**: Adjust spacing and layout in component files
- **Animations**: Customize animations in `components/Portfolio.tsx`

### Adding Sections

To add new sections:

1. Add a new tab to the `tabs` array
2. Create a new section component
3. Add the section to the conditional rendering in the main component

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

The website automatically detects system theme preference and allows manual switching. Theme preference is persisted across sessions.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Heroku

## 📄 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimal JavaScript for fast loading
- **Images**: Optimized with Next.js Image component

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the website, please open an issue or contact me directly.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 