# Diamond Luxury Renovation Website

## Overview
Multi-page responsive website for Diamond Luxury Renovation, a premium general contractor in Brampton, Ontario. Built with React, TailwindCSS, and a dark navy + gold luxury color palette.

## Recent Changes
- January 2025: Initial multi-page website build with all core pages, service pages, service area pages, and legal pages

## Project Architecture

### Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: TailwindCSS with custom color scheme
- **Backend**: Express.js (ready for API integration)
- **Routing**: Wouter

### Color Scheme
- **diamond**: Navy blue scale (50-900) for primary brand colors
- **luxury**: Gold scale (50-900) for accent and CTAs

### File Structure
```
client/src/
├── pages/
│   ├── Home.tsx              # Homepage with hero, trust badges, services preview
│   ├── About.tsx             # Company story, values, certifications
│   ├── ServicesOverview.tsx  # Grid of all services
│   ├── Portfolio.tsx         # Before/after galleries
│   ├── Testimonials.tsx      # Customer reviews with schema
│   ├── Blog.tsx              # Renovation tips and guides
│   ├── Contact.tsx           # Lead capture form
│   ├── services/
│   │   ├── Flooring.tsx
│   │   ├── Staircase.tsx
│   │   ├── Framing.tsx
│   │   ├── Bathroom.tsx
│   │   └── Basement.tsx
│   ├── service-area/
│   │   ├── Brampton.tsx
│   │   ├── Mississauga.tsx
│   │   ├── Vaughan.tsx
│   │   ├── Caledon.tsx
│   │   ├── Toronto.tsx
│   │   └── ServiceAreaTemplate.tsx
│   └── legal/
│       ├── PrivacyPolicy.tsx
│       ├── Terms.tsx
│       └── Accessibility.tsx
├── components/
│   ├── Layout.tsx            # Shared page layout with Header/Footer
│   ├── Header.tsx            # Sticky nav with mobile menu
│   ├── Footer.tsx            # Contact info, links, social
│   ├── Hero.tsx              # Hero section for homepage
│   ├── Gallery.tsx           # Before/after image gallery
│   ├── Services.tsx          # Services grid component
│   ├── CTASection.tsx        # Call-to-action sections
│   ├── OwnerTestimonial.tsx  # Owner quote section
│   ├── PainPointsSolutions.tsx
│   └── SchemaMarkup.tsx      # JSON-LD structured data
└── App.tsx                   # Route definitions
```

### Routes
| Path | Page |
|------|------|
| `/` | Homepage |
| `/about` | About Us |
| `/services` | Services Overview |
| `/services/flooring` | Flooring Installation |
| `/services/staircase` | Staircase Refinishing |
| `/services/framing` | Framing |
| `/services/bathroom` | Bathroom Renovations |
| `/services/basement` | Basement Renovations |
| `/portfolio` | Project Portfolio |
| `/testimonials` | Customer Reviews |
| `/blog` | Blog/Insights |
| `/contact` | Contact Form |
| `/service-area/brampton` | Brampton Service Area |
| `/service-area/mississauga` | Mississauga Service Area |
| `/service-area/vaughan` | Vaughan Service Area |
| `/service-area/caledon` | Caledon Service Area |
| `/service-area/toronto` | Toronto Service Area |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/accessibility` | Accessibility Statement |

### SEO Features
- Unique title and meta description for every page
- JSON-LD LocalBusiness schema
- Review schema on testimonials page
- FAQPage structure on service pages
- Open Graph meta tags
- Semantic HTML structure

### Contact Information
- Phone: (416) 414-9170
- Email: gtaprorenovations@gmail.com
- Hours: Mon-Fri 7AM-6PM, Sat 8AM-4PM
- Service Areas: Brampton, Mississauga, Vaughan, Caledon, Toronto

## User Preferences
- User is technical and prefers modular, editable code structure
- Clean component architecture for easy feature additions
- Consistent styling with Tailwind utility classes
