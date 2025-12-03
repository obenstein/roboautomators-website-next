# Roboautomators Website

Next.js 15 website for Roboautomators - a robotics education platform.

## Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, AOS
- **Auth**: NextAuth.js
- **UI Components**: Headless UI, React Slick

## Project Structure

```
src/app/
├── (site)/           # Public site pages
├── api/              # API routes (data endpoints)
├── components/       # React components
│   ├── Home/        # Homepage sections (Hero, Courses, Highlights, etc.)
│   ├── Auth/        # Authentication components
│   ├── Contact/     # Contact form
│   ├── Layout/      # Header, Footer, Navigation
│   └── ...
├── types/           # TypeScript type definitions
├── page.tsx         # Homepage
└── globals.css      # Global styles
```

## Key Components

### Homepage Sections (in order)

1. **Hero** - Main banner
2. **Courses** (NamesList) - Course offerings
3. **Highlights** - Events, competitions, workshops, achievements
4. **Partners** - Partner organizations
5. **Mentor** - Team/mentors section
6. **Companies** - Client companies
7. **Testimonial** - Student testimonials
8. **ContactForm** - Contact section

## Development

```bash
# Install dependencies
npm install

# Run dev server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Configuration

- **ESLint**: Errors ignored during builds (`next.config.ts`)
- **Images**: Unoptimized mode enabled
- **Dev Server**: Uses Turbopack for faster builds

## API Routes

Located in `src/app/api/` - handles data fetching and backend operations.

## Styling

- Global styles: `src/app/globals.css`
- Tailwind CSS 4 with PostCSS
- Dark mode support via `next-themes`
- Custom animations with Framer Motion and AOS

## Notes for LLMs

- This is a **single-page marketing website** for a robotics education company
- Main content focuses on: courses, events, partnerships, testimonials
- Uses **App Router** (not Pages Router)
- TypeScript types defined in `src/app/types/`
- Component structure is modular - each section is self-contained
- Recent updates replaced tech courses with robotics courses and added highlights section
