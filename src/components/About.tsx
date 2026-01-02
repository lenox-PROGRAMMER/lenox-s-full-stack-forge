import { Code2, Database, Globe, Shield, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Full-Stack Expertise",
    description: "Experience across frontend and backend development, ensuring seamless integration."
  },
  {
    icon: Shield,
    title: "Security Focused",
    description: "Strong focus on security and data protection in system design."
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "Building systems designed to scale from startup to enterprise."
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Prioritizing usability and user experience in every project."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Building Digital <span className="text-gradient">Experiences</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a full-stack developer, I specialize in creating end-to-end solutions 
              that span education, workforce management, finance, communication, and utilities—reflecting 
              my versatility and commitment to delivering both complex enterprise systems 
              and lightweight applications.
            </p>
          </div>
          
          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-glow/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* Tech stack */}
          <div className="mt-20">
            <h4 className="text-center text-sm font-mono text-muted-foreground mb-8 tracking-wider uppercase">
              Technologies I Work With
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'REST APIs', 'GraphQL', 'Tailwind CSS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
