# StudyFlow Agent

> Turn Any Topic Into a Personalized Study Plan in Minutes

**A Hackathon 2025 Project by Athandile Tetyana & Linford Musiyambodza**

Powered by Perplexity Comet AI

## 🎯 Overview

StudyFlow Agent is an AI-powered study assistant that automatically generates comprehensive, personalized study packages for any topic. In just 30 seconds, it transforms your study topic into a complete learning plan with smart research, structured summaries, personalized roadmaps, and self-assessment tools.

## ✨ Key Features

- **🔍 Smart Research**: Automatically finds and summarizes the best resources
- **📚 Structured Learning**: Content organized by concepts, applications, and misconceptions
- **📅 Personalized Roadmap**: 5-day study plan with time estimates
- **✏️ Self-Assessment**: Practice quizzes and digital flashcards
- **⏱️ Time Estimates**: Know exactly how long each task takes

## 🚀 Live Demo

[View Live Presentation](https://lovable.dev/projects/e516dffd-3b3c-4888-b28c-36c40207a30b)

## 💻 Tech Stack

This project is built with modern web technologies:

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: TanStack Query

## 🎨 Presentation Structure

The application is a full-screen presentation with 9 slides:

1. **Title Slide** - Introduction to StudyFlow Agent
2. **The Problem** - Challenges students face
3. **The Solution** - How StudyFlow Agent helps
4. **How It Works** - Workflow diagram
5. **Key Features** - Core functionality breakdown
6. **Live Demo** - Real example (Black Rhino Conservation)
7. **Impact & Use Cases** - Metrics and applications
8. **Roadmap** - Future development plans
9. **Get Started** - Team introduction and CTA

### Navigation Controls:
- **Keyboard**: Arrow keys (←/→ or ↑/↓), Home, End
- **Mouse**: Click navigation buttons or slide indicators
- **Touch**: Tap navigation buttons

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ and npm (or use [nvm](https://github.com/nvm-sh/nvm))

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Via Vercel CLI:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

2. **Via Vercel Dashboard:**
- Push your code to GitHub
- Import repository in [Vercel Dashboard](https://vercel.com/new)
- Vercel will auto-detect Vite and configure correctly
- Click "Deploy"

3. **Via Lovable:**
- Click "Publish" button in Lovable editor
- Or navigate to Project > Settings > Domains

### Environment Variables
No environment variables required for basic deployment.

## 📁 Project Structure

```
src/
├── components/
│   ├── slides/           # Individual presentation slides
│   │   ├── Slide1TitleSlide.tsx
│   │   ├── Slide2Problem.tsx
│   │   ├── Slide3Solution.tsx
│   │   ├── Slide4HowItWorks.tsx
│   │   ├── Slide5KeyFeatures.tsx
│   │   ├── Slide6LiveDemo.tsx
│   │   ├── Slide7Impact.tsx
│   │   ├── Slide8Roadmap.tsx
│   │   └── Slide9ThankYou.tsx
│   ├── ui/               # Reusable UI components (shadcn)
│   └── Presentation.tsx  # Main presentation container
├── pages/
│   ├── Index.tsx         # Home page
│   └── NotFound.tsx      # 404 page
├── assets/               # Images and static files
├── lib/                  # Utility functions
├── App.tsx               # App root component
└── main.tsx              # Application entry point
```

## 👥 Team

### Athandile Tetyana
**Aspiring Software Developer**  
[LinkedIn](https://linkedin.com/in/athandile-tetyana-639115343)

### Linford Musiyambodza
**Founder & Full-Stack Developer**  
[LinkedIn](https://linkedin.com/in/linfordlee14)

## 📋 Roadmap

### Q1 2026
- Mobile app
- Study group collaboration

### Q2 2026
- AI tutor chatbot
- Real-time progress tracking
- Platform integrations

### Q3 2026
- Voice-based input
- Community study resources

## 📄 License

This project was created for Hackathon 2025.

## 🤝 Contributing

This is a hackathon submission project. For questions or collaboration inquiries, please reach out to the team members via LinkedIn.

## 🔗 Links

- [Lovable Project](https://lovable.dev/projects/e516dffd-3b3c-4888-b28c-36c40207a30b)
- [Documentation](https://docs.lovable.dev)

---

**Built with ❤️ using [Lovable](https://lovable.dev)**
