import { NavItem, PortfolioItem, Testimonial, Service, TeamMember } from "../types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    id: 1,
    title: "AI Workflows",
    description: "Automate repetitive tasks and scale your operations with intelligent AI solutions.",
    icon: "brain-circuit",
  },
  {
    id: 2,
    title: "Web & App Builds",
    description: "Custom websites and apps delivered in 48 hours or less, tailored to your needs.",
    icon: "code",
  },
  {
    id: 3,
    title: "Chat & Voice Bots",
    description: "Real-time automation that talks and sells for you, available 24/7.",
    icon: "message-circle",
  },
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Mudit Raghav",
    role: "Lead Innovator",
    description: "Innovator with 4 years of experience — currently shaping the future at SwiftCode.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Aryan Singh",
    role: "Full-stack Developer",
    description: "Full-stack developer with 6 years of experience — building bold solutions with the SwiftCode team.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Theo Du Toit",
    role: "CEO & AI Expert",
    description: "AI & no-code expert with 4 years of experience — CEO & visionary behind SwiftCode.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "AI-Powered Customer Service Platform",
    description: "Automated support system handling 10,000+ inquiries daily with 98% satisfaction rate.",
    image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg",
    tags: ["AI", "Machine Learning", "Customer Service"]
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    description: "Full-featured shopping app delivered in 48 hours with seamless payment integration.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    tags: ["Mobile", "E-commerce", "React Native"]
  },
  {
    id: 3,
    title: "Intelligent Chatbot Solution",
    description: "24/7 automated sales assistant increasing conversion rates by 45%.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    tags: ["Chatbot", "NLP", "Sales Automation"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Inc",
    content: "The AI automation system built by Swift transformed our customer support. Response times dropped by 80% while satisfaction increased.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Founder",
    company: "GrowthPro",
    content: "48-hour delivery seemed impossible, but they delivered a fully functional app that exceeded our expectations. Incredible service!",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Innovate AI",
    content: "The chatbot they built handles 90% of our customer queries automatically. It's like having a full support team working 24/7.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];