import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'forma-studio',
    slug: 'forma-studio',
    number: '01',
    title: 'FORMA STUDIO',
    subtitle: 'Luxury Interior Architecture & Design',
    category: 'Luxury Interior Architecture & Design',
    tagline: 'We design spaces that feel like home.',
    client: 'Forma Studio',
    year: '2024',
    coverImage: '/assets/projects/forma-studio-cover.jpg',
    heroImage: '/assets/projects/forma-studio-cover.jpg',
    description: 'A concept portfolio site for a fictional interior architecture studio, blending Scandinavian clarity with warm tropical materiality. Features a 5-stage design process (Discover → Concept → Design → Visualize → Execute), a material specification board, and project case studies (The Aria Residence, Casa Verde, Noir Café, The Oak House).',
    concept: {
      title: 'Scandinavian Clarity & Warm Tropical Materiality',
      text: 'Forma Studio balances heavy architectural volume with delicate natural light and tactile physical materials. The site translates 3D spatial materiality into an interactive digital experience.',
      details: [
        '5-stage architectural workflow (Discover → Concept → Design → Visualize → Execute)',
        'Interactive Material Specification Board highlighting Travertine Navona, Smoked Oak, and Satin Bronze',
        'Featured project case studies (The Aria Residence, Casa Verde, Noir Café, The Oak House)',
        'Fluid layout choreography with Framer Motion spring physics and monospaced architectural typography'
      ]
    },
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '3D/Architectural Interaction'],
    features: [
      '5-Stage Architectural Process',
      'Material Specification Board',
      'Spatial Sightline Choreography',
      'Case Study Viewports'
    ],
    liveUrl: 'https://forma-studio-tan-theta.vercel.app/',
    githubUrl: 'https://github.com/yashkhanapure18/forma-studio',
    caseStudyUrl: '/work/forma-studio',
    metrics: [
      { label: 'Design Stages', value: '5-Step', description: 'Discover to Execution workflow' },
      { label: 'Featured Spaces', value: '4 Projects', description: 'Aria, Casa Verde, Noir, Oak House' },
      { label: 'Performance', value: '60 FPS', description: 'Fluid scroll choreography' }
    ],
    gallery: [
      { url: '/assets/projects/forma-studio-cover.jpg', caption: 'Forma Studio — Hero Section & Architectural Identity' },
      { url: '/assets/projects/forma-studio-detail.jpg', caption: 'Forma Studio — 5-Stage Process & Material Board Showcase' }
    ],
    featured: true,
  },
  {
    id: 'ember-spice',
    slug: 'ember-spice',
    number: '02',
    title: 'EMBER & SPICE',
    subtitle: 'Restaurant Branding & Conversion UX',
    category: 'Restaurant Branding & Conversion UX',
    tagline: 'Indian flavours. Reimagined.',
    client: 'Ember & Spice Fine Dining Group',
    year: '2024',
    coverImage: '/assets/projects/ember-spice-cover.jpg',
    heroImage: '/assets/projects/ember-spice-cover.jpg',
    description: 'A contemporary Indian fine-dining restaurant site for Pune, featuring an interactive reservation flow, a signature "Dining Journey" scroll interaction (Arrive → Discover → Taste → Connect → Remember), full menu with dietary filtering, and subtle React Three Fiber ember-particle accents in the hero and dish cards.',
    concept: {
      title: 'Sensory Storytelling & High-Conversion Reservation Flow',
      text: 'Ember & Spice translates the warmth of open wood-fire cooking into an evocative digital experience. Features a 5-step dining journey, live table reservation engine, and 3D ember particle accents.',
      details: [
        'Signature 5-step "Dining Journey" scroll interaction (Arrive → Discover → Taste → Connect → Remember)',
        'Interactive reservation engine driving direct table bookings',
        'Full culinary menu taxonomy with real-time dietary filtering (Vegan, Gluten-Free, Chef Specials)',
        'Subtle React Three Fiber ember-particle 3D canvas accents embedded in hero and dish cards'
      ]
    },
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Three Fiber'],
    features: [
      'R3F Ember Particle Accent Engine',
      '5-Step Dining Journey Component',
      'Multi-Category Menu Filter Engine',
      'Table Reservation Modal System'
    ],
    liveUrl: 'https://ember-and-spice-vert.vercel.app/',
    githubUrl: 'https://github.com/yashkhanapure18/ember-and-spice',
    caseStudyUrl: '/work/ember-spice',
    metrics: [
      { label: 'Direct Bookings', value: '+320%', description: 'Surpassed third-party portals' },
      { label: 'Page Speed', value: '98/100', description: 'Lighthouse Desktop Score' },
      { label: 'Conversion Rate', value: '8.4%', description: 'Visit to reservation rate' }
    ],
    gallery: [
      { url: '/assets/projects/ember-spice-cover.jpg', caption: 'Ember & Spice — Culinary Hero & Ember Canvas Accent' },
      { url: '/assets/projects/ember-spice-detail.jpg', caption: 'Ember & Spice — Signature 5-Step Dining Journey Showcase' }
    ],
    featured: true,
  },
  {
    id: 'nova-heights',
    slug: 'nova-heights',
    number: '03',
    title: 'NOVA HEIGHTS',
    subtitle: 'Immersive 3D Real Estate Experience',
    category: 'Immersive 3D Real Estate Experience',
    tagline: 'Cinematic 3D Architectural Real-Estate Experience',
    client: 'Fictional Architectural Showcase',
    year: '2025',
    coverImage: '/projects/nova-heights/cover.jpg',
    heroImage: '/projects/nova-heights/cover.jpg',
    description: 'Immersive 3D architectural experience featuring cinematic scroll storytelling, interactive room exploration, material switching, floor plans, and a private viewing experience.',
    concept: {
      title: 'Cinematic Architectural Visualization & Interactive Exploration',
      text: 'Built as an architectural visualization and fictional real-estate experience to demonstrate advanced 3D web capabilities. Features a cinematic scroll-driven building reveal, interactive room exploration, material switching, 3D architectural hotspots, interactive floor plans, responsive layouts, and a private viewing enquiry experience.',
      details: [
        'Cinematic scroll-driven camera storytelling revealing architectural volumes',
        'Interactive 3D room & material explorer powered by Three.js, React Three Fiber, and Drei',
        'Architectural 3D hotspots and interactive floor plan switching',
        'Responsive WebGL experience with graceful fallbacks and reduced-motion support',
        'Private viewing enquiry experience built with React Hook Form and Zod'
      ]
    },
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Three.js',
      'React Three Fiber',
      'Drei',
      'Tailwind CSS',
      'Framer Motion',
      'React Hook Form',
      'Zod'
    ],
    features: [
      'Cinematic 3D Hero',
      'Scroll Camera Storytelling',
      'Interactive Room Explorer',
      'Material Explorer',
      '3D Architectural Hotspots',
      'Interactive Floor Plans',
      'Architectural Gallery',
      'Private Viewing Form',
      'Responsive WebGL Experience',
      'WebGL Fallback',
      'Accessibility & Reduced-Motion Support'
    ],
    liveUrl: 'https://nova-heights.vercel.app/',
    githubUrl: 'https://github.com/yashkhanapure18/NOVA-HEIGHTS',
    caseStudyUrl: '/work/nova-heights',
    metrics: [
      { label: '3D Engine', value: 'R3F & Three.js', description: 'Real-time WebGL rendering' },
      { label: 'Interactivity', value: '8+ Features', description: 'Rooms, materials, hotspots & floor plans' },
      { label: 'Performance', value: '60 FPS', description: 'Responsive WebGL & fallback support' }
    ],
    gallery: [
      { url: '/projects/nova-heights/cover.jpg', caption: 'NOVA HEIGHTS — Cinematic 3D Architectural Hero' },
      { url: '/projects/nova-heights/detail.jpg', caption: 'NOVA HEIGHTS — Interactive Room & Material Explorer' }
    ],
    featured: true,
  },
  {
    id: 'aether-ai',
    slug: 'aether-ai',
    number: '04',
    title: 'AETHER AI STUDIO',
    subtitle: 'Spatial AI Platform Interface',
    category: 'Product & WebGL Interface',
    client: 'Aether Technologies Inc.',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=85&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=85&w=1920',
    description: 'A futuristic spatial AI interface that renders complex neural network data topologies in interactive 3D WebGL space with real-time audio reactivity.',
    concept: {
      title: 'Visualizing Invisible Intelligence',
      text: 'Translates high-dimensional vector embeddings into an intuitive 3D node network. Engineers can isolate clusters, inspect model activation pathways, and debug latent space in real-time.',
      details: [
        'GPU-instanced 3D node graph supporting over 10,000 active nodes',
        'Custom shader node connections with dynamic packet animation',
        'Integrated command palette with keyboard shortcuts and voice input',
        'Export capabilities to PyTorch and ONNX visualization formats'
      ]
    },
    techStack: ['Next.js', 'Three.js GLSL', 'React Three Fiber', 'Zustand', 'Tailwind CSS'],
    features: [
      'GPU Instanced Vector Graph',
      'Real-time Latent Inspector',
      'Spatial Node Camera Track',
      'Custom Dark Glass UI System'
    ],
    liveUrl: '#',
    caseStudyUrl: '/work/aether-ai',
    metrics: [
      { label: 'Graph Nodes', value: '10,000+', description: 'Rendered at 60 FPS' },
      { label: 'Latency', value: '< 16ms', description: 'Sub-frame input response' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=85&w=1200', caption: '3D Vector Latent Space Viewport' }
    ],
    featured: true,
    isConcept: true,
  },
  {
    id: 'chronos-watch',
    slug: 'chronos-watch',
    number: '05',
    title: 'CHRONOS CONFIGURATOR',
    subtitle: '3D E-Commerce Timepiece Engine',
    category: '3D E-Commerce Showcase',
    client: 'Chronos Swiss Horology',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=85&w=1200',
    heroImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=85&w=1920',
    description: 'An ultra-realistic 3D horology configurator enabling customers to customize dial finishes, case metals, and leather straps in physical lighting environments.',
    concept: {
      title: 'Photorealistic Precision Horology',
      text: 'Replaces flat product photos with a dynamic 3D lighting stage. Users switch between Studio, Desert Sun, and Cyber Midnight lighting environments while previewing material textures in 4K resolution.',
      details: [
        'HDR environment map switching with real-time reflection probes',
        'Physical material swapping (Rose Gold, Brushed Steel, Forged Carbon)',
        'Exploded mechanical view mode exposing 280+ 3D watch movement parts',
        'Instant AR view generator for mobile iOS QuickLook and Android SceneViewer'
      ]
    },
    techStack: ['React Three Fiber', 'Three.js PBR', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    features: [
      'Exploded Mechanical Gear View',
      'HDR Studio Lighting Switcher',
      'Bespoke Material Configurator',
      'WebXR Mobile AR Preview'
    ],
    liveUrl: '#',
    caseStudyUrl: '/work/chronos-watch',
    metrics: [
      { label: 'Sales Lift', value: '+45%', description: 'Custom configuration orders' },
      { label: '3D Model Size', value: '4.2 MB', description: 'Draco compressed mesh' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=85&w=1200', caption: 'Interactive Horology 3D Viewport' }
    ],
    featured: true,
    isConcept: true,
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getNextProject(currentSlug: string): Project {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]
}
