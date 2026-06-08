# Saatwik Tiwari - AI Career Portfolio

A modern, production-ready portfolio website built with Next.js, React, and Tailwind CSS, featuring an AI-powered copilot using the Groq API.

## Features

- **Dark/Light Mode Toggle**: Seamless theme switching with persistent preferences
- **Responsive Design**: Fully responsive across all devices
- **AI Copilot**: Groq-powered conversational AI assistant
- **Smooth Animations**: CSS-based animations for enhanced UX
- **SEO Optimized**: Meta tags and structured content
- **Production Ready**: Optimized for Vercel deployment

## Project Structure

```
.
├── components/          # React components
│   ├── Navbar.tsx      # Navigation with theme toggle
│   ├── Hero.tsx        # Hero section with intro
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects display
│   ├── Contact.tsx     # Contact information
│   └── Copilot.tsx     # AI copilot chat interface
├── pages/
│   ├── _app.tsx        # App wrapper with theme provider
│   ├── index.tsx       # Main portfolio page
│   └── api/
│       └── chat.ts     # Groq API endpoint
├── styles/
│   └── globals.css     # Global styles with Tailwind
├── public/             # Static assets
├── package.json        # Dependencies
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS config
├── tsconfig.json       # TypeScript config
└── .env.local          # Environment variables (local)
```

## Local Development

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Clone or Download the Repository**
   ```bash
   cd saatwik-ai-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**
   The `.env.local` file is already configured with the Groq API key.

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

## Deployment to Vercel

### Method 1: Direct Deployment (Easiest)

1. **Visit Vercel Dashboard**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign in or create an account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Paste your GitHub URL (or upload the folder)

3. **Configure Environment Variables**
   - In the Vercel dashboard, go to Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GROQ_API_KEY` = `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`
   - Click "Deploy"

### Method 2: Drag and Drop (Easiest for This Folder)

1. **Build the Project Locally**
   ```bash
   npm run build
   ```

2. **Visit Vercel CLI or Dashboard**
   - Option A: Install Vercel CLI
     ```bash
     npm i -g vercel
     vercel
     ```
   - Option B: Use Vercel Web Interface
     - Zip the project folder
     - Go to [https://vercel.com/import](https://vercel.com/import)
     - Upload the zip file

3. **Set Environment Variables**
   - Once uploaded, add the environment variables in project settings
   - Redeploy if needed

### Method 3: GitHub Integration (Recommended for Updates)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [https://vercel.com](https://vercel.com)
   - Import GitHub repository
   - Add environment variables
   - Auto-deploys on every push

## Customization

### Update Personal Information

**Hero Section** (`components/Hero.tsx`):
- Update email and phone
- Modify introduction text

**About Section** (`components/About.tsx`):
- Update background information
- Modify interests

**Skills Section** (`components/Skills.tsx`):
- Add/remove skill categories
- Update skill lists

**Projects Section** (`components/Projects.tsx`):
- Add new projects
- Update project descriptions

**Contact Section** (`components/Contact.tsx`):
- Update contact methods
- Add social links

### Customize AI Copilot

Edit `pages/api/chat.ts`:
- Modify `systemPrompt` to change AI behavior
- Update portfolio information in the prompt

### Theme Customization

Edit `tailwind.config.js`:
- Change primary color: `#6366f1`
- Change secondary color: `#8b5cf6`
- Modify fonts and animations

## Environment Variables

Create or update `.env.local`:

```
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
```

## Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Groq API**: AI-powered chat
- **Node.js**: Backend runtime

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- CSS-only animations for smooth 60fps
- Image optimization via Next.js
- Fast API responses with Groq

## SEO

- Meta tags for social sharing
- Responsive design with mobile-first approach
- Semantic HTML structure
- Fast page load times

## Troubleshooting

### Copilot Not Responding
- Check Groq API key in `.env.local`
- Verify API key has appropriate permissions
- Check browser console for errors

### Theme Not Persisting
- Clear browser localStorage
- Check if dark mode is supported in your browser

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Contact & Support

For questions or issues:
- Email: saatwik.mail@gmail.com
- Phone: +91 9045 330 144
- LinkedIn: [linkedin.com/in/saatwiktiwari](https://linkedin.com/in/saatwiktiwari)
- GitHub: [github.com/saatwiktiwari](https://github.com/saatwiktiwari)

## License

This project is personal portfolio work. Feel free to use it as a template for your own portfolio.

---

Built with attention to detail and modern web development practices. Powered by Next.js, Groq AI, and Tailwind CSS.
