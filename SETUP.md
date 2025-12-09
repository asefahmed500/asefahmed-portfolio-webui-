# Portfolio Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Git (optional, for version control)

## Installation Steps

### 1. Clone or Download the Project

\`\`\`bash
# If cloning from GitHub
git clone <repository-url>
cd asef-portfolio

# Or extract the downloaded ZIP file
\`\`\`

### 2. Install Dependencies

\`\`\`bash
# Using npm
npm install

# Or using pnpm
pnpm install

# Or using yarn
yarn install
\`\`\`

### 3. Setup Environment Variables

\`\`\`bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your information
# Update the portfolio name, email, phone, and social links
\`\`\`

### 4. Run Development Server

\`\`\`bash
# Using npm
npm run dev

# Or using pnpm
pnpm dev

# Or using yarn
yarn dev
\`\`\`

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

\`\`\`
asef-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── hero-section.tsx    # Hero section with animations
│   ├── about-section.tsx   # About and skills section
│   ├── experience-section.tsx # Work experience timeline
│   ├── projects-section.tsx # Projects showcase
│   ├── contact-section.tsx # Contact form and social links
│   ├── navigation.tsx      # Navigation bar
│   ├── welcome-modal.tsx   # Welcome popup animation
│   ├── custom-logo.tsx     # Custom animated logo
│   └── theme-provider.tsx  # Theme configuration
├── hooks/
│   ├── use-mobile.ts       # Mobile detection hook
│   └── use-toast.ts        # Toast notifications hook
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── .env.example            # Environment variables template
├── .env.local              # Local environment variables
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS configuration
└── package.json            # Project dependencies
\`\`\`

## Customization

### Update Portfolio Information

Edit `.env.local` to update:
- Portfolio name and title
- Email and phone number
- GitHub and LinkedIn profiles
- Portfolio URL

### Modify Colors and Theme

Edit `app/globals.css` to customize:
- Color scheme (primary, secondary, accent colors)
- Font families
- Border radius
- Animation speeds

### Add Your Profile Picture

Replace the placeholder image in `public/` with your profile picture and update the image path in `components/hero-section.tsx`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- etc.

## Troubleshooting

### Port 3000 Already in Use

\`\`\`bash
# Use a different port
npm run dev -- -p 3001
\`\`\`

### Dependencies Installation Issues

\`\`\`bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Build Errors

\`\`\`bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
\`\`\`

## Support

For issues or questions, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## License

This project is open source and available under the MIT License.
