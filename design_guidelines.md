# Design Guidelines for Diamond Luxury Renovation

## Design Approach
**Reference-Based Approach**: Premium luxury service website inspired by high-end hospitality and luxury brands (similar to high-end hotel websites, luxury real estate platforms). Focus on sophistication, trust, and visual impact with dramatic hero imagery and elegant typography.

## Core Design Elements

### A. Color Palette

**Primary - Diamond Scale** (Dark Mode Base):
- diamond-900: 15 23 42 (Deep navy - primary backgrounds)
- diamond-800: 30 41 59 (Rich navy - header gradients)
- diamond-700: 51 65 85 (Medium navy - accents)
- diamond-50: 248 250 252 (Light background)

**Accent - Luxury Gold Scale**:
- luxury-600: 202 138 4 (Primary gold for CTAs)
- luxury-500: 234 179 8 (Bright gold)
- luxury-400: 253 224 71 (Highlight gold for stars/accents)
- luxury-300: 254 239 187 (Light gold for text on dark)

**Utility Colors**:
- Red-50/500/600: For pain points section (50: backgrounds, 500/600: borders)
- Green-50/500: For solutions section
- White with opacity: For glassmorphic effects (white/10, white/20)
- Black with gradients: For overlays (black/40, black/60, black/80)

### B. Typography

**Font Family**: Montserrat (Google Fonts) - weights 300, 400, 500, 600, 700, 800, 900

**Hierarchy**:
- Hero Headlines: text-7xl, font-black, tracking-tight
- Section Headers: text-5xl to text-6xl, font-bold
- Subheadings: text-2xl to text-3xl, font-bold
- Body Text: text-lg to text-xl, font-light to font-medium
- Small Labels: text-sm, uppercase, tracking-wider

### C. Layout System

**Spacing Units**: Use Tailwind's default scale with focus on:
- Section padding: py-20
- Container max-width: max-w-7xl with px-6
- Component gaps: gap-6, gap-8, gap-16
- Card padding: p-6

**Grid Patterns**:
- Gallery: grid md:grid-cols-2 lg:grid-cols-4 gap-8
- Two-column sections: grid lg:grid-cols-2 gap-16

### D. Component Library

**Header**:
- Gradient background: from-diamond-900 via-diamond-800 to-diamond-900
- Logo: 16x16 (w-16 h-16) with gradient from-luxury-400 to-luxury-600, rounded-xl
- Star rating display: glassmorphic card with bg-white/10, backdrop-blur-sm, border-white/20

**Hero Section**:
- Full viewport height with background image overlay
- Gradient overlays: from-black/40 via-black/60 to-black/80
- Two CTA buttons: Primary (luxury-600 gold, rounded-full, px-10 py-4) and Secondary (border-2 border-white outline style)
- Decorative divider: w-24 h-1 bg-luxury-500

**Gallery Cards**:
- Rounded-xl with shadow-xl
- Image height: h-64, object-cover
- Gradient overlay at bottom: from-black/80 to-transparent
- Hover effect: scale-105 transform

**Pain Points & Solutions Cards**:
- Border-l-4 with colored borders (red-500 for problems, green-500 for solutions)
- Background tints: bg-red-50 and bg-green-50
- Icon + text layout with space-x-4

**Buttons**:
- Primary: bg-luxury-600 hover:bg-luxury-700, rounded-full, shadow-2xl
- Secondary: border-2 border-white, hover:bg-white hover:text-diamond-900
- All buttons: font-semibold text-lg, transform hover:scale-105

### E. Visual Effects

**Gradients**:
- Header: linear gradient across diamond scale
- Hero overlay: multi-stop black gradients
- Logo/accent elements: from-luxury-400 to-luxury-600
- Section backgrounds: from-gray-50 to-white

**Interactions**:
- Gallery items: transform scale(1.05) on hover, transition duration-300
- Buttons: scale-105 on hover with transition-all
- Smooth scroll behavior for navigation

### F. Images

**Large Hero Image**: 
Full-screen background image of luxury interior/renovation (currently using Unsplash: modern luxury living room). Overlaid with dark gradients for text readability.

**Gallery Images** (4 images, h-64 each):
1. Kitchen Renovation - modern luxury kitchen
2. Hardwood Flooring - elegant wood floor installation
3. Bathroom Remodel - spa-like bathroom transformation
4. Staircase Refinish - refined wooden staircase

All images use object-cover, rounded-xl corners, and have gradient overlays at the bottom for text labels.

### G. Brand Elements

**Star Rating**: Five gold stars (⭐) with 5.0 score prominently displayed in header
**Logo Icon**: Diamond/star SVG in white on gold gradient background
**Tagline**: "Premium General Contractor" in uppercase, tracking-wider, luxury-300 color
**Decorative Dividers**: 24px wide, 4px tall gold bars (w-24 h-1 bg-luxury-500) centered under major headings