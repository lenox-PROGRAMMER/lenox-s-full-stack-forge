import { ExternalLink, Github, GraduationCap, Users, BarChart3, Wallet, Contact, Smartphone, Gamepad2, Calculator } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    icon: GraduationCap,
    title: "School Management System",
    description: "End-to-end platform for managing students, teachers, classes, and administration with comprehensive reporting.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Users,
    title: "Workers Management System",
    description: "Robust backend solution for employee records, attendance tracking, and workflow automation.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: BarChart3,
    title: "NIIM Project Tracker",
    description: "Tool for tracking project progress, milestones, and deliverables with clear visibility and analytics.",
    tags: ["React", "TypeScript", "Supabase", "Charts"],
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    icon: Wallet,
    title: "Expense Tracker",
    description: "Application for monitoring personal and organizational expenses with detailed reporting features.",
    tags: ["React", "Node.js", "PostgreSQL", "PDF Export"],
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    icon: Contact,
    title: "Contact Management System",
    description: "Centralized system for storing, organizing, and retrieving contact information efficiently.",
    tags: ["React", "Firebase", "Material UI", "Search"],
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: Smartphone,
    title: "Phone Tracking Application",
    description: "Utility for monitoring and managing mobile devices securely with real-time updates.",
    tags: ["React Native", "Node.js", "WebSocket", "Maps"],
    color: "from-teal-500/20 to-cyan-500/20"
  },
  {
    icon: Gamepad2,
    title: "Aviator",
    description: "Custom-built solution showcasing creativity and technical depth with engaging gameplay.",
    tags: ["JavaScript", "Canvas API", "Game Logic", "Animation"],
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: Calculator,
    title: "Calculator",
    description: "Lightweight yet functional application demonstrating precision, usability, and clean design.",
    tags: ["React", "TypeScript", "CSS", "Math.js"],
    color: "from-slate-500/20 to-gray-500/20"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects spanning education, workforce management, finance, 
              communication, and utilities—each demonstrating my commitment to quality and innovation.
            </p>
          </div>
          
          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group relative p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                        <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </a>
                      <a href="#" className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
