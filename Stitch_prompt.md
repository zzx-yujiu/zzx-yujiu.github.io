# Personal Website Wireframe Prompt

## Project Overview
Design a personal website wireframe with a bold typography design system. The website should be clean, professional, and focused on typography rather than imagery. **Do not include any profile photos, avatars, or character images.**

---

## Design System Reference
Apply the **Bold Typography Design System** throughout the entire website:
- Dark mode color scheme (near-black background #0A0A0A, warm white text #FAFAFA, vermillion accent #FF3D00)
- Typography-first approach with extreme scale contrast
- Sharp corners (0px border-radius everywhere)
- Generous negative space and deliberate hierarchy
- Minimal use of colors (black, white, one accent)
- No shadows, no rounded corners, no decorative images

---

## Website Structure

### 1. Overall Information Section
**Purpose**: Display personal brand identity and showcase work/contact information

**Layout**:
- Full-width section at the top
- Two subsections arranged vertically or as cards:
  
  **Subsection 1: Personal Homepage**
  - Large logo area at top (text-based logo or initials, no image)
  - Hero statement: "HI HERE IS ZX" (use text-8xl to text-9xl, tight tracking)
  - Contact button/link below (underlined accent style)
  
  **Subsection 2: Work Display / Contact**
  - Section title with display typography
  - Grid of work items or contact methods (text-based cards)
  - Each card: title, brief description, link (no thumbnails)

---

### 2. Page Structure Section
**Purpose**: Main content organization with clear navigation hierarchy

#### 2.1 Homepage
**Layout**:
- **Logo Area**: 
  - Top-left or top-right corner (fixed position)
  - Text-based logo (large display type, tight tracking)
  - Should be prominent but not overwhelming
  
- **Main Content Area**:
  - Large hero headline: "HI HERE IS ZX" 
  - Typography: text-7xl (mobile) → text-8xl (desktop)
  - Letter-spacing: -0.06em
  - Centered or left-aligned with generous margin
  
- **Bottom Section**:
  - Contact CTA with accent underline
  - Links or buttons (ghost or primary style)

#### 2.2 About Page
**Layout**:
- Single column, centered content (max-w-3xl)
- Large section headline (text-6xl)
- Free-form text blocks with generous line-height (1.75)
- Pull quotes using Playfair Display serif (if applicable)
- No images, pure text content

#### 2.3 Contact Page
**Layout**:
- **Header Section**:
  - Large headline: "Get In Touch" (text-5xl to text-6xl)
  
- **Contact Methods**:
  - Two-column grid (stacks on mobile)
  - Left column: Avatar placeholder (use decorative letter or geometric shape, NO photo)
  - Right column: Contact methods list
    - Each method: icon (lucide-react) + label + link
    - Email, GitHub, LinkedIn, etc.
    - Use monospace font for email addresses

#### 2.4 Portfolio/Work Page
**Layout**:
- Section headline (text-5xl)
- Grid of project cards (1 col mobile → 2 col tablet → 3 col desktop)
- Each card structure:
  - No image/thumbnail
  - Project title (text-2xl, tight tracking)
  - Brief description (text-base, max 2 lines)
  - Tech stack labels (uppercase, wide tracking, text-xs)
  - Link with arrow icon (→)
- Accent top border on featured projects (h-1 w-16 bg-accent)

---

### 3. Navigation & Jumping Section
**Purpose**: Site-wide navigation system

#### 3.1 Navigation Bar Position
- **Fixed at top-right corner** of viewport
- Sticky/fixed positioning (stays visible on scroll)
- Minimal, elegant, doesn't obstruct content

#### 3.2 Navigation Items
- **Links**: "Home", "About", "Contact", "Work"
- Horizontal layout on desktop, could be hamburger menu on mobile
- Typography: uppercase, tracking-wider (0.1em), text-sm
- Underline animation on hover (scale-x-0 to scale-x-100)

#### 3.3 Jump Method
- **Click-based navigation** (no hover menus)
- Smooth scroll behavior
- Active state: accent color underline (2px solid)

---

### 4. Visual Style
**Theme**: Clean, editorial, poster-like aesthetic

---

### 5. Color Scheme

**Palette**:
- Background: #0A0A0A (near-black)
- Foreground: #FAFAFA (warm white)
- Muted Background: #1A1A1A (cards, inputs)
- Muted Foreground: #737373 (secondary text)
- Accent: #FF3D00 (vermillion - use sparingly for CTAs, underlines, highlights)
- Border: #262626 (subtle dividers)

**Usage**:
- Primary text: foreground
- Headings: foreground with accent underlines
- Links: accent color with animated underline
- Backgrounds: alternate between background and muted
- Dividers: full-width 1px border lines

**Distribution**:
- Main color (background): 70%
- Strong color (foreground): 25%
- Accent color: 5% (CTAs, underlines, focus states only)

---

### 6. Interaction Effects

#### 6.1 Page Transitions
- Fade in + slide up animation (opacity 0→1, translateY 20px→0)
- Duration: 500ms with stagger delay
- Smooth scroll between sections

#### 6.2 Hover Effects
- **Links/Buttons**: 
  - Underline scale animation (150ms)
  - Color shift to accent
  - Press feedback: translate-y-px
  
- **Cards**:
  - Border color lightens (150ms)
  - No scale, no shadow, no lift
  
- **Interactive Elements**:
  - Focus ring: 2px accent outline with 2px offset
  - Crisp easing: cubic-bezier(0.25, 0, 0, 1)

#### 6.3 Loading Effects
- Simple fade-in for content sections
- Skeleton states use border color (#262626)
- No spinners, use text loading indicators if needed

---

## Specific Component Guidelines

### Typography Examples
- **Hero Headline**: text-8xl, font-semibold, tracking-tighter (-0.06em), line-height-none
- **Section Headlines**: text-5xl to text-6xl, tracking-tight (-0.04em), line-height-tight
- **Subheadings**: text-2xl to text-3xl, tracking-tight
- **Body Text**: text-base (16px), line-height-relaxed (1.75), max-w-2xl
- **Labels/Metadata**: text-xs, uppercase, tracking-widest (0.2em), monospace font

### Buttons
- **Primary**: Text-only with accent color, animated underline, uppercase
- **Secondary**: 1px border, full inversion on hover
- **Ghost**: No border, underline appears on hover
- All buttons: sharp corners, no shadows, min height 44px (mobile) to 56px (desktop)

### Cards
- Border: 1px solid border color
- Background: transparent or muted
- Padding: p-6 (mobile) → p-8 (desktop)
- No radius, no shadow
- Accent top bar on featured items (h-1 w-16)

### Forms/Inputs
- Background: #1A1A1A (input color)
- Border: 1px solid #262626
- Height: h-12 to h-14
- Sharp corners (rounded-none)
- Focus: border-accent, no glow
- Placeholder: muted foreground color

### Icons
- Source: lucide-react (outline style only)
- Stroke width: 1.5px
- Sizes: 16-24px based on context
- Color: currentColor or explicit accent
- Use sparingly - prefer text labels

---

## Layout Specifications

### Container
- Max-width: 1200px (max-w-5xl)
- Padding: 24px (mobile) → 48px (tablet) → 64px (desktop)

### Section Spacing
- Standard: py-28 (112px vertical padding)
- Hero sections: py-40 (160px)
- Tight sections: py-20 (80px)

### Grid Systems
- Asymmetric splits: 7/5 or 8/4 instead of 6/6
- Stats: 1 → 2 → 4 columns
- Projects: 1 → 2 → 3 columns
- Footer: 2 → 4 → 5 columns

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## Key Design Requirements

1. **No Profile Photos**: Use text-based avatars (initials), geometric shapes, or decorative typography instead
2. **Typography First**: Headlines are the visual hero, not images
3. **High Contrast**: Ensure 18:1 ratio for main text, minimum 5.3:1 for secondary
4. **Sharp Edges**: 0px border-radius on all elements
5. **Generous Spacing**: Don't be afraid of white space - it frames the typography
6. **Minimal Color**: Primarily black and white with strategic accent usage
7. **Clear Hierarchy**: Every element has a distinct visual rank
8. **Underlines for Interaction**: Primary affordance for clickable elements
9. **Fast, Decisive Motion**: 150-200ms transitions, no bouncy easing
10. **Accessibility**: Minimum 44px touch targets, visible focus states, semantic HTML

---

## Additional Considerations

### Texture & Polish
- Add subtle noise grain overlay (1.5% opacity) for tactile quality
- Use decorative oversized numbers/text behind content (low opacity)
- Thin horizontal accent bars (h-1 w-16) as visual anchors
- Full-width divider lines to separate major sections

### Content Placeholders
- Use realistic text lengths (not "Lorem ipsum")
- Headline examples: "HI HERE IS ZX", "About Me", "Let's Connect", "Recent Work"
- Body text: 2-3 lines per paragraph, line-length max 65-75 characters
- Metadata: "2024", "React", "TypeScript", etc.

### Avoid
- Stock photos or illustrations
- Gradient backgrounds
- Drop shadows
- Rounded corners
- Multiple accent colors
- Decorative icons without purpose
- Overly playful animations
- Generic UI patterns

---

## Deliverable Requirements

Generate a **high-fidelity wireframe/prototype** that demonstrates:
1. Overall page structure and layout
2. Typography hierarchy and scale
3. Navigation system and placement
4. Interactive element states (default, hover, focus)
5. Responsive behavior across breakpoints
6. Color application and contrast
7. Spacing system and grid alignment

The wireframe should feel like a **poster design translated to web** - confident, editorial, and typographically driven.
