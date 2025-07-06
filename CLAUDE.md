# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the FEVR VR casino waitlist website.

## Project Overview
FEVR is a VR casino gaming platform waitlist website. Users can sign up for early access to experience poker, blackjack, roulette, and slots in immersive virtual reality environments.

## Development Commands

### Core Development
- `npm run dev` - Start development server with local PGlite database and Spotlight debugging
- `npm run build` - Build for production (includes database migrations)
- `npm run start` - Start production server
- `npm run clean` - Clean build artifacts

### Code Quality
- `npm run lint` - Run ESLint on entire codebase
- `npm run lint:fix` - Auto-fix linting issues
- `npm run check:types` - TypeScript type checking without emitting files
- `npm run check:deps` - Check for unused dependencies with Knip

### Testing
- `npm run test` - Run unit tests with Vitest
- `npm run test:e2e` - Run end-to-end tests with Playwright
- Individual test files can be run with `npm run test -- path/to/test.test.ts`

### Database Operations
- `npm run db:generate` - Generate database migrations from schema changes
- `npm run db:studio` - Open Drizzle Studio at https://local.drizzle.studio
- `npm run db-server:file` - Start local database server with persistent storage
- `npm run db-server:memory` - Start in-memory database server

### Other Tools
- `npm run commit` - Interactive commit message creation with Commitizen
- `npm run build-stats` - Analyze bundle size with webpack-bundle-analyzer
- `npm run lighthouse` - Run Lighthouse performance tests

## Architecture Overview

### Next.js App Router Structure
- `src/app/[locale]/` - Single locale (English) routing
- `src/app/[locale]/(auth)/` - Authentication pages (sign-in, sign-up, dashboard)
- `src/app/[locale]/(marketing)/` - Main landing page and waitlist functionality
- Simplified layout structure focused on waitlist conversion

### Database & Data Layer
- **Primary Table**: `waitlistSchema` in `src/models/Schema.ts` for storing user signups
- **Fields**: email, firstName, lastName, isVrOwner, vrHeadset, referralCode, isEmailVerified, waitlistPosition
- **ORM**: Drizzle ORM with PostgreSQL support
- **Local Development**: Uses PGlite for local database (stored in `local.db/`)
- **Production**: Configured for external PostgreSQL databases

### Waitlist Functionality
- **API Endpoint**: `/api/waitlist` (POST) for user signup
- **Validation**: Zod schema in `src/validations/WaitlistValidation.ts`
- **Components**: `WaitlistForm.tsx` handles form submission and user feedback
- **Features**: Email validation, VR headset tracking, referral codes, waitlist positioning

### Authentication & Security
- **Auth Provider**: Clerk for user authentication
- **Security**: Arcjet integration for bot detection and WAF protection
- **Middleware**: `src/middleware.ts` handles auth and security
- **Protected Routes**: Dashboard area for authenticated users

### Internationalization
- **Language**: English only (simplified from original boilerplate)
- **Routing**: Configured in `src/libs/I18nRouting.ts`
- **Localization**: `src/locales/en.json` contains FEVR-specific content

### Configuration & Environment
- **App Config**: `src/utils/AppConfig.ts` contains FEVR branding
- **Required Variables**: `DATABASE_URL`, `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- **Optional**: PostHog analytics, Better Stack logging, Arcjet security

### Styling & Theme
- **Framework**: Tailwind CSS 4
- **Theme**: Dark VR-inspired theme with purple/pink gradients
- **Responsive**: Mobile-first design optimized for conversion
- **Components**: Glassmorphism effects, gradient backgrounds, VR aesthetic

### Key FEVR-Specific Features
- VR headset selection in waitlist form
- Position tracking in waitlist
- Email validation and duplicate prevention
- Referral code system for viral growth
- VR ownership tracking for user segmentation
- Casino gaming themed copy and design

### Key Implementation Notes
- Waitlist form validates email uniqueness before submission
- Users receive immediate feedback on their waitlist position
- VR headset data helps with market research and compatibility planning
- Referral codes enable tracking viral growth
- Authentication is optional for waitlist signup but available for dashboard access
