import { ProcessStep, Testimonial } from '@/lib/types'

export const processSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'DISCOVER & AUDIT',
    tagline: 'Deconstructing Objectives & Technical Constraints',
    duration: 'Week 1',
    description: 'We align on brand positioning, conversion goals, visual identity, and 3D narrative requirements. We map user flows, performance budgets, and GPU targets.',
    deliverables: [
      'Interactive Moodboard & 3D Style Concept',
      'Technical Architecture & Performance Budget',
      'Site Sitemap & Wireframe Motion Maps'
    ],
    iconName: 'Compass',
  },
  {
    stepNumber: '02',
    title: 'DESIGN & PROTOTYPE',
    tagline: 'Translating Static Vision to Interactive Motion',
    duration: 'Weeks 2–3',
    description: 'I build 3D mesh prototypes, GLSL shader material tests, and Framer Motion UI micro-interactions to establish the exact feel before full codebase integration.',
    deliverables: [
      '3D Hero & Shader Prototype Viewport',
      'Framer Motion UI Component System',
      'Responsive Layout Design Tokens'
    ],
    iconName: 'Layout',
  },
  {
    stepNumber: '03',
    title: 'BUILD & CHOREOGRAPH',
    tagline: 'Production Code & WebGL Engine Integration',
    duration: 'Weeks 4–5',
    description: 'Writing modular Next.js App Router code, optimizing R3F canvas render loops, building accessible keyboard fallbacks, and binding scroll triggers.',
    deliverables: [
      'Clean TypeScript Codebase',
      'Isolated R3F Canvas Components',
      'SEO & Metadata Integration'
    ],
    iconName: 'Code',
  },
  {
    stepNumber: '04',
    title: 'REFINE & OPTIMIZE',
    tagline: 'Surgical Frame-Rate & Device Capability Tuning',
    duration: 'Week 6',
    description: 'Testing across mobile GPU tiers, low-power devices, screen readers, and reduced-motion settings. Guaranteeing 60+ FPS on target devices.',
    deliverables: [
      'Tiered Performance Strategy (Full/Reduced/Fallback)',
      'Lighthouse Audit Scorecard',
      'Cross-Browser & Mobile QA Certification'
    ],
    iconName: 'Zap',
  },
  {
    stepNumber: '05',
    title: 'LAUNCH & HANDOFF',
    tagline: 'Seamless Deployment & Production Analytics',
    duration: 'Final Stage',
    description: 'Deploying to Vercel with edge caching, automated asset compression, and providing clean documentation for future content additions.',
    deliverables: [
      'Vercel Production Deployment',
      'Developer Documentation & Asset Guide',
      '30-Day Post-Launch Support'
    ],
    iconName: 'Rocket',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Elena Rostova',
    role: 'Design Director',
    company: 'Forma Studio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    text: 'Yash delivered an interactive 3D web experience that elevated our architectural brand to an international level. Clients are mesmerized by the 3D material showcase.',
    relationship: 'Case Study Partner (Forma Studio)',
    projectLink: '/work/forma-studio',
  },
  {
    id: '2',
    author: 'Marcus Vance',
    role: 'Founder & Culinary Officer',
    company: 'Ember & Spice Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: 'The Ember & Spice website surpassed all third-party booking channels within 30 days of launch. Direct reservations jumped by over 300%. Pure digital craft.',
    relationship: 'Case Study Partner (Ember & Spice)',
    projectLink: '/work/ember-spice',
  },
  {
    id: '3',
    author: 'David Chen',
    role: 'VP of Product',
    company: 'Aether Technologies',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    text: 'Working with Yash felt like adding a senior creative engineer to our core team. His technical depth in WebGL shaders and UI animation is unmatched.',
    relationship: 'Direct Client',
  },
]
