import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-secondary border border-border animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="text-gradient">Lenox</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full-Stack Developer
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I build secure, scalable, and user-friendly systems across education, 
            workforce management, finance, and utilities.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border hover:bg-secondary">
              <Github className="w-4 h-4" />
              View GitHub
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a href="#" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors group">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors group">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors group">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
