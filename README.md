MamalWP - Personal Portfolio

A minimal personal portfolio website showcasing product design work, built with Next.js, React, and Tailwind CSS. Features a clean, retro-inspired design with case studies and an about section.

✨ Features
Clean Design: Simple, responsive layout with a focus on showcasing case studies.
Responsive Layout: Works on all devices with mobile-first design.
Modern Tech Stack: Built with Next.js 15, React 19, and TypeScript.
UI Components: Includes Shadcn UI setup for reusable components (e.g., buttons, cards).
SEO Optimized: Basic metadata and semantic structure.

🚀 Tech Stack
Framework: Next.js 15 (App Router)
Language: TypeScript
Styling: Tailwind CSS with PostCSS
UI Library: Shadcn UI (Radix UI primitives, Lucide icons)
Deployment: Vercel-ready with vercel.json configuration
Other: Class Variance Authority for component variants, Tailwind Merge for class management

## 📁 Project Structure

```
mamalwp/
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS setup for Tailwind
├── README.md            # Project documentation
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles and Tailwind imports
│   │   ├── layout.tsx   # Root layout component
│   │   └── page.tsx     # Main page rendering the Welcome component
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx  # Reusable Button component
│   │   │   └── card.tsx    # Reusable Card component
│   │   └── Welcome.tsx     # Main component containing navigation, hero, case studies, about, and footer sections
│   └── lib/
│       └── utils.ts     # Utility functions (e.g., class name merger)
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment settings
```
The core content is implemented in Welcome.tsx, which includes inline sections for navigation, hero, selected works (case studies), about, and footer.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mamalwp
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

### Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

This project is optimized for Vercel deployment. Follow these steps:

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js and configure the build
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Environment Variables

No environment variables are required.
🎯 Customization
Content: Edit Welcome.tsx to update sections like case studies, about text, links, and images.
Styling: Modify globals.css or Tailwind classes in components. Update colors and themes in tailwind.config.js.
Add Components: Use the Shadcn UI components in ui/ for new features (e.g., import Button from '@/components/ui/button').
📱 Responsive Design
Fully responsive with Tailwind's mobile-first breakpoints.
🔧 Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run start - Start production server
npm run lint - Run ESLint


## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Performance Features

- **Image Optimization** - Next.js built-in image optimization
- **Code Splitting** - Automatic route-based code splitting
- **Static Generation** - Pre-rendered pages for fast loading
- **CSS Optimization** - Purged unused CSS with Tailwind

## 📄 License

This project is open source and available under the [MIT License](LICENSE).



---

**Built with ❤️ and pixels by MamalP**
