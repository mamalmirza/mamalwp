# MamalWP - Personal Portfolio

A minimal pixelized personal portfolio website built with Next.js, React, and Tailwind CSS. Features a retro pixel art aesthetic with modern web technologies.

## ✨ Features

- **Minimal Pixelized Design** - Clean, retro aesthetic with pixel-perfect borders and shadows
- **Responsive Layout** - Mobile-first design that works on all devices
- **Interactive Components** - Hover effects, animations, and smooth transitions
- **Modern Tech Stack** - Built with Next.js 15, React 19, and TypeScript
- **Custom Styling** - Pixelized UI components with Tailwind CSS
- **SEO Optimized** - Proper metadata and semantic HTML structure

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Press Start 2P (retro), Courier New (monospace)
- **Deployment**: Vercel-ready

## 🎨 Design Features

- Pixel-perfect borders with custom box-shadows
- Retro gaming aesthetic with pixel art elements
- Smooth hover animations and transitions
- Custom color palette (black, white, green accent)
- Responsive grid layouts
- Interactive form elements

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills and expertise
│   ├── Projects.tsx     # Portfolio projects
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
```

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

No environment variables are required for basic functionality. The project is ready to deploy out of the box.

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  'pixel-black': '#000000',
  'pixel-white': '#FFFFFF',
  'pixel-gray': '#808080',
  'pixel-dark': '#1a1a1a',
  'pixel-accent': '#00FF00', // Change this for your brand color
}
```

### Content
- Update personal information in component files
- Replace project data in `Projects.tsx`
- Modify skills and experience in `Skills.tsx`
- Update contact information in `Contact.tsx`

### Styling
- Modify `globals.css` for custom CSS
- Update component classes for different layouts
- Adjust animations in `tailwind.config.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

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

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with deployment, feel free to open an issue or contact me.

---

**Built with ❤️ and pixels by MamalWP**
