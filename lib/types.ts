export type PerformanceTier = 'full' | 'reduced' | 'fallback'

export interface ProjectConcept {
  title: string
  text: string
  details: string[]
}

export interface ProjectMetric {
  label: string
  value: string
  description?: string
}

export interface ProjectGalleryItem {
  url: string
  caption: string
}

export interface Project {
  id: string
  slug: string
  number: string
  title: string
  subtitle: string
  category: string
  tagline?: string
  client: string
  year: string
  area?: string
  coverImage: string
  heroImage: string
  description: string
  concept: ProjectConcept
  techStack: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  metrics?: ProjectMetric[]
  gallery: ProjectGalleryItem[]
  featured: boolean
  isConcept?: boolean
}

export interface SkillItem {
  id: string
  name: string
  category: '3D & WebGL' | 'Core Frontend' | 'State & Architecture' | 'Design Systems' | 'Performance & Tooling'
  iconName: string
  description: string
  level: string
  position3D: [number, number, number]
  accentColor?: string
}

export interface ProcessStep {
  stepNumber: string
  title: string
  tagline: string
  duration: string
  description: string
  deliverables: string[]
  iconName: string
}

export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  avatar: string
  text: string
  relationship: string
  projectLink?: string
}

export interface ProfileConfig {
  name: string
  title: string
  shortBio: string
  positioningStatement: string
  editorialStatement: string
  availabilityStatus: 'Available' | 'Limited Availability' | 'Booked'
  availabilityPeriod: string
  email: string
  github: string
  linkedin: string
  twitter: string
  location: string
  yearsExperience: string
  completedProjects: string
}
